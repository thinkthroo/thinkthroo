import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full bg-muted py-8 px-4 md:px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">TThroo</h4>
            <ul className="space-y-1">
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Changelog
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Modules</h4>
            <ul className="space-y-1">
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Best practices
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Build from scratch
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Production-grade projects
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Community</h4>
            <ul className="space-y-1">
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Github
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Discord
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto mt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} TThroo. All rights reserved.
        </div>
      </footer>
  );
}