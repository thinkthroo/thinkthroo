import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Header />
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 h-[75vh]">
        <div className="flex justify-center">
            <h1 className="inline-block m-0 mr-5 p-0 pr-6 text-3xl font-medium leading-[49px] border-r border-solid border-gray-300">
            404
            </h1>
            <div className="inline-block">
            <h2 className="text-base font-normal leading-[49px] m-0">
                This page could not be found. Return to{" "}
                <Link href="/" className="underline">
                Home
                </Link>
            </h2>
            </div>
        </div>
    </section>
      <Footer />
    </>
  );
}