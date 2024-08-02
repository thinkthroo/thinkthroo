import { MountainIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import GitHubButton from "../github-button";

export const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full py-4 px-6 md:px-10 flex items-center justify-between">
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
      <Image
          src="/logo.svg"
          alt="Hero"
          className="h-6 w-6 text-primary"
          width={120}
          height={120}
      />
      <span className="text-primary font-semibold text-lg">TThroo</span>
    </Link>
    <nav className="hidden md:flex items-center gap-6">
      <Link
        href="#"
        className="text-gray-800 hover:underline"
        prefetch={false}
      >
        Home
      </Link>
      <Link
        href="#modules"
        className="text-gray-800 hover:underline"
        prefetch={false}
      >
        Modules
      </Link>
      <Link
        href="#features"
        className="text-gray-800 hover:underline"
        prefetch={false}
      >
        Features
      </Link>
      {/* <Link
        href="#pricing"
        className="text-gray-800 hover:underline"
        prefetch={false}
      >
        Pricing
      </Link> */}
      <Link
        href="#contact"
        className="text-gray-800 hover:underline"
        prefetch={false}
      >
        Contact
      </Link>
    </nav>
    <div className="flex items-center gap-2">
      <GitHubButton />
      <Link href="https://app.thinkthroo.com/">
        <Button variant="outline" className="text-gray-800">
          Sign In
        </Button>
      </Link>
      <Link href="https://app.thinkthroo.com/">
        <Button className="bg-primary text-white">Try now</Button>
      </Link>
    </div>
  </header>
  );
};