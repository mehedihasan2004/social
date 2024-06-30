import Image from "next/image";
import { Comments } from "./Comments";

export function Post() {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlst33n37g93m8liDygxtpqoPise6krFHX8g&s"
            alt=""
            height={40}
            width={40}
            className="size-10 rounded-full"
          />
          <span className="font-medium">Jack Maa</span>
        </div>
        <Image src="/more.png" alt="More" height={16} width={16} />
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlst33n37g93m8liDygxtpqoPise6krFHX8g&s"
            alt="Post Image"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
          alias itaque cupiditate aliquam esse quam fugit commodi, repudiandae
          beatae dolore assumenda ab. Ipsam quasi earum natus nobis numquam
          repudiandae. Libero.
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/like.png"
              alt="Like"
              height={16}
              width={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/comment.png"
              alt="Comment"
              height={16}
              width={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Comments</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/share.png"
              alt="Share"
              height={16}
              width={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Shares</span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
}
