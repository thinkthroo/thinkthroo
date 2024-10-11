import FeaturedThumb from "@/components/interfaces/blog/featured-thumb";
import Image from "next/image";
import Link from "next/link";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

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
          </div>
        </div>
    </div>
  );
}
