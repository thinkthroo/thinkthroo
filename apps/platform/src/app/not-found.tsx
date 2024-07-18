import Link from 'next/link'
import ModuleLayout from './(app)/(modules)/layout'

export default function NotFound() {
  return (
    <ModuleLayout>
      <div className="flex justify-center">
        <h1 className="inline-block m-0 mr-5 p-0 pr-6 text-3xl font-medium leading-[49px] border-r border-solid border-gray-300">404</h1>
        <div className="inline-block">
          <h2 className="text-base font-normal leading-[49px] m-0">This page could not be found. Return to <Link href="/" className='underline'>Home</Link></h2>
        </div>
      </div>
    </ModuleLayout>
  )
}