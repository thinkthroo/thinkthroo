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

export default function SiteSidebar() {

  const pathname = usePathname()

  const architectureFilters = [{
    label: "Tooling",
    filters: ["Husky",, "ESLint"]
  }, {
    label: "Structure",
    filters: ["Husky",, "ESLint"]
  }, {
    label: "API Layer",
    filters: ["Husky",, "ESLint"]
  }, {
    label: "State Management",
    filters: ["Husky",, "ESLint"]
  }, {
    label: "Error Handling",
    filters: ["Husky",, "ESLint"]
  }, {
    label: "Security",
    filters: ["Husky",, "ESLint"]
  }, {
    label: "Performance",
    filters: ["Husky",, "ESLint"]
  }, {
    label: "Deployment",
    filters: ["Husky",, "ESLint"]
  }]

  return (
    <div className="hidden h-full border-r md:block md:w-72">
      <div className="flex h-full flex-col gap-4 p-4">
        <h3 className="font-medium">Filters</h3>
        {
          architectureFilters.map(archFilter => <Accordion type="single" collapsible>
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
  )
}
