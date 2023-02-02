import Image from "next/image"
import Link from "next/link"


export default function Navigation() {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <a href="/">
                  <Image className="hidden h-8 w-auto lg:block" src="/mark.svg" width={500} height={500} alt="Your Company" />
                </a>
              </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <Link href="/notesRest" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Notes (REST)</Link>

                <Link href="/notesDirect" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Notes</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
