import Link from "next/link"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"

export function Course() {
  return (
    <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 lg:block">
        <div className="flex flex-col gap-2">
          <div className="flex h-[60px] items-center px-6">
            <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
              <BookIcon className="h-6 w-6" />
              <span className="">Course Dashboard</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Collapsible className="grid gap-1">
                <CollapsibleTrigger className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary [&[data-state=open]>svg]:rotate-90">
                  <BookIcon className="h-4 w-4" />
                  Chapter 1
                  <ChevronRightIcon className="ml-auto h-4 w-4 transition-all" />
                </CollapsibleTrigger>
                <CollapsibleContent className="grid gap-1">
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-primary"
                    prefetch={false}
                  >
                    <FileIcon className="h-4 w-4" />
                    Lesson 1
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-primary"
                    prefetch={false}
                  >
                    <FileIcon className="h-4 w-4" />
                    Lesson 2
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-primary"
                    prefetch={false}
                  >
                    <FileIcon className="h-4 w-4" />
                    Lesson 3
                  </Link>
                </CollapsibleContent>
              </Collapsible>
              <Collapsible className="grid gap-1">
                <CollapsibleTrigger className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary [&[data-state=open]>svg]:rotate-90">
                  <BookIcon className="h-4 w-4" />
                  Chapter 2
                  <ChevronRightIcon className="ml-auto h-4 w-4 transition-all" />
                </CollapsibleTrigger>
                <CollapsibleContent className="grid gap-1">
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-primary"
                    prefetch={false}
                  >
                    <FileIcon className="h-4 w-4" />
                    Lesson 1
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-primary"
                    prefetch={false}
                  >
                    <FileIcon className="h-4 w-4" />
                    Lesson 2
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-primary"
                    prefetch={false}
                  >
                    <FileIcon className="h-4 w-4" />
                    Lesson 3
                  </Link>
                </CollapsibleContent>
              </Collapsible>
              <Collapsible className="grid gap-1">
                <CollapsibleTrigger className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary [&[data-state=open]>svg]:rotate-90">
                  <BookIcon className="h-4 w-4" />
                  Chapter 3
                  <ChevronRightIcon className="ml-auto h-4 w-4 transition-all" />
                </CollapsibleTrigger>
                <CollapsibleContent className="grid gap-1">
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-primary"
                    prefetch={false}
                  >
                    <FileIcon className="h-4 w-4" />
                    Lesson 1
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-primary"
                    prefetch={false}
                  >
                    <FileIcon className="h-4 w-4" />
                    Lesson 2
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-primary"
                    prefetch={false}
                  >
                    <FileIcon className="h-4 w-4" />
                    Lesson 3
                  </Link>
                </CollapsibleContent>
              </Collapsible>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-muted/40 px-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/courses">Courses</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Course Dashboard</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex items-center gap-4 border-b px-6 py-4">
          <Link
            href="#"
            className="inline-flex h-9 items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 border-b-2 border-primary"
            prefetch={false}
          >
            Challenges
          </Link>
          <Link
            href="#"
            className="inline-flex h-9 items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Solutions
          </Link>
        </div>
        <main className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="prose flex flex-col lg:flex-row">
            <div className="flex-1">
              # Welcome to the Course Dashboard This is where you can track your progress and access the course
              materials. ## Course Overview In this course, you will learn how to build a full-stack web application
              using React, Node.js, and MongoDB. We'll cover topics such as: - Setting up a development environment -
              Building reusable React components - Implementing server-side logic with Node.js - Integrating a MongoDB
              database - Deploying your application ## Upcoming Lessons - Chapter 1: Introduction to React - Chapter 2:
              State Management with React Hooks - Chapter 3: Building a RESTful API with Node.js - Chapter 4: Connecting
              to a MongoDB Database Feel free to reach out to the instructor if you have any questions or need
              assistance. Happy learning!
            </div>
            <div className="mt-8 flex flex-col items-center justify-center lg:mt-0 lg:ml-8">
              <div className="flex flex-col items-center gap-4">
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-sm font-medium">1</span>
                </div>
                <div className="text-sm text-muted-foreground">Introduction to React</div>
                <div className="h-1 w-1 bg-primary" />
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-sm font-medium">2</span>
                </div>
                <div className="text-sm text-muted-foreground">State Management with React Hooks</div>
                <div className="h-1 w-1 bg-primary" />
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-sm font-medium">3</span>
                </div>
                <div className="text-sm text-muted-foreground">Building a RESTful API with Node.js</div>
                <div className="h-1 w-1 bg-primary" />
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-sm font-medium">4</span>
                </div>
                <div className="text-sm text-muted-foreground">Connecting to a MongoDB Database</div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">Progress: 75% complete</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function FileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  )
}
