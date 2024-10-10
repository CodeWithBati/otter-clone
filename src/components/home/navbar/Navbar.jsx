import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";

export default function Navbar({ toggleSidebar, toggleCalendar }) {
  return (
    <header className="bg-white shadow-md py-2 pr-2 w-full">
      <div className="w-full mx-auto flex justify-between items-center px-4">
        {/* Mobile Menu Toggle (Hamburger) */}
        <div className="md:hidden mr-2">
          <button onClick={toggleSidebar} className="text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <Link href="/">
          {/* Left Section - Home */}
          <div className="text-[10px] font-bold ml-3">Home</div>
        </Link>

        {/* Middle Section - Search */}
        <div className="flex-grow mx-4 max-w-full md:max-w-36">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-1 pl-8 bg-purple-50 text-gray-900 text-[10px] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <div className="absolute left-3 top-2">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Section - Buttons */}
        <div className="hidden md:flex space-x-3 items-center">
          <button className="border border-gray-300 text-gray-700 px-3 py-1 text-[10px] rounded-md hover:bg-gray-100 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10l4.5 4.5m-6-1.5H3m18 6V9m-3-4v4H7V5H4v14h10v-4m-6-4l4 4 4-4"
              />
            </svg>
            Paste meeting URL to record
          </button>

          <button className="bg-blue-600 text-white px-3 py-1 text-[10px] rounded-md hover:bg-blue-700 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m-7-7h14" />
            </svg>
            Record
          </button>

          <button className="border border-blue-500 text-blue-600 px-3 py-1 text-[10px] rounded-md hover:bg-blue-50 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7v4h16V7H4zM4 17v-4h16v4H4zm4-6h8v2H8v-2z"
              />
            </svg>
            Import
          </button>
        </div>

        <div className="md:hidden">
          {/* Calendar toggle button */}
          <button onClick={toggleCalendar} className="text-gray-700">
            <FaCalendarAlt className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
