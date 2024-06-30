"use client";

import { useState } from "react";
import { switchFollow } from "@/lib/actions";

export function UserInfoCardInteraction({
  userId,
  currentUserId,
  isUserBlocked,
  isFollowing,
  isFollowingSent,
}: {
  userId: string;
  currentUserId: string;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowingSent: boolean;
}) {
  const [userState, setUserState] = useState({
    following: isFollowing,
    blocked: isUserBlocked,
    followingRequestSent: isFollowingSent,
  });

  async function follow() {
    try {
      await switchFollow(userId);

      setUserState((prev) => ({
        ...prev,
        following: prev.following && false,
        followingRequestSent:
          prev.following && !prev.followingRequestSent ? true : false,
      }));
    } catch (err) {}
  }

  return (
    <>
      <form action={follow}>
        <button className="w-full bg-blue-500 text-white text-sm rounded-md p-2">
          {userState.following
            ? "Following"
            : userState.followingRequestSent
            ? "Friend Request Sent"
            : "Follow"}
        </button>
      </form>
      <form action="" className="self-end">
        <span className="text-red-500 text-xs cursor-pointer">
          {userState.blocked ? "Unblock User" : "Block User"}
        </span>
      </form>
    </>
  );
}
