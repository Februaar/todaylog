import Image from "next/image";

export default function LogImage() {
  return (
    <div className="relative w-[20rem] h-[26rem] overflow-hidden">
      <Image
        src="/image/brunch.jpg"
        alt="uploaded-image"
        className="object-cover"
        fill
      />
    </div>
  );
}
