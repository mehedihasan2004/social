import Image from "next/image";

export function Comments() {
  return (
    <div>
      {/* WRITE */}
      <div className="flex items-center gap-4">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCh2JpkwZSB1I7nNT5QERrkYy_SUynSDoaTg&s"
          alt="Profile Image"
          height={32}
          width={32}
          className="size-8 rounded-full"
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            alt="Emoji"
            height={16}
            width={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* COMMENTS */}
      <div>
        {/* COMMENT */}
        <div className="flex gap-4 justify-between mt-6">
          {/* AVATAR */}
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCh2JpkwZSB1I7nNT5QERrkYy_SUynSDoaTg&s"
            alt="Profile Image"
            height={40}
            width={40}
            className="size-10 rounded-full"
          />
          {/* DESC */}
          <div className="flex flex-col gap-2">
            <span className="font-medium">Bernice Spencer</span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus nemo ducimus labore perferendis voluptate minus,
              exercitationem necessitatibus adipisci hic excepturi.
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-4">
                <Image
                  src="/like.png"
                  alt=""
                  height={12}
                  width={12}
                  className="cursor-pointer size-3"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">123 Likes</span>
              </div>
              <div>Reply</div>
            </div>
          </div>
          {/* ICON */}
          <Image
            src="/more.png"
            alt=""
            height={16}
            width={16}
            className="cursor-pointer size-4"
          />
        </div>
      </div>
    </div>
  );
}
