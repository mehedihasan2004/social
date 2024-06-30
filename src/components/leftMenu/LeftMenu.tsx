import { Ad } from "../Ad";
import Link from "next/link";
import Image from "next/image";
import { ProfileCard } from "./ProfileCard";

const items = [
  { href: "/", src: "/posts.png", lable: "My Posts" },
  { href: "/", src: "/activity.png", lable: "Activity" },
  { href: "/", src: "/market.png", lable: "Marketplace" },
  { href: "/", src: "/events.png", lable: "Events" },
  { href: "/", src: "/albums.png", lable: "Albums" },
  { href: "/", src: "/news.png", lable: "News" },
  { href: "/", src: "/courses.png", lable: "Courses" },
  { href: "/", src: "/lists.png", lable: "Lists" },
  { href: "/", src: "/settings.png", lable: "Settings" },
];

function Item({
  href,
  src,
  lable,
}: {
  href: string;
  src: string;
  lable: string;
}) {
  return (
    <>
      <Link
        href={href}
        className="flex items-centere gap-4 p-2 rounded-lg hover:bg-slate-100"
      >
        <Image src={src} alt={lable} height={20} width={20} />
        <span>{lable}</span>
      </Link>
      <hr className="border-gray-100 w-36 self-center" />
    </>
  );
}

export function LeftMenu({ type }: { type: "home" | "profile" }) {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <ProfileCard />}
      <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        {items.map((item) => (
          <Item key={item.lable} {...item} />
        ))}
      </div>
      <Ad size="sm" />
    </div>
  );
}
