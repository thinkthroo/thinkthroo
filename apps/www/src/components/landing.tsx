import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Pricing } from "./pricing";

// https://v0.dev/t/QlTvtpCYgcG
// https://v0.dev/r/n1nJtdj8LqD
export function Landing() {
  return (
    <div className="relative w-full min-h-[80vh] flex flex-col justify-center items-center bg-white">
      <header className="absolute top-0 left-0 w-full py-4 px-6 md:px-10 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6 text-primary" />
          <span className="text-primary font-semibold text-lg">TThroo</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#"
            className="text-gray-800 hover:underline"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-gray-800 hover:underline"
            prefetch={false}
          >
            Modules
          </Link>
          <Link
            href="#"
            className="text-gray-800 hover:underline"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-gray-800 hover:underline"
            prefetch={false}
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-gray-800 hover:underline"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="text-gray-800">
            Sign In
          </Button>
          <Button className="bg-primary text-white">Try now</Button>
        </div>
      </header>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Learn the best practices used in open source.
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Solve challenges that require you to read open source code,
                  pick up best practices and patterns, and write
                  production-grade code.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get started for free
                </Link>
              </div>
            </div>
            <Image
              src="/placeholder.svg"
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>
      <section className="container px-4 md:px-6 py-12 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Modules
        </h2>
        <p className="text-gray-700 text-center mb-8">
          Discover the powerful features that set our platform apart.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg border border-muted p-8">
            <Image
              src="/placeholder.svg"
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
            <div className="mt-4 flex items-center gap-4">
              <BoltIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold text-gray-800">
                Best practices
              </h3>
            </div>
            <p className="text-gray-700 mt-4">
              These best practices are the advanced technical concepts
              handpicked from the open source. For example, practice how to use
              shadow DOM to avoid potential CSS breaks.
            </p>
            <Link
              href="#"
              className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Explore best practices
            </Link>
          </div>
          <div className="bg-white rounded-lg border border-muted p-8">
            <Image
              src="/placeholder.svg"
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
            <div className="mt-4 flex items-center gap-4">
              <PuzzleIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold text-gray-800">
                Build from scratch
              </h3>
            </div>
            <p className="text-gray-700 mt-4">
              Learn to build popular open source projects like shadcn-ui/ui from
              scratch. Realistically, you will learn the fundamentals that can
              be used as a foundation to expand your knowledge.
            </p>
            <Link
              href="#"
              className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Explore build from scratch
            </Link>
          </div>
          <div className="bg-white rounded-lg border border-muted p-8">
            <Image
              src="/placeholder.svg"
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
            <div className="mt-4 flex items-center gap-4">
              <ShieldIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold text-gray-800">
                Production-grade projects
              </h3>
            </div>
            <p className="text-gray-700 mt-4">
              These projects are built, inspired from popular open source
              projects such as shadcn-ui/ui. Study these projects and write the
              code that is production-grade.
            </p>
            <Link
              href="#"
              className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Explore production-grade projects
            </Link>
          </div>
        </div>
      </section>
      <section className="container px-4 md:px-6 py-12 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Key Features
        </h2>
        <p className="text-gray-700 text-center mb-8">
          Discover the powerful features that set our platform apart.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg border border-muted p-8">
            <Image
              src="/placeholder.svg"
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
            <div className="mt-4 flex items-center gap-4">
              <BoltIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold text-gray-800">
                Clear project direction with steps
              </h3>
            </div>
            <p className="text-gray-700 mt-4">
              Each course has chapters and lessons. Each lesson comes with
              steps. These steps provide clear instructions to follow along.
            </p>
            <Link
              href="#"
              className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Get started for free
            </Link>
          </div>
          <div className="bg-white rounded-lg border border-muted p-8">
            <Image
              src="/placeholder.svg"
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
            <div className="mt-4 flex items-center gap-4">
              <BoltIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold text-gray-800">
                Get hands-on with challenges
              </h3>
            </div>
            <p className="text-gray-700 mt-4">
              Each step has its own challenges for you to complete. These
              challenges are provided with clear instructions on how to complete
              a challenge
            </p>
            <Link
              href="#"
              className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Get started for free
            </Link>
          </div>
          <div className="bg-white rounded-lg border border-muted p-8">
            <Image
              src="/placeholder.svg"
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
            <div className="flex items-center gap-4">
              <BoltIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold text-gray-800">
                Check a solution
              </h3>
            </div>
            <p className="text-gray-700 mt-4">
              If a challenge is too difficult, there is a solution available.
            </p>
            <Link
              href="#"
              className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Get started for free
            </Link>
          </div>
          <div className="bg-white rounded-lg border border-muted p-8">
            <Image
              src="/placeholder.svg"
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
            <div className="mt-4 flex items-center gap-4">
              <PuzzleIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold text-gray-800">
                Save your progress
              </h3>
            </div>
            <p className="text-gray-700 mt-4">
              When you solve a challenge, you can mark that step as completed
              and move on to the next step. Complete all the steps in a lesson
              to move on to next lesson.
            </p>
            <Link
              href="#"
              className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Get started for free
            </Link>
          </div>
          <div className="bg-white rounded-lg border border-muted p-8">
            <Image
              src="/placeholder.svg"
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
            <div className="mt-4 flex items-center gap-4">
              <ShieldIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold text-gray-800">
                Execute tests
              </h3>
            </div>
            <p className="text-gray-700 mt-4">
              Execute the tests to ensure the code you have written works as
              expected via our Github integration.
            </p>
            <Link
              href="#"
              className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Get started for free
            </Link>
          </div>
        </div>
      </section>

      <Pricing />
      <section className="container px-4 md:px-6 py-12 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="what-is-tthroo">
            <AccordionTrigger className="text-lg font-medium">
              What is TThroo?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700">
                TThroo is a platform that helps you learn and practice the best
                practices used in open source and build confidence in the code
                you write.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="features">
            <AccordionTrigger className="text-lg font-medium">
              What features does your platform offer?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700">
                Our platform offers a wide range of features, including clear
                project/task direction with broken down steps, challenges with
                solutions, save your progress, and execute tests from your CLI.
                We are always on the look out for the latest trends and best
                practices used in the open source and update the courses
                regularly.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="pricing">
            <AccordionTrigger className="text-lg font-medium">
              How much does your service cost?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700">
                We offer four different pricing tiers to suit the needs of
                individual or businesses of all sizes. There is a free plan, our
                pro plan starts at $25 per month, our team plan depends on the
                number of seats, and we have life time deal. Each plan comes
                with a range of features and benefits to help you improve your
                programming skills. Check out the pricing page.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      <footer className="w-full bg-muted py-8 px-4 md:px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">TThroo</h4>
            <ul className="space-y-1">
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Changelog
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Modules</h4>
            <ul className="space-y-1">
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Best practices
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Build from scratch
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Production-grade projects
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Community</h4>
            <ul className="space-y-1">
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Github
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Discord
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto mt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} TThroo. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function BoltIcon(props) {
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
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function CheckIcon(props) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function PuzzleIcon(props) {
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
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
    </svg>
  );
}

function RocketIcon(props) {
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
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function ShieldIcon(props) {
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
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}
