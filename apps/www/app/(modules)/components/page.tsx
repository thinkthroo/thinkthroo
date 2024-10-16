import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/interfaces/page/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="container relative">
      <PageHeader>
        <PageHeaderHeading>
            Beautiful UI components, crafted with Shadcn/ui.
        </PageHeaderHeading>
        <PageHeaderDescription>
          Copy and paste these reusable components into your project.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <Link
              href="https://app.thinkthroo.com/architecture"
              target="_blank"
            >
              Documentation
            </Link>
          </Button>
          <Button asChild size="sm" variant="outline">
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.consultation}
            >
              Hire us
            </Link>
          </Button>
        </PageActions>
      </PageHeader>
      <div className="grid gap-4">
        <div className="gap-6 md:flex md:flex-row-reverse md:items-start">
          <div className="grid flex-1 gap-12">
            <h2 className="sr-only">Examples</h2>
            <div
              id="examples"
              className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
            >
              <div
                className={
                  "themes-wrapper group relative flex flex-col overflow-hidden rounded-xl border cursor-pointer hover:shadow transition-all duration-200 ease-in-out hover:z-30"
                }
              >
                <div className="relative z-10 [&>div]:rounded-none [&>div]:border-none [&>div]:shadow-none">
                  <Card>
                    <CardHeader>
                      <CardTitle>Hero sections</CardTitle>
                      <CardDescription>4 components</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Image
                            src={"/heroes.png"}
                            alt="Component"
                            width={500}
                            height={500}
                        />
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div
                className={
                  "themes-wrapper group relative flex flex-col overflow-hidden rounded-xl border cursor-pointer hover:shadow transition-all duration-200 ease-in-out hover:z-30"
                }
              >
                <div className="relative z-10 [&>div]:rounded-none [&>div]:border-none [&>div]:shadow-none">
                  <Card>
                    <CardHeader>
                      <CardTitle>Feature sections</CardTitle>
                      <CardDescription>4 components</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Image
                            src={"/heroes.png"}
                            alt="Component"
                            width={500}
                            height={500}
                        />
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div
                className={
                  "themes-wrapper group relative flex flex-col overflow-hidden rounded-xl border cursor-pointer hover:shadow transition-all duration-200 ease-in-out hover:z-30"
                }
              >
                <div className="relative z-10 [&>div]:rounded-none [&>div]:border-none [&>div]:shadow-none">
                  <Card>
                    <CardHeader>
                      <CardTitle>CTA sections</CardTitle>
                      <CardDescription>4 components</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Image
                            src={"/heroes.png"}
                            alt="Component"
                            width={500}
                            height={500}
                        />
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div
                className={
                  "themes-wrapper group relative flex flex-col overflow-hidden rounded-xl border cursor-pointer hover:shadow transition-all duration-200 ease-in-out hover:z-30"
                }
              >
                <div className="relative z-10 [&>div]:rounded-none [&>div]:border-none [&>div]:shadow-none">
                  <Card>
                    <CardHeader>
                      <CardTitle>Header sections</CardTitle>
                      <CardDescription>4 components</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Image
                            src={"/heroes.png"}
                            alt="Component"
                            width={500}
                            height={500}
                        />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
