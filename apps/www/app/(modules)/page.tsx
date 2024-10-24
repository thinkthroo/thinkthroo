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

export default function RootPage() {
  return (
    <div className="container relative">
      <PageHeader>
        <PageHeaderHeading>
          Next.js Development Services.
        </PageHeaderHeading>
        <PageHeaderDescription>
          We build digital products with quality and speed.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.consultation}
            >
              Book a meeting
            </Link>
          </Button>
        </PageActions>
      </PageHeader>

      <div className="bg-white py-2">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">Our Tech Stack</h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 394 79"><path d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z"></path><path d="M149.052 0.0330722V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0.0330722H149.052Z"></path><path d="M183.32 0.0661486H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126654L229.312 0.154184L206.352 28.6697L183.32 0.0661486Z"></path><path d="M201.6 56.7148L192.679 45.6229L165.455 79.4326H183.32L201.6 56.7148Z"></path><path clip-rule="evenodd" d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z" fill-rule="evenodd"></path><path d="M333.607 78.8546C332.61 78.8546 331.762 78.5093 331.052 77.8186C330.342 77.1279 329.991 76.2917 330 75.3011C329.991 74.3377 330.342 73.5106 331.052 72.8199C331.762 72.1292 332.61 71.7838 333.607 71.7838C334.566 71.7838 335.405 72.1292 336.115 72.8199C336.835 73.5106 337.194 74.3377 337.204 75.3011C337.194 75.9554 337.028 76.5552 336.696 77.0914C336.355 77.6368 335.922 78.064 335.377 78.373C334.842 78.6911 334.252 78.8546 333.607 78.8546Z"></path><path d="M356.84 45.4453H362.872V68.6846C362.863 70.8204 362.401 72.6472 361.498 74.1832C360.585 75.7191 359.321 76.8914 357.698 77.7185C356.084 78.5364 354.193 78.9546 352.044 78.9546C350.079 78.9546 348.318 78.6001 346.75 77.9094C345.182 77.2187 343.937 76.1826 343.024 74.8193C342.101 73.456 341.649 71.7565 341.649 69.7207H347.691C347.7 70.6114 347.903 71.3838 348.29 72.0291C348.677 72.6744 349.212 73.1651 349.895 73.5105C350.586 73.8559 351.38 74.0286 352.274 74.0286C353.243 74.0286 354.073 73.8286 354.746 73.4196C355.419 73.0197 355.936 72.4199 356.296 71.6201C356.646 70.8295 356.831 69.8479 356.84 68.6846V45.4453Z"></path><path d="M387.691 54.5338C387.544 53.1251 386.898 52.0254 385.773 51.2438C384.638 50.4531 383.172 50.0623 381.373 50.0623C380.11 50.0623 379.022 50.2532 378.118 50.6258C377.214 51.0075 376.513 51.5164 376.033 52.1617C375.554 52.807 375.314 53.5432 375.295 54.3703C375.295 55.061 375.461 55.6608 375.784 56.1607C376.107 56.6696 376.54 57.0968 377.103 57.4422C377.656 57.7966 378.274 58.0874 378.948 58.3237C379.63 58.56 380.313 58.76 380.995 58.9236L384.14 59.6961C385.404 59.9869 386.631 60.3778 387.802 60.8776C388.973 61.3684 390.034 61.9955 390.965 62.7498C391.897 63.5042 392.635 64.413 393.179 65.4764C393.723 66.5397 394 67.7848 394 69.2208C394 71.1566 393.502 72.8562 392.496 74.3285C391.491 75.7917 390.043 76.9369 388.143 77.764C386.252 78.582 383.965 79 381.272 79C378.671 79 376.402 78.6002 374.493 77.8004C372.575 77.0097 371.08 75.8463 370.001 74.3194C368.922 72.7926 368.341 70.9294 368.258 68.7391H374.235C374.318 69.8842 374.687 70.8386 375.314 71.6111C375.95 72.3745 376.78 72.938 377.795 73.3197C378.819 73.6923 379.962 73.8832 381.226 73.8832C382.545 73.8832 383.707 73.6832 384.712 73.2924C385.708 72.9016 386.492 72.3564 387.055 71.6475C387.627 70.9476 387.913 70.1206 387.922 69.1754C387.913 68.312 387.654 67.5939 387.156 67.0304C386.649 66.467 385.948 65.9944 385.053 65.6127C384.15 65.231 383.098 64.8856 381.899 64.5857L378.081 63.6223C375.323 62.9225 373.137 61.8592 371.541 60.4323C369.937 59.0054 369.143 57.115 369.143 54.7429C369.143 52.798 369.678 51.0894 370.758 49.6261C371.827 48.1629 373.294 47.0268 375.148 46.2179C377.011 45.4 379.114 45 381.456 45C383.836 45 385.92 45.4 387.719 46.2179C389.517 47.0268 390.929 48.1538 391.952 49.5897C392.976 51.0257 393.511 52.6707 393.539 54.5338H387.691Z"></path></svg>
            
            <svg width="581" height="113" viewBox="0 0 581 113" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M151.397 66.7608C151.996 72.3621 157.091 81.9642 171.877 81.9642C184.764 81.9642 190.959 73.7624 190.959 65.7607C190.959 58.559 186.063 52.6577 176.373 50.6571L169.379 49.1569C166.682 48.6568 164.884 47.1565 164.884 44.7559C164.884 41.9552 167.681 39.8549 171.178 39.8549C176.772 39.8549 178.87 43.5556 179.27 46.4564L190.359 43.9558C189.76 38.6546 185.064 29.7527 171.078 29.7527C160.488 29.7527 152.696 37.0543 152.696 45.8561C152.696 52.7576 156.991 58.4591 166.482 60.5594L172.976 62.0598C176.772 62.8599 178.271 64.6605 178.271 66.8609C178.271 69.4615 176.173 71.762 171.777 71.762C165.983 71.762 163.085 68.1611 162.786 64.2602L151.397 66.7608Z" fill="white"/>
              <path d="M233.421 80.4639H246.109C245.909 78.7635 245.609 75.3628 245.609 71.5618V31.2529H232.321V59.8592C232.321 65.5606 228.925 69.5614 223.031 69.5614C216.837 69.5614 214.039 65.1604 214.039 59.6592V31.2529H200.752V62.3599C200.752 73.0622 207.545 81.7642 219.434 81.7642C224.628 81.7642 230.325 79.7638 233.022 75.1627C233.022 77.1631 233.221 79.4636 233.421 80.4639Z" fill="white"/>
              <path d="M273.076 99.4682V75.663C275.473 78.9636 280.469 81.6644 287.263 81.6644C301.149 81.6644 310.439 70.6617 310.439 55.7584C310.439 41.1553 302.148 30.1528 287.762 30.1528C280.37 30.1528 274.875 33.4534 272.677 37.2544V31.253H259.79V99.4682H273.076ZM297.352 55.8585C297.352 64.6606 291.958 69.7616 285.164 69.7616C278.372 69.7616 272.877 64.5605 272.877 55.8585C272.877 47.1566 278.372 42.0554 285.164 42.0554C291.958 42.0554 297.352 47.1566 297.352 55.8585Z" fill="white"/>
              <path d="M317.964 67.0609C317.964 74.7627 324.357 81.8643 334.848 81.8643C342.139 81.8643 346.835 78.4634 349.332 74.5625C349.332 76.463 349.532 79.1635 349.832 80.4639H362.02C361.72 78.7635 361.422 75.2627 361.422 72.6622V48.4567C361.422 38.5545 355.627 29.7527 340.043 29.7527C326.855 29.7527 319.761 38.2544 318.963 45.9562L330.751 48.4567C331.151 44.1558 334.348 40.455 340.141 40.455C345.737 40.455 348.434 43.3556 348.434 46.8564C348.434 48.5568 347.536 49.9572 344.738 50.3572L332.65 52.1576C324.458 53.3579 317.964 58.2589 317.964 67.0609ZM337.644 71.962C333.349 71.962 331.25 69.1614 331.25 66.2608C331.25 62.4599 333.947 60.5594 337.345 60.0594L348.434 58.359V60.5594C348.434 69.2615 343.239 71.962 337.644 71.962Z" fill="white"/>
              <path d="M387.703 80.4641V74.4627C390.299 78.6637 395.494 81.6644 402.288 81.6644C416.276 81.6644 425.467 70.5618 425.467 55.6585C425.467 41.0552 417.174 29.9528 402.788 29.9528C395.494 29.9528 390.1 33.1535 387.902 36.6541V8.04785H374.815V80.4641H387.703ZM412.178 55.7584C412.178 64.7605 406.784 69.7616 399.99 69.7616C393.297 69.7616 387.703 64.6606 387.703 55.7584C387.703 46.7564 393.297 41.8554 399.99 41.8554C406.784 41.8554 412.178 46.7564 412.178 55.7584Z" fill="white"/>
              <path d="M432.99 67.0609C432.99 74.7627 439.383 81.8643 449.873 81.8643C457.165 81.8643 461.862 78.4634 464.358 74.5625C464.358 76.463 464.559 79.1635 464.858 80.4639H477.046C476.748 78.7635 476.448 75.2627 476.448 72.6622V48.4567C476.448 38.5545 470.653 29.7527 455.068 29.7527C441.881 29.7527 434.788 38.2544 433.989 45.9562L445.776 48.4567C446.177 44.1558 449.374 40.455 455.167 40.455C460.763 40.455 463.46 43.3556 463.46 46.8564C463.46 48.5568 462.561 49.9572 459.763 50.3572L447.676 52.1576C439.484 53.3579 432.99 58.2589 432.99 67.0609ZM452.671 71.962C448.375 71.962 446.276 69.1614 446.276 66.2608C446.276 62.4599 448.973 60.5594 452.371 60.0594L463.46 58.359V60.5594C463.46 69.2615 458.265 71.962 452.671 71.962Z" fill="white"/>
              <path d="M485.645 66.7608C486.243 72.3621 491.339 81.9642 506.124 81.9642C519.012 81.9642 525.205 73.7624 525.205 65.7607C525.205 58.559 520.311 52.6577 510.62 50.6571L503.626 49.1569C500.929 48.6568 499.132 47.1565 499.132 44.7559C499.132 41.9552 501.928 39.8549 505.425 39.8549C511.021 39.8549 513.118 43.5556 513.519 46.4564L524.607 43.9558C524.007 38.6546 519.312 29.7527 505.326 29.7527C494.735 29.7527 486.944 37.0543 486.944 45.8561C486.944 52.7576 491.238 58.4591 500.73 60.5594L507.224 62.0598C511.021 62.8599 512.519 64.6605 512.519 66.8609C512.519 69.4615 510.421 71.762 506.025 71.762C500.23 71.762 497.334 68.1611 497.034 64.2602L485.645 66.7608Z" fill="white"/>
              <path d="M545.385 50.2571C545.685 45.7562 549.482 40.5549 556.375 40.5549C563.967 40.5549 567.165 45.3561 567.365 50.2571H545.385ZM568.664 63.0601C567.065 67.4609 563.668 70.5617 557.474 70.5617C550.88 70.5617 545.385 65.8606 545.087 59.3593H580.252C580.252 59.159 580.451 57.1587 580.451 55.2582C580.451 39.4547 571.361 29.7527 556.175 29.7527C543.588 29.7527 531.998 39.9548 531.998 55.6584C531.998 72.262 543.886 81.9642 557.374 81.9642C569.462 81.9642 577.255 74.8626 579.753 66.3607L568.664 63.0601Z" fill="white"/>
              <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#paint0_linear)"/>
              <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#paint1_linear)" fill-opacity="0.2"/>
              <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E"/>
              <defs>
              <linearGradient id="paint0_linear" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse">
              <stop stop-color="#249361"/>
              <stop offset="1" stop-color="#3ECF8E"/>
              </linearGradient>
              <linearGradient id="paint1_linear" x1="36.1558" y1="30.578" x2="54.4844" y2="65.0806" gradientUnits="userSpaceOnUse">
              <stop/>
              <stop offset="1" stop-opacity="0"/>
              </linearGradient>
              </defs>
            </svg>

          </div>
        </div>
      </div>

      <div className="ring-gray-900/10 ring-inset custom-ring p-2 bg-gray-900/5 rounded-lg -m-2">
        <Link href="https://app.thinkthroo.com/architecture" target="_blank">
          <Image
            alt="App screenshot"
            src="/architecture.png"
            width="2432"
            height="1442"
            className="aej bcf bcp bdl"
          />
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 md:pb-10 lg:py-14 lg:pb-10 mt-24">
        {/* <div className="lg:grid-cols-5 lg:max-w-none lg:mx-0 sm:row-gap-14 sm:gap-x-10 sm:grid-cols-6 sm:max-w-3xl gap-y-12 gap-x-8 items-center grid-cols-4 max-w-lg grid mx-auto">
          <Image
            alt="Transistor"
            src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
            width="158"
            height="48"
            className="object-contain w-full max-h-12 col-span-2 lg:col-span-1"
          />
          <Image
            alt="Reform"
            src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
            width="158"
            height="48"
            className="object-contain w-full max-h-12 col-span-2 lg:col-span-1"
          />
          <Image
            alt="Tuple"
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
            width="158"
            height="48"
            className="object-contain w-full max-h-12 col-span-2 lg:col-span-1"
          />
          <Image
            alt="SavvyCal"
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
            width="158"
            height="48"
            className="object-contain w-full max-h-12 col-span-2 lg:col-span-1"
          />
          <Image
            alt="Statamic"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
            width="158"
            height="48"
            className="object-contain w-full max-h-12 col-span-2 lg:col-span-1"
          />
        </div> */}
        <div className="justify-center flex mt-16">
          <div className="ring-1 ring-gray-900/10 ring-inset shadow-sm text-gray-600 leading-6 text-sm leading-5 py-1.5 px-4 rounded-full relative">
            <span className="hidden md:inline">
              We improved our code quality referencing open-source.
            </span>
            <a href="#" className="text-black font-semibold">
              <span aria-hidden="true" className="absolute inset-0"></span> Read
              our case study <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="lg:px-8 px-6 max-w-7xl mt-24 mx-auto">
        <div className="max-w-xl mx-auto">
          <h2 className="text-black font-semibold text-base leading-6">
            Build a maintainable codebase
          </h2>
          <p className="mt-2 text-gray-900 font-bold text-lg leading-9 sm:text-2xl sm:leading-10 tracking-tight">
            Study how large open-source projects architect their codebase
          </p>
          <p className="mt-6 text-gray-600 text-base leading-8">
            Learn how to structure your codebase, decide the tooling required,
            follow the best practices.
          </p>
        </div>
        <div className="mt-16 max-w-xl mt-16 mx-auto">
          <dl className="grid gap-10 sm:gap-10 sm:col-gap-8 max-w-lg md:grid-cols-2 md:max-w-none">
            <Link
              href="https://app.thinkthroo.com/architecture"
              target="_blank"
            >
              <div className="pl-16 relative">
                <dt className="text-gray-900 font-semibold text-base leading-7 underline">
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
                  Tools such as ESLint that help you write, test, and manage
                  their code more easily and efficiently.
                </dd>
              </div>
            </Link>
            <Link
              href="https://app.thinkthroo.com/architecture"
              target="_blank"
            >
              <div className="pl-16 relative">
                <dt className="text-gray-900 font-semibold text-base leading-7 underline">
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
                  Project Structure in a large open-source codebase organizes
                  files and directories to enhance clarity and navigation for
                  developers exploring the project.
                </dd>
              </div>
            </Link>
            <Link
              href="https://app.thinkthroo.com/architecture"
              target="_blank"
            >
              <div className="pl-16 relative">
                <dt className="text-gray-900 font-semibold text-base leading-7 underline">
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
                  Components Structure defines how reusable UI elements are
                  organized within an open-source project, promoting modularity
                  and ease of integration.
                </dd>
              </div>
            </Link>
            <Link
              href="https://app.thinkthroo.com/architecture"
              target="_blank"
            >
              <div className="pl-16 relative">
                <dt className="text-gray-900 font-semibold text-base leading-7 underline">
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
                  The API Layer serves as a bridge in large codebases, enabling
                  smooth communication between the front-end and back-end
                  components through well-defined interfaces.
                </dd>
              </div>
            </Link>
            <Link
              href="https://app.thinkthroo.com/architecture"
              target="_blank"
            >
              <div className="pl-16 relative">
                <dt className="text-gray-900 font-semibold text-base leading-7 underline">
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
                  State Management in large open-source projects outlines how
                  data is handled and shared across components, ensuring a
                  consistent experience for users.
                </dd>
              </div>
            </Link>
            <Link
              href="https://app.thinkthroo.com/architecture"
              target="_blank"
            >
              <div className="pl-16 relative">
                <dt className="text-gray-900 font-semibold text-base leading-7 underline">
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
                  Testing in open-source codebases involves creating and running
                  tests to confirm that various parts of the application
                  function correctly, ensuring reliability.
                </dd>
              </div>
            </Link>
            <Link
              href="https://app.thinkthroo.com/architecture"
              target="_blank"
            >
              <div className="pl-16 relative">
                <dt className="text-gray-900 font-semibold text-base leading-7 underline">
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
                  Error Handling strategies in large codebases help developers
                  anticipate, manage, and provide feedback on errors to maintain
                  stability and user experience.
                </dd>
              </div>
            </Link>
            <Link
              href="https://app.thinkthroo.com/architecture"
              target="_blank"
            >
              <div className="pl-16 relative">
                <dt className="text-gray-900 font-semibold text-base leading-7 underline">
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
                  Security measures in open-source projects focus on protecting
                  the codebase from vulnerabilities and unauthorized access,
                  which is vital for community trust.
                </dd>
              </div>
            </Link>
            <Link
              href="https://app.thinkthroo.com/architecture"
              target="_blank"
            >
              <div className="pl-16 relative">
                <dt className="text-gray-900 font-semibold text-base leading-7 underline">
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
                  Performance optimization in large codebases aims to enhance
                  speed and responsiveness, improving user satisfaction and
                  efficiency.
                </dd>
              </div>
            </Link>
            <Link
              href="https://app.thinkthroo.com/architecture"
              target="_blank"
            >
              <div className="pl-16 relative">
                <dt className="text-gray-900 font-semibold text-base leading-7 underline">
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
                  Deployment in the context of open-source projects refers to
                  the process of making the application accessible to users by
                  moving it from a development environment to production.
                </dd>
              </div>
            </Link>
          </dl>
        </div>
      </div>

      <div className="pb-0 mt-24 md:pl-8 md:pr-8 md:max-w-7xl pt-12 px-6 max-w-xl mx-auto">
        <h2 className="text-gray-900 font-bold text-xl leading-10 tracking-tight">
          Frequently asked questions
        </h2>
        <dl className="divide-y divide-gray-900/10 mt-10">
          <div className="pt-8 md:grid md:grid-cols-12 md:gap-8 border-t-[1px] border-gray-200">
            <dt className="text-gray-900 font-semibold text-base leading-6 md:col-span-5">
              What is this platform about?
            </dt>
            <dd className="mt-4 md:mt-0 md:col-span-7">
              <p className="text-gray-600 text-base leading-6">
                Our{" "}
                <Link
                  href="https://app.thinkthroo.com/architecture"
                  className="underline"
                >
                  platform
                </Link>{" "}
                offers comprehensive architectural guides and in-depth analysis
                of open-source projects, focusing on key software concepts like{" "}
                <b>tooling</b>, <b>project structure</b>, <b>API layer</b>,{" "}
                <b>state management</b>, <b>error handling</b>, <b>testing</b>,{" "}
                <b>performance</b>, and <b>security</b>. These guides help
                developers build more scalable, secure, and efficient
                applications. Explore how modern open-source projects handle
                real-world challenges and apply these insights to your own work.
              </p>
            </dd>
          </div>

          <div className="pt-8 md:grid md:grid-cols-12 md:gap-8 border-t-[1px] border-gray-200 mt-8 mb-8">
            <dt className="text-gray-900 font-semibold text-base leading-6 md:col-span-5">
              Who is this platform for?
            </dt>
            <dd className="mt-4 md:mt-0 md:col-span-7">
              <p className="text-gray-600 text-base leading-6">
                This{" "}
                <Link
                  href="https://app.thinkthroo.com/architecture"
                  className="underline"
                >
                  platform
                </Link>{" "}
                is designed for developers, engineers, and tech enthusiasts
                interested in learning from real-world open-source projects. If
                you want to understand <b>project structures</b>, manage complex{" "}
                <b>API layers</b>, or improve your app’s <b>performance</b> and{" "}
                <b>security</b>, this platform offers a practical, hands-on
                approach for all skill levels.
              </p>
            </dd>
          </div>

          <div className="pt-8 md:grid md:grid-cols-12 md:gap-8 border-t-[1px] border-gray-200 mt-8 mb-8">
            <dt className="text-gray-900 font-semibold text-base leading-6 md:col-span-5">
              How can developers practice these architectural concepts?
            </dt>
            <dd className="mt-4 md:mt-0 md:col-span-7">
              <p className="text-gray-600 text-base leading-6">
                Developers can explore and practice architectural concepts such
                as <b>state management</b>, <b>error handling</b>,{" "}
                <b>testing</b>, and <b>component structure</b> for free as we
                are in <b>public beta until May 2025</b>. During this period,
                you will have full access to all resources, including real-world
                project examples, code snippets, and architectural breakdowns.
                This is a great opportunity to experiment, learn, and apply best
                practices without any cost.
              </p>
            </dd>
          </div>

          <div className="pt-8 md:grid md:grid-cols-12 md:gap-8 border-t-[1px] border-gray-200 mt-8 mb-8">
            <dt className="text-gray-900 font-semibold text-base leading-6 md:col-span-5">
              What specific areas of architecture are covered?
            </dt>
            <dd className="mt-4 md:mt-0 md:col-span-7">
              <p className="text-gray-600 text-base leading-6">
                We cover a wide range of architectural topics, including:
              </p>
              <ul className="list-disc pl-4">
                <li>
                  <b>Tooling</b>: The development tools and setup used in
                  open-source projects.
                </li>
                <li>
                  <b>Project Structure</b>: How folders and files are organized
                  for scalability and maintainability.
                </li>
                <li>
                  <b>Component Structure</b>: Best practices for reusable UI
                  components.
                </li>
                <li>
                  <b>API Layer</b>: Building and managing scalable APIs.
                </li>
                <li>
                  <b>State Management</b>: Handling data flow efficiently using
                  libraries like Jotai and React Query.
                </li>
                <li>
                  <b>Error Handling</b>: Strategies for capturing and managing
                  errors.
                </li>
                <li>
                  <b>Testing</b>: How open-source projects test components,
                  APIs, and performance.
                </li>
                <li>
                  <b>Performance</b>: Optimization techniques to improve load
                  times and responsiveness.
                </li>
                <li>
                  <b>Security</b>: Best practices for securing open-source
                  projects.
                </li>
              </ul>
            </dd>
          </div>

          <div className="pt-8 md:grid md:grid-cols-12 md:gap-8 border-t-[1px] border-gray-200 mt-8 mb-8">
            <dt className="text-gray-900 font-semibold text-base leading-6 md:col-span-5">
              Can I contribute to the platform?
            </dt>
            <dd className="mt-4 md:mt-0 md:col-span-7">
              <p className="text-gray-600 text-base leading-6">
                Yes! We welcome contributions from developers who want to share
                their knowledge or expertise. If you’ve worked on an open-source
                project and want to contribute an <b>architectural breakdown</b>
                , insights into <b>testing</b> or <b>state management</b>, or
                provide your <b>error handling</b> techniques, feel free to
                reach out to us at hello@thinkthroo.com. We believe in
                community-driven learning and are happy to showcase useful
                content from others.
              </p>
            </dd>
          </div>

          <div className="pt-8 md:grid md:grid-cols-12 md:gap-8 border-t-[1px] border-gray-200 mt-8 mb-8">
            <dt className="text-gray-900 font-semibold text-base leading-6 md:col-span-5">
              How can I contact you for support or inquiries?
            </dt>
            <dd className="mt-4 md:mt-0 md:col-span-7">
              <p className="text-gray-600 text-base leading-6">
                If you have any questions, feedback, or need assistance, feel
                free to reach out to us! You can contact us via:
              </p>
              <ul className="list-disc pl-4">
                <li>
                  <b>Email</b>: Send us a message at{" "}
                  <a href="mailto:hello@thinkthroo.com" className="underline">
                    hello@thinkthroo.com
                  </a>
                  .
                </li>
              </ul>
              <p className="text-gray-600 text-base leading-6">
                We are here to help and ensure that you have a smooth experience
                with our platform!
              </p>
            </dd>
          </div>
        </dl>
      </div>
        {/* FIXME: Should be moved to SiteFooter and placed in layout.tsx */}
      <div className="max-w-[80rem] mt-24 mx-auto px-6 md:px-8">
        <footer className="pt-24 pb-24 md:pt-32 md:pb-32 mt-36 border-t border-gray-900/10 relative">
          <h2
            id="footer-heading"
            className="absolute w-1 h-1 p-0 -m-px overflow-hidden clip-rect-0 border-0 whitespace-nowrap"
          >
            Footer
          </h2>

          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image alt="Think Throo" src="/logo.svg" className="h-7" height={24} width={24} />
              <div className="text-gray-900 font-semibold">Think Throo</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-6 lg:gap-x-16 mt-12">
            <div>
              <h3 className="text-gray-900 font-semibold text-sm leading-5">
                Free Architectural Guides
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <a href="https://app.thinkthroo.com/architecture" target="_blank" className="text-gray-600 text-sm leading-5">
                    Tooling
                  </a>
                </li>
                <li>
                  <a href="https://app.thinkthroo.com/architecture" target="_blank" className="text-gray-600 text-sm leading-5">
                    Project Structure
                  </a>
                </li>
                <li>
                  <a href="https://app.thinkthroo.com/architecture" target="_blank" className="text-gray-600 text-sm leading-5">
                    Components Structure
                  </a>
                </li>
                <li>
                  <a href="https://app.thinkthroo.com/architecture" target="_blank" className="text-gray-600 text-sm leading-5">
                    API Layer
                  </a>
                </li>
                <li>
                  <a href="https://app.thinkthroo.com/architecture" target="_blank" className="text-gray-600 text-sm leading-5">
                    State Management
                  </a>
                </li>
                <li>
                  <a href="https://app.thinkthroo.com/architecture" target="_blank" className="text-gray-600 text-sm leading-5">
                    Error Handling
                  </a>
                </li>
                <li>
                  <a href="https://app.thinkthroo.com/architecture" target="_blank" className="text-gray-600 text-sm leading-5">
                    Testing
                  </a>
                </li>
                <li>
                  <a href="https://app.thinkthroo.com/architecture" target="_blank" className="text-gray-600 text-sm leading-5">
                    Performance
                  </a>
                </li>
                <li>
                  <a href="https://app.thinkthroo.com/architecture" target="_blank" className="text-gray-600 text-sm leading-5">
                    Security
                  </a>
                </li>
                <li>
                  <a href="https://app.thinkthroo.com/architecture" target="_blank" className="text-gray-600 text-sm leading-5">
                    Deployment
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 font-semibold text-sm leading-5">
                Courses
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <a href="https://app.thinkthroo.com/best-practices" target="_blank" className="text-gray-600 text-sm leading-5">
                    Best Practices
                  </a>
                </li>
                <li>
                  <a href="https://app.thinkthroo.com/production-grade-projects" target="_blank" className="text-gray-600 text-sm leading-5">
                    Production-Grade Projects
                  </a>
                </li>
                <li>
                  <a href="https://app.thinkthroo.com/build-from-scratch" target="_blank" className="text-gray-600 text-sm leading-5">
                    Build From Scratch
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 font-semibold text-sm leading-5">
                Community
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <a href="#" className="text-gray-600 text-sm leading-5">
                    Discord
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 font-semibold text-sm leading-5">
                Legal
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <a href="#" className="text-gray-600 text-sm leading-5">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 text-sm leading-5">
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 font-semibold text-sm leading-5">
                Contact Us
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <a
                    href="mailto:hello@thinkthroo.com"
                    className="text-gray-600 text-sm leading-5"
                  >
                    hello@thinkthroo.com
                  </a>
                </li>
                <li>
                  <a href="https://x.com/thinkthroo" className="text-gray-600 text-sm leading-5">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://github.com/thinkthroo" target="_blank" className="text-gray-600 text-sm leading-5">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/thinkthroo/" className="text-gray-600 text-sm leading-5">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@thinkthroo" className="text-gray-600 text-sm leading-5">
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
