import Link from "next/link";
import Image from "next/image";

export function BirthDays() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Birthdays</span>
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
          <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md">
            Celebrate
          </button>
        </div>
      </div>
      {/* UPCOMINGS */}
      <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
        <Image src="/gift.png" alt="Gift" height={24} width={24} />
        <Link href="/" className="flex flex-col gap-1 text-xs">
          <span className="text-gray-500 font-semibold">
            Upcoming Birthdays
          </span>
          <span className="text-gray-700">
            See other 16 have upcoming birthdays
          </span>
        </Link>
      </div>
    </div>
  );
}
