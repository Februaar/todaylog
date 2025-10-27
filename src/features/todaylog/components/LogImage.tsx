import Image from "next/image";

export default function LogImage() {
  return (
    <div className="w-full flex flex-col">
      {/* {data ? (
        <Image src="/image/brunch.jpg" alt="uploaded-image" width={400} height={530} />
      ) : (
        <div className="flex-1 w-[400px]">-</div>
      )} */}
      <div className="relative w-[400px] h-[500px] overflow-hidden rounded-xl">
        <Image
          src="/image/brunch.jpg"
          alt="uploaded-image"
          className="object-cover"
          fill
        />
      </div>
    </div>
  );
}
