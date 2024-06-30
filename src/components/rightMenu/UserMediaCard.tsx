import Link from "next/link";
import Image from "next/image";
import { User } from "@prisma/client";

function GallaryImage() {
  return (
    <div className="relative w-1/5 h-24">
      <Image
        src="https://i0.wp.com/picjumbo.com/wp-content/uploads/pure-nature-landscape-single-tree-in-green-field-free-photo.jpg?w=600&quality=80"
        alt="Image"
        fill
      />
    </div>
  );
}

export function UserMediaCard({ user }: { user: User }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {/* BOTTOM */}
      <div className="flex gap-4 justify-between flex-wrap">
        <GallaryImage />
        <GallaryImage />
        <GallaryImage />
        <GallaryImage />
        <GallaryImage />
        <GallaryImage />
        <GallaryImage />
        <GallaryImage />
        <GallaryImage />
      </div>
    </div>
  );
}
