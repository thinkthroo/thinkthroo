import FeaturedThumb from "@/components/interfaces/blog/featured-thumb";
import Image from "next/image";
import Link from "next/link";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { allDocs } from "@/.contentlayer/generated"

// TODO: add the metadata info
export default async function Blog() {

  const allCategories = ["All", "Next.js", "React", "Supabase", "Cal.com", "Shadcn/ui", "TypeDoc"]

  return (
    <div className="container relative">
        <h1 className="sr-only">Supabase blog</h1>
        <div className="md:container mx-auto py-4 lg:py-10 px-4 sm:px-12 xl:px-16">
            <FeaturedThumb />
        </div>

        <div className="border-default border-t">
          <div className="md:container mx-auto mt-6 lg:mt-8 px-6 sm:px-16 xl:px-20">
            <div className="flex flex-row items-center justify-between gap-2">
            <div className="hidden lg:flex flex-wrap items-center flex-grow gap-2">
              {allCategories.map((category: string) => (
                <Button
                  key={category}
                  variant='outline'
                  size="sm"
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
            </div>
            <ol
              className={'grid -mx-2 sm:-mx-4 py-6 lg:py-6 lg:pb-20 grid-cols-1'}
            >
              {
                allDocs.filter(doc => doc.slug.startsWith("/blog")).map((doc, index) => <div className="col-span-12 px-2 sm:px-4 [&_a]:last:border-none" key={index}>
                  <Link
                    href={doc.slug}
                    className="group flex flex-col lg:grid lg:grid-cols-10 xl:grid-cols-12 w-full py-2 sm:py-4 h-full border-b"
                  >
                    <div className="flex w-full lg:col-span-8 xl:col-span-8">
                      <h3 className="text-foreground text-lg group-hover:underline">{doc.title}</h3>
                    </div>
                    <div className="lg:col-span-2 xl:col-span-4 flex justify-start items-center lg:grid grid-cols-2 xl:grid-cols-3 gap-2 text-sm">
                      <p className="text-foreground-lighter group-hover:text-foreground-light flex-1 lg:text-right w-full">
                        {doc.published}
                      </p>
                    </div>
                  </Link>
                </div>
                )
              }
            </ol>
          </div>
        </div>
    </div>
  );
}
