import Image from "next/image";
import { RightMenu } from "@/components/rightMenu/RightMenu";
import prisma from "@/lib/client";
import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { Feed } from "@/components/feed/Feed";
import { LeftMenu } from "@/components/leftMenu/LeftMenu";

function Item({ number, lable }: { number: number; lable: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-medium">{number}</span>
      <span className="text-sm">{lable}</span>
    </div>
  );
}

export default async function ProfilePage({
  params: { username },
}: {
  params: { username: string };
}) {
  const user = await prisma.user.findFirst({
    where: { username },
    include: {
      _count: { select: { followers: true, followings: true, posts: true } },
    },
  });

  if (!user) return notFound();

  const { userId: currentUserId } = auth();

  let isBlocked;

  if (currentUserId) {
    const res = await prisma.block.findFirst({
      where: { blockerId: user.id, blockedId: currentUserId },
    });

    if (res) isBlocked = true;
  } else {
    isBlocked = false;
  }

  if (isBlocked) return notFound();

  const items = [
    { number: user._count.posts, lable: "Posts" },
    { number: user._count.followers, lable: "Followers" },
    { number: user._count.followings, lable: "Following" },
  ];

  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image
                src={user.cover ?? "/noCover.png"}
                alt="Cover Image"
                fill
                className="object-cover rounded-md"
              />
              <Image
                src={user.avatar ?? "/noAvatar.png"}
                alt="Profile Image"
                height={128}
                width={128}
                className="size-32 rounded-full object-cover absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white"
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">
              {user.name && user.surname
                ? user.name + " " + user.surname
                : user.username}
            </h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              {items.map((item) => (
                <Item key={item.lable} {...item} />
              ))}
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu user={user} />
      </div>
    </div>
  );
}
