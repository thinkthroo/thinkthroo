import Image from "next/image";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/interfaces/page/header"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { NavTabs } from "@/components/interfaces/page/nav-tabs";

export default function ArchitecturePage() {
  return (
    <div className="container relative">
      <PageHeader>
        <PageHeaderHeading>Architecture</PageHeaderHeading>
        <PageHeaderDescription>
          Learn the architectural concepts, build your confidence and 10x your coding skills.
        </PageHeaderDescription>
        <PageActions>
          {/* <Button asChild size="sm">
            <Link href="/docs">Get Started</Link>
          </Button>
          <Button asChild size="sm" variant="ghost">
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
            >
              GitHub
            </Link>
          </Button> */}
          <Select defaultValue="Next.js">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Technology</SelectLabel>
                <SelectItem value="Next.js">Next.js</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </PageActions>
      </PageHeader>
      <NavTabs className="[&>a:first-child]:text-primary" />
    </div>
  );
}
