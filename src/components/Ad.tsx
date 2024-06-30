import Image from "next/image";

export function Ad({ size }: { size: "sm" | "md" | "lg" }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      {/* TOP */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsored Ads</span>
        <Image src="/more.png" alt="More" height={16} width={16} />
      </div>
      {/* BOTTOM */}
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-14" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1719360000&semt=ais_user"
            alt="Ads"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1719360000&semt=ais_user"
            alt="Leef"
            height={24}
            width={24}
            className="rounded-full size-6 object-cover"
          />
          <span className="text-blue-500 font-medium">Leef Lounge</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm"
            ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            : size === "md"
            ? "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus ea minima officia ad alias."
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus minima non laborum iure explicabo magni harum earum omnis esse totam?"}
        </p>
        <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">
          Learn More
        </button>
      </div>
    </div>
  );
}
