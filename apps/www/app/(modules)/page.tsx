import Image from "next/image";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/interfaces/page/header";
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
} from "@/components/ui/select";
import { NavTabs } from "@/components/interfaces/page/nav-tabs";
import { Icons } from "@/components/icons";
import { getArchitectureCourses } from "@/lib/data/get-architecture-courses";
import ArchitecturePage from "./architecture/page";
import BestPracticesPage from "./best-practices/page";
import ProductionGradeProjectsPage from "./production-grade-projects/page";
import BuildFromScratchPage from "./build-from-scratch/page";

export default function RootPage() {
  const architectureCourses = getArchitectureCourses();

  return (
    <div className="container relative">
      <PageHeader>
        <PageHeaderHeading>Architecture</PageHeaderHeading>
        <PageHeaderDescription>
          Learn the architectural concepts, build your confidence and 10x your
          coding skills.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <Link href="/docs">Get Started</Link>
          </Button>
          <Button asChild size="sm" variant="ghost">
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.consultation}
            >
              Book a free consulation
            </Link>
          </Button>
        </PageActions>
      </PageHeader>

      <div className="py-24 sm:py-32">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="sm:mt-24 flow-root mt-16">
            <div className="ring-gray-900/10 ring-inset custom-ring p-2 bg-gray-900/5 rounded-lg -m-2">
              <img
                alt="App screenshot"
                src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                width="2432"
                height="1442"
                className="aej bcf bcp bdl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 max-w-7xl mx-auto">
        <div className="gap-y-12 gap-x-8 sm:gap-y-14 sm:gap-x-10 sm:grid-cols-6 sm:max-w-lg grid-cols-4 max-w-lg grid items-center mx-auto">
          <img
            alt="Transistor"
            src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
            width="158"
            height="48"
            className="object-contain w-full max-h-12 col-span-2"
          />
          <img
            alt="Reform"
            src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
            width="158"
            height="48"
            className="object-contain w-full max-h-12 col-span-2"
          />
          <img
            alt="Tuple"
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
            width="158"
            height="48"
            className="object-contain w-full max-h-12 col-span-2"
          />
          <img
            alt="SavvyCal"
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
            width="158"
            height="48"
            className="object-contain w-full max-h-12 col-span-2"
          />
          <img
            alt="Statamic"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
            width="158"
            height="48"
            className="object-contain w-full max-h-12 col-span-2"
          />
        </div>
        <div className="justify-center flex mt-16">
          <div className="ring-gray-900/10 ring-inset custom-ring text-gray-600 leading-6 text-sm leading-5 py-1.5 px-4 rounded-full relative">
            <span className="hidden md:inline">
              Transistor saves up to $40,000 per year, per employee by working
              with us.
            </span>
            <a href="#" className="text-black font-semibold">
              <span aria-hidden="true" className="absolute inset-0"></span> Read our
              case study <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-0 sm:mt-56 px-6 max-w-7xl mt-32 mx-auto">
        <div className="max-w-xl mx-auto">
          <h2 className="text-black font-semibold text-base leading-6">
            Deploy faster
          </h2>
          <p className="mt-2 text-gray-900 font-bold text-lg leading-9 sm:text-2xl sm:leading-10 tracking-tight">
            Everything you need to deploy your app
          </p>
          <p className="mt-6 text-gray-600 text-base leading-8">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
        <div className="mt-16 max-w-xl mt-16 mx-auto">
          <dl className="grid gap-10 sm:gap-10 sm:col-gap-8 max-w-lg md:grid-cols-2 md:max-w-none">
            <div className="pl-16 relative">
              <dt className="text-gray-900 font-semibold text-base leading-7">
                <div className="bg-black rounded-md flex justify-center items-center w-10 h-10 absolute top-0 left-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-wrench lucide-icon customizable text-white w-6 h-6"
                  >
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                  </svg>
                </div>
                Tooling
              </dt>
              <dd className="text-gray-600 text-base leading-6 mt-2">
                Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                suspendisse semper morbi. Odio urna massa nunc massa.
              </dd>
            </div>
            <div className="pl-16 relative">
              <dt className="text-gray-900 font-semibold text-base leading-7">
                <div className="bg-black rounded-md flex justify-center items-center w-10 h-10 absolute top-0 left-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-pyramid text-white w-6 h-6"
                  >
                    <path d="M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z" />
                    <path d="M12 2v20" />
                  </svg>
                </div>
                Project Structure
              </dt>
              <dd className="text-gray-600 text-base leading-6 mt-2">
                Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                suspendisse semper morbi. Odio urna massa nunc massa.
              </dd>
            </div>
            <div className="pl-16 relative">
              <dt className="text-gray-900 font-semibold text-base leading-7">
                <div className="bg-black rounded-md flex justify-center items-center w-10 h-10 absolute top-0 left-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-layout-panel-top text-white w-6 h-6"
                  >
                    <rect width="18" height="7" x="3" y="3" rx="1" />
                    <rect width="7" height="7" x="3" y="14" rx="1" />
                    <rect width="7" height="7" x="14" y="14" rx="1" />
                  </svg>
                </div>
                Components Structure
              </dt>
              <dd className="text-gray-600 text-base leading-6 mt-2">
                Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                suspendisse semper morbi. Odio urna massa nunc massa.
              </dd>
            </div>
            <div className="pl-16 relative">
              <dt className="text-gray-900 font-semibold text-base leading-7">
                <div className="bg-black rounded-md flex justify-center items-center w-10 h-10 absolute top-0 left-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-orbit text-white w-6 h-6"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <circle cx="19" cy="5" r="2" />
                    <circle cx="5" cy="19" r="2" />
                    <path d="M10.4 21.9a10 10 0 0 0 9.941-15.416" />
                    <path d="M13.5 2.1a10 10 0 0 0-9.841 15.416" />
                  </svg>
                </div>
                API Layer
              </dt>
              <dd className="text-gray-600 text-base leading-6 mt-2">
                Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                suspendisse semper morbi. Odio urna massa nunc massa.
              </dd>
            </div>
            <div className="pl-16 relative">
              <dt className="text-gray-900 font-semibold text-base leading-7">
                <div className="bg-black rounded-md flex justify-center items-center w-10 h-10 absolute top-0 left-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-blocks text-white w-6 h-6"
                  >
                    <rect width="7" height="7" x="14" y="3" rx="1" />
                    <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
                  </svg>
                </div>
                State Management
              </dt>
              <dd className="text-gray-600 text-base leading-6 mt-2">
                Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                suspendisse semper morbi. Odio urna massa nunc massa.
              </dd>
            </div>
            <div className="pl-16 relative">
              <dt className="text-gray-900 font-semibold text-base leading-7">
                <div className="bg-black rounded-md flex justify-center items-center w-10 h-10 absolute top-0 left-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-test-tube text-white w-6 h-6"
                  >
                    <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2" />
                    <path d="M8.5 2h7" />
                    <path d="M14.5 16h-5" />
                  </svg>
                </div>
                Testing
              </dt>
              <dd className="text-gray-600 text-base leading-6 mt-2">
                Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                suspendisse semper morbi. Odio urna massa nunc massa.
              </dd>
            </div>
            <div className="pl-16 relative">
              <dt className="text-gray-900 font-semibold text-base leading-7">
                <div className="bg-black rounded-md flex justify-center items-center w-10 h-10 absolute top-0 left-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-server-crash text-white w-6 h-6"
                  >
                    <path d="M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
                    <path d="M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2" />
                    <path d="M6 6h.01" />
                    <path d="M6 18h.01" />
                    <path d="m13 6-4 6h6l-4 6" />
                  </svg>
                </div>
                Error Handling
              </dt>
              <dd className="text-gray-600 text-base leading-6 mt-2">
                Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                suspendisse semper morbi. Odio urna massa nunc massa.
              </dd>
            </div>
            <div className="pl-16 relative">
              <dt className="text-gray-900 font-semibold text-base leading-7">
                <div className="bg-black rounded-md flex justify-center items-center w-10 h-10 absolute top-0 left-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-shield-check text-white w-6 h-6"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                Security
              </dt>
              <dd className="text-gray-600 text-base leading-6 mt-2">
                Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                suspendisse semper morbi. Odio urna massa nunc massa.
              </dd>
            </div>
            <div className="pl-16 relative">
              <dt className="text-gray-900 font-semibold text-base leading-7">
                <div className="bg-black rounded-md flex justify-center items-center w-10 h-10 absolute top-0 left-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-gauge text-white w-6 h-6"
                  >
                    <path d="m12 14 4-4" />
                    <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                  </svg>
                </div>
                Performance
              </dt>
              <dd className="text-gray-600 text-base leading-6 mt-2">
                Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                suspendisse semper morbi. Odio urna massa nunc massa.
              </dd>
            </div>
            <div className="pl-16 relative">
              <dt className="text-gray-900 font-semibold text-base leading-7">
                <div className="bg-black rounded-md flex justify-center items-center w-10 h-10 absolute top-0 left-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-rocket text-white w-6 h-6"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                  </svg>
                </div>
                Deployment
              </dt>
              <dd className="text-gray-600 text-base leading-6 mt-2">
                Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                suspendisse semper morbi. Odio urna massa nunc massa.
              </dd>
            </div>
          </dl>
        </div>

        <div className="pb-0 md:pb-32 md:pl-8 md:pr-8 md:max-w-7xl pt-12 sm:pb-24 px-6 max-w-xl mx-auto">
          <h2 className="text-gray-900 font-bold text-xl leading-10 tracking-tight">
            Frequently asked questions
          </h2>
          <dl className="divide-y divide-gray-900/10 mt-10">
            <div className="pt-8 md:grid md:grid-cols-12 md:gap-8 border-t-[1px] border-gray-200">
              <dt className="text-gray-900 font-semibold text-base leading-6 md:col-span-5">
                What's the best thing about Switzerland?
              </dt>
              <dd className="mt-4 md:mt-0 md:col-span-7">
                <p className="text-gray-600 text-base leading-6">
                  I don't know, but the flag is a big plus. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Quas cupiditate
                  laboriosam fugiat.
                </p>
              </dd>
            </div>
            <div className="pt-8 md:grid md:grid-cols-12 md:gap-8 border-t-[1px] border-gray-200 mt-8 mb-8">
              <dt className="text-gray-900 font-semibold text-base leading-6 md:col-span-5">
                What's the best thing about Switzerland?
              </dt>
              <dd className="mt-4 md:mt-0 md:col-span-7">
                <p className="text-gray-600 text-base leading-6">
                  I don't know, but the flag is a big plus. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Quas cupiditate
                  laboriosam fugiat.
                </p>
              </dd>
            </div>
            <div className="pt-8 md:grid md:grid-cols-12 md:gap-8 border-t-[1px] border-gray-200 mt-8 mb-8">
              <dt className="text-gray-900 font-semibold text-base leading-6 md:col-span-5">
                What's the best thing about Switzerland?
              </dt>
              <dd className="mt-4 md:mt-0 md:col-span-7">
                <p className="text-gray-600 text-base leading-6">
                  I don't know, but the flag is a big plus. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Quas cupiditate
                  laboriosam fugiat.
                </p>
              </dd>
            </div>
            <div className="pt-8 md:grid md:grid-cols-12 md:gap-8 border-t-[1px] border-gray-200 mt-8 mb-8">
              <dt className="text-gray-900 font-semibold text-base leading-6 md:col-span-5">
                What's the best thing about Switzerland?
              </dt>
              <dd className="mt-4 md:mt-0 md:col-span-7">
                <p className="text-gray-600 text-base leading-6">
                  I don't know, but the flag is a big plus. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Quas cupiditate
                  laboriosam fugiat.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="md:pl-8 md:pr-8 pl-6 pr-6 mt-32 z-[-10] relative">
        <div className="relative isolate overflow-hidden bg-white py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              <div className="max-w-xl lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Subscribe to our newsletter.
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-700">
                  Nostrud amet eu ullamco nisi aute in ad minim nostrud
                  adipisicing velit quis. Duis tempor incididunt dolore.
                </p>
                <div className="mt-6 flex max-w-md gap-x-4">
                  <label for="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    className="min-w-0 flex-auto rounded-md border-0 bg-gray-200 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                <div className="flex flex-col items-start">
                  <div className="rounded-md bg-gray-200 p-2 ring-1 ring-gray-300">
                    <svg
                      className="h-6 w-6 text-gray-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                      />
                    </svg>
                  </div>
                  <dt className="mt-4 font-semibold text-gray-900">
                    Weekly articles
                  </dt>
                  <dd className="mt-2 leading-7 text-gray-600">
                    Non laboris consequat cupidatat laborum magna. Eiusmod non
                    irure cupidatat duis commodo amet.
                  </dd>
                </div>
                <div className="flex flex-col items-start">
                  <div className="rounded-md bg-gray-200 p-2 ring-1 ring-gray-300">
                    <svg
                      className="h-6 w-6 text-gray-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
                      />
                    </svg>
                  </div>
                  <dt className="mt-4 font-semibold text-gray-900">No spam</dt>
                  <dd className="mt-2 leading-7 text-gray-600">
                    Officia excepteur ullamco ut sint duis proident non
                    adipisicing. Voluptate incididunt anim.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className="md:pl-8 md:pr-8 pl-6 pr-6 max-w-[80rem] mt-32 mx-auto">
        <footer className="md:pt-32 md:pb-32 pt-24 pb-24 mt-36 border-t border-gray-900/10 relative">
          <h2
            id="footer-heading"
            className="absolute w-1 h-1 p-0 -m-px overflow-hidden clip-rect-0 border-0 whitespace-nowrap"
          >
            Footer
          </h2>
          <div className="md:gap-8 md:grid-cols-3 md:grid">
            <img
              alt="Company name"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600"
              className="h-7"
            />
            <div className="mt-0 md:gap-8 md:grid-cols-2 md:grid display-grid">
              <div className="gap-8 md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-gray-900 font-semibold text-sm leading-5">
                    Solutions
                  </h3>
                  <ul role="list" className="mt-6">
                    <li>
                      <a href="#" className="text-gray-600 text-sm leading-5">
                        Architecture
                      </a>
                    </li>
                    <li className="mt-4 mb-0">
                      <a href="#" className="text-gray-600 text-sm leading-5">
                        Architecture
                      </a>
                    </li>
                    <li className="mt-4 mb-0">
                      <a href="#" className="text-gray-600 text-sm leading-5">
                        Architecture
                      </a>
                    </li>
                    <li className="mt-4 mb-0">
                      <a href="#" className="text-gray-600 text-sm leading-5">
                        Architecture
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-gray-900 font-semibold text-sm leading-5">
                    Solutions
                  </h3>
                  <ul role="list" className="mt-6">
                    <li>
                      <a href="#" className="text-gray-600 text-sm leading-5">
                        Architecture
                      </a>
                    </li>
                    <li className="mt-4 mb-0">
                      <a href="#" className="text-gray-600 text-sm leading-5">
                        Architecture
                      </a>
                    </li>
                    <li className="mt-4 mb-0">
                      <a href="#" className="text-gray-600 text-sm leading-5">
                        Architecture
                      </a>
                    </li>
                    <li className="mt-4 mb-0">
                      <a href="#" className="text-gray-600 text-sm leading-5">
                        Architecture
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="gap-8 md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-gray-900 font-semibold text-sm leading-5">
                    Solutions
                  </h3>
                  <ul role="list" className="mt-6">
                    <li>
                      <a href="#" className="text-gray-600 text-sm leading-5">
                        Architecture
                      </a>
                    </li>
                    <li className="mt-4 mb-0">
                      <a href="#" className="text-gray-600 text-sm leading-5">
                        Architecture
                      </a>
                    </li>
                    <li className="mt-4 mb-0">
                      <a href="#" className="text-gray-600 text-sm leading-5">
                        Architecture
                      </a>
                    </li>
                    <li className="mt-4 mb-0">
                      <a href="#" className="text-gray-600 text-sm leading-5">
                        Architecture
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-gray-900 font-semibold text-sm leading-5">
                    Solutions
                  </h3>
                  <ul role="list" className="mt-6">
                    <li>
                      <a href="#" className="text-gray-600 text-sm leading-5">
                        Architecture
                      </a>
                    </li>
                    <li className="mt-4 mb-0">
                      <a href="#" className="text-gray-600 text-sm leading-5">
                        Architecture
                      </a>
                    </li>
                    <li className="mt-4 mb-0">
                      <a href="#" className="text-gray-600 text-sm leading-5">
                        Architecture
                      </a>
                    </li>
                    <li className="mt-4 mb-0">
                      <a href="#" className="text-gray-600 text-sm leading-5">
                        Architecture
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
