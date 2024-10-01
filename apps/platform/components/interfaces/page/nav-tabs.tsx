"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const architecture = [
  {
    name: "Tooling",
    href: "#tooling"
  },
  {
    name: "Components Structure",
    href: "#componentsStructure"
  },
  {
    name: "API Layer",
    href: "#apiLayer"
  },
  {
    name: "State Management",
    href: "#stateManagement"
  },
  {
    name: "Error Handling",
    href: "#errorHandling"
  },
  {
    name: "Testing",
    href: "#testing"
  },
  {
    name: "Performance",
    href: "#performance"
  },
  {
    name: "Security",
    href: "#security"
  },
  {
    name: "Project Structure",
    href: "#projectStructure"
  },
  {
    name: "Deployment",
    href: "#deployment"
  },
];

interface NavTabsProps extends React.HTMLAttributes<HTMLDivElement> {}

export function NavTabs({ className, ...props }: NavTabsProps) {
  const pathname = usePathname();

  return (
    <div className="relative">
      <ScrollArea className="max-w-[600px] lg:max-w-none">
        <div className={cn("mb-4 flex items-center", className)} {...props}>
          {architecture.map((example, index) => (
            <Link
              href={example.href}
              key={example.href}
              className={cn(
                "flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary",
                pathname?.startsWith(example.href) ||
                  (index === 0 && pathname === "/architecture")
                  ? "bg-muted font-medium text-primary"
                  : "text-muted-foreground"
              )}
            >
              {example.name}
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  );
}
