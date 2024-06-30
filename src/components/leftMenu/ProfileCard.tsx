import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

export async function ProfileCard() {
  const { userId: id } = auth();

  if (!id) return null;

  const user = await prisma.user.findFirst({
    where: { id },
    include: { _count: { select: { followers: true } } },
  });

  if (!user) return null;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src={user.cover ?? "/noCover.png"}
          alt={user.name ?? ""}
          fill
          className="rounded-md object-cover"
        />
        <Image
          src={user.avatar ?? "/noAvatar.png"}
          alt="Mom and Daughter"
          height={48}
          width={48}
          className="rounded-full size-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10 object-cover"
        />
      </div>
      <div className="h-20 flex flex-col gap-2 items-center">
        <span className="font-semibold">
          {user.name && user.surname
            ? user.name + " " + user.surname
            : user.username}
        </span>
        <div className="flex items-center gap-4">
          <div className="flex">
            <Image
              src="/liked.png"
              alt=""
              height={12}
              width={12}
              className="rounded-full object-cover size-3"
            />
            <Image
              src="/liked.png"
              alt="Liked"
              height={12}
              width={12}
              className="rounded-full object-cover size-3"
            />
            <Image
              src="/liked.png"
              alt="Liked"
              height={12}
              width={12}
              className="rounded-full object-cover size-3"
            />
          </div>
          <span className="text-xs text-gray-500">
            {user._count.followers} Followers
          </span>
        </div>
        <button className="bg-blue-500 text-white text-xs p-2 rounded-md">
          My Profile
        </button>
      </div>
    </div>
  );
}
