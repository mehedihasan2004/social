import Link from "next/link";
import Image from "next/image";

export function FriendRequests() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCh2JpkwZSB1I7nNT5QERrkYy_SUynSDoaTg&s"
            alt=""
            height={40}
            width={40}
            className="size-10 rounded-full object-cover"
          />
          <span className="font-semibold">Wayne Burton</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src="/accept.png"
            alt="Accept"
            height={20}
            width={20}
            className="cursor-pointer"
          />
          <Image
            src="/reject.png"
            alt="Accept"
            height={20}
            width={20}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCh2JpkwZSB1I7nNT5QERrkYy_SUynSDoaTg&s"
            alt=""
            height={40}
            width={40}
            className="size-10 rounded-full object-cover"
          />
          <span className="font-semibold">Wayne Burton</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src="/accept.png"
            alt="Accept"
            height={20}
            width={20}
            className="cursor-pointer"
          />
          <Image
            src="/reject.png"
            alt="Accept"
            height={20}
            width={20}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCh2JpkwZSB1I7nNT5QERrkYy_SUynSDoaTg&s"
            alt=""
            height={40}
            width={40}
            className="size-10 rounded-full object-cover"
          />
          <span className="font-semibold">Wayne Burton</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src="/accept.png"
            alt="Accept"
            height={20}
            width={20}
            className="cursor-pointer"
          />
          <Image
            src="/reject.png"
            alt="Accept"
            height={20}
            width={20}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
