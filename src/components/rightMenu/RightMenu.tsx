import { Ad } from "../Ad";
import { Suspense } from "react";
import { User } from "@prisma/client";
import { BirthDays } from "./BirthDays";
import { UserInfoCard } from "./UserInfoCard";
import { UserMediaCard } from "./UserMediaCard";
import { FriendRequests } from "./FriendRequests";

export function RightMenu({ user }: { user?: User }) {
  return (
    <div className="flex flex-col gap-6">
      {user && (
        <>
          <Suspense fallback="Loading...">
            <UserInfoCard user={user} />
          </Suspense>
          <Suspense fallback="Loading...">
            <UserMediaCard user={user} />
          </Suspense>
        </>
      )}
      <FriendRequests />
      <BirthDays />
      <Ad size="md" />
    </div>
  );
}
