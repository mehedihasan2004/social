"use server";

import prisma from "./client";
import { auth } from "@clerk/nextjs/server";

export async function switchFollow(userId: string) {
  const { userId: currentUserId } = auth();

  if (!currentUserId) throw new Error("User is not authenticated!");

  try {
    const existingFollow = await prisma.follower.findFirst({
      where: { followerId: currentUserId, followingId: userId },
    });

    if (existingFollow) {
      await prisma.follower.delete({ where: { id: existingFollow.id } });
    } else {
      const existingFollowRequest = await prisma.followRequest.findFirst({
        where: { senderId: currentUserId, receiverId: userId },
      });

      if (existingFollowRequest) {
        await prisma.followRequest.delete({
          where: { id: existingFollowRequest.id },
        });
      } else {
        await prisma.followRequest.create({
          data: { senderId: currentUserId, receiverId: userId },
        });
      }
    }
  } catch (err) {
    throw new Error("Something went wrong!");
  }
}
