import Image from "next/image";
import { auth } from "@clerk/nextjs/server";

export function AddPost() {
  const { userId } = auth();

  return (
    <div className="p-4 shadow-md bg-white rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATAR */}
      <Image
        src="https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg&width=944"
        alt="Profile"
        width={48}
        height={48}
        className="size-12 object-cover rounded-full"
      />
      {/* POST */}
      <div className="flex-1">
        {/* TEXT INPUT */}
        <form action="" className="flex gap-4">
          <textarea
            name="desc"
            placeholder="What's on your mind?"
            className="bg-slate-100 rounded-lg flex-1 p-2"
          ></textarea>
          <Image
            src="/emoji.png"
            alt="Profile"
            width={20}
            height={20}
            className="size-5 cursor-pointer self-end"
          />
          <button>Send</button>
        </form>

        {/* POST OPTIONS */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addimage.png" alt="Add Image" width={20} height={20} />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="Add Video" width={20} height={20} />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="Poll" width={20} height={20} />
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" alt="Add Event" width={20} height={20} />
            Event
          </div>
        </div>
      </div>
    </div>
  );
}
