import FeaturedThumb from "@/components/interfaces/blog/featured-thumb";
import Image from "next/image";
import Link from "next/link";

// TODO: add the metadata info
export default async function Blog() {
  return (
    <div className="container relative">
        <h1 className="sr-only">Supabase blog</h1>
        <div className="md:container mx-auto py-4 lg:py-10 px-4 sm:px-12 xl:px-16">
            <FeaturedThumb />
        </div>
    </div>
  );
}
