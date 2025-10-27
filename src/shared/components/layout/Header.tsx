import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-2 px-8 border-b border-gray-600">
      <Link href="/">
        <Image src="/image/logo.jpg" alt="logo" width={60} height={60} />
      </Link>
    </header>
  );
}
