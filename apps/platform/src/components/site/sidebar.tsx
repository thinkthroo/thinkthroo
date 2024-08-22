"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils";
import { BookIcon } from "../icons";
import { BoxIcon } from "../icons/box";
import Image from "next/image";
import SiteNameAndLogo from "./name-and-logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { useEffect, useState } from "react";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export default function SiteSidebar() {

  const pathname = usePathname()

  const [filters, setFilters] = useState([]);

  const architectureFilters = [{
    label: "Tooling",
    filters: ["Husky", "ESLint"]
  }, {
    label: "Structure",
    filters: ["Husky", "ESLint"]
  }, {
    label: "API Layer",
    filters: ["Husky", "ESLint"]
  }, {
    label: "State Management",
    filters: ["Husky", "ESLint"]
  }, {
    label: "Error Handling",
    filters: ["Husky", "ESLint"]
  }, {
    label: "Security",
    filters: ["Husky", "ESLint"]
  }, {
    label: "Performance",
    filters: ["Husky", "ESLint"]
  }, {
    label: "Deployment",
    filters: ["Husky", "ESLint"]
  }];

  const productionGradeFilters = [{
    label: "Small Sized Apps",
    filters: ["Variant 1", "Variant 2"]
  }, {
    label: "Medium Sized Apps",
    filters: ["Variant 1", "Variant 2"]
  }, {
    label: "Large Sized Apps",
    filters: ["Variant 1", "Variant 2"]
  }]

  const buildFromScratch = [{
    label: "Technology",
    filters: ["Next.js", "Radix", "Tailwind"]
  }]

  useEffect(() => {
    console.log(pathname);
    if (
      pathname === "/architecture" ||
      pathname === "/best-practices"
    ) {
      setFilters(architectureFilters);
    } else if (
      pathname === "/production-grade-projects"
    ) {
      setFilters(productionGradeFilters);
    } else if (
      pathname === "/build-from-scratch"
    ) {
      setFilters(buildFromScratch);
    }
  }, [pathname]);

  return (
    <aside className="border-r border-border/40 fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
      <ScrollArea className="h-full">
        <div className="hidden h-full md:block">
          <div className="flex h-full flex-col gap-4 p-4">
            <h3 className="font-medium">Filters</h3>
            {
              filters.map(archFilter => <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-sm"><div className="text-sm">{archFilter.label}</div></AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2">
                        {
                          archFilter.filters.map(filter => <div className="flex items-center space-x-2">
                              <Checkbox id="terms" />
                              <label
                                htmlFor="terms"
                                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {filter}
                              </label>
                            </div>
                          )
                        }
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )
            }
          </div>
        </div>
      </ScrollArea>
    </aside>

  ) 
}
