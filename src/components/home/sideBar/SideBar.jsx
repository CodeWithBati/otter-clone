
'use client'
import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import { GiftIcon } from '@heroicons/react/24/outline'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'

import { HomeIcon } from '@heroicons/react/24/outline'; // Updated import path for Heroicons v2
import Link from 'next/link';
import {useState} from 'react'
export default function Sidebar({ isViSible, onClose }) {

const [dropdownOpen, setDropdownOpen] = useState(false);

const toggleDropdown = () => {
  setDropdownOpen(!dropdownOpen);
};

  return (
    <div
    className={`flex ${
      isViSible ? 'absolute' : 'hidden'
    } z-50 top-14 md:top-0 left-0 w-56 pl-2 shadow-lg md:block md:relative md:w-56 md:h-auto md:shadow-none`}
    >
      <aside className="w-48 h-screen bg-white text-gray-700 shadow-lg flex flex-col">
        <nav className='flex justify-between  pt-6'>
        <svg
    className="cursor-pointer text-blue-500 hover:text-gray-900 ml-4"
    width="149"
    height="26"
    viewBox="0 0 149 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: '45%', maxWidth: '149px', height: 'auto' }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.2723 12.9157C19.2723 16.3726 16.4699 19.175 13.013 19.175C9.55612 19.175 6.75375 16.3726 6.75375 12.9157C6.75375 9.4588 9.55612 6.65644 13.013 6.65644C16.4699 6.65644 19.2723 9.4588 19.2723 12.9157ZM0 13C0 20.1797 5.8203 26 13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13ZM32.4106 0.355957C34.3777 0.355957 35.9723 1.95056 35.9723 3.9176V22.082C35.9723 24.049 34.3777 25.6436 32.4106 25.6436C30.4436 25.6436 28.849 24.049 28.849 22.082V3.9176C28.849 1.95056 30.4436 0.355957 32.4106 0.355957ZM42.3835 0.355957C44.3506 0.355957 45.9452 1.95056 45.9452 3.9176V22.082C45.9452 24.049 44.3506 25.6436 42.3835 25.6436C40.4165 25.6436 38.8219 24.049 38.8219 22.082V3.9176C38.8219 1.95056 40.4165 0.355957 42.3835 0.355957ZM55.9177 12.1097C55.9177 10.1427 54.3231 8.5481 52.3561 8.5481C50.389 8.5481 48.7944 10.1427 48.7944 12.1097V14.2467C48.7944 16.2138 50.389 17.8084 52.3561 17.8084C54.3231 17.8084 55.9177 16.2138 55.9177 14.2467V12.1097ZM62.3288 4.98633C64.2958 4.98633 65.8904 6.58093 65.8904 8.54797V17.4521C65.8904 19.4191 64.2958 21.0137 62.3288 21.0137C60.3617 21.0137 58.7671 19.4191 58.7671 17.4521V8.54797C58.7671 6.58093 60.3617 4.98633 62.3288 4.98633Z"
      fill="currentColor"
    ></path>
  </svg>
  <svg className='w-4 h-4 mr-6 cursor-pointer' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
<path fillRule="evenodd" clipRule="evenodd" d="M3.76538 8.19529C3.74899 4.75665 6.52195 1.875 10.0388 1.875H10.0436C13.4919 1.90112 16.2341 4.76177 16.2341 8.19531V8.75C16.2341 11.4583 16.8009 12.9709 17.2516 13.7494L17.252 13.75C17.3615 13.9397 17.4192 14.1548 17.4194 14.3739C17.4196 14.5929 17.3622 14.8082 17.2531 14.9981C17.1439 15.188 16.9867 15.3459 16.7973 15.4559C16.6079 15.5659 16.3929 15.6242 16.1738 15.625L16.1716 15.625H3.82788L3.82568 15.625C3.60663 15.6242 3.39163 15.5659 3.20222 15.4559C3.01281 15.3459 2.85563 15.188 2.74645 14.9981C2.63726 14.8082 2.57988 14.5929 2.58008 14.3739C2.58027 14.1548 2.63802 13.9397 2.74755 13.75L2.74792 13.7494C3.19862 12.9709 3.76538 11.4583 3.76538 8.75V8.19529ZM10.0364 3.125C7.22698 3.1263 5.00152 5.43075 5.01537 8.19062L5.01538 8.19376L5.01538 8.75C5.01538 11.6348 4.41051 13.3721 3.83008 14.375H16.1694C15.589 13.3721 14.9841 11.6348 14.9841 8.75V8.19531C14.9841 5.42652 12.7745 3.14704 10.0364 3.125Z" fill="currentColor"></path>
<path fillRule="evenodd" clipRule="evenodd" d="M7.49982 14.375C7.845 14.375 8.12482 14.6548 8.12482 15V15.625C8.12482 16.1223 8.32236 16.5992 8.67399 16.9508C9.02562 17.3025 9.50254 17.5 9.99982 17.5C10.4971 17.5 10.974 17.3025 11.3256 16.9508C11.6773 16.5992 11.8748 16.1223 11.8748 15.625V15C11.8748 14.6548 12.1546 14.375 12.4998 14.375C12.845 14.375 13.1248 14.6548 13.1248 15V15.625C13.1248 16.4538 12.7956 17.2487 12.2095 17.8347C11.6235 18.4208 10.8286 18.75 9.99982 18.75C9.17102 18.75 8.37616 18.4208 7.79011 17.8347C7.20406 17.2487 6.87482 16.4538 6.87482 15.625V15C6.87482 14.6548 7.15464 14.375 7.49982 14.375Z" fill="currentColor"></path>
</svg>
        </nav>
        {/* Top section: Fixed */}
        <div className="p-4 flex-shrink-0 relative">
          <div className="flex items-center space-x-4">
            <div className="rounded-full bg-purple-400 text-[12px] text-white flex items-center justify-center w-6 h-6">
              M
            </div>
            <div className=''>
              <button onClick={toggleDropdown}>
              <p className="text-[10px] text-start font-semibold">Muhammad Rauf</p>
              <p className="text-[10px] text-start text-gray-500">muhammadrauf668@...</p>
            
              </button>
              </div>

               {/* Dropdown menu */}
      {dropdownOpen && (
        <div
          className="absolute -right-44 overflow-hidden top-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="basic bg-blue-700 rounded-md text-white font-semibold flex flex-col justify-center items-center h-8 text-xs">Basic</div>
          <div className="py-1" role="none">
            <div className="flex items-center justify-between px-2">
              <div className="rounded-full bg-purple-400 text-white text-center h-6 min-w-6">
                M
              </div>
              <div className="ml-3">
                <p className="text-[10px] font-semibold">Muhammad Rauf (You)</p>
                <p className="text-[10px] text-gray-500 text-wrap">muhammadrauf668@gmail...</p>
                <Link
              href="#"
              className="text-blue-600 block py-1 text-xs hover:bg-gray-100"
              role="menuitem"
            >
              Upgrade plan
            </Link>
              </div>
          
            </div>
            <div className="border-t my-2"></div>
          
            <Link
              href="#"
              className="px-6 py-1 text-[10px] font-medium text-gray-700 hover:bg-gray-100 flex gap-1"
              role="menuitem"
            > <Cog6ToothIcon className="h-4 w-4 text-gray-700" />
              Account Settings
            </Link>
            <Link
              href="#"
              className="px-6 py-1 text-[10px] font-medium text-gray-700 hover:bg-gray-100 flex gap-1"
              role="menuitem"
            >
              <GiftIcon className="h-4 w-4 text-gray-700" />
              Refer & earn
            </Link>
            <Link
              href="/help&contact/helpCenter"
              className="px-6 py-1 text-[10px] font-medium text-gray-700 hover:bg-gray-100 flex gap-1"
              role="menuitem"
            >
              <QuestionMarkCircleIcon className="h-4 w-4 text-gray-700" />
              Help Center
            </Link>
          
            <Link href='/help&contact/contactSupport'
              className="px-6 py-1 text-[10px] font-medium text-gray-700 hover:bg-gray-100 flex gap-1"
              role="menuitem"
            >
              <EnvelopeIcon className="h-4 w-4 text-gray-700" /> 
              
              Contact Support
            </Link>
            <Link
              href="#"
              className="px-6 py-1 text-[10px] font-medium text-gray-700 hover:bg-gray-100 flex gap-1"
              role="menuitem"
            >
              <ArrowRightOnRectangleIcon className="h-4 w-4 text-gray-700" />
              Logout
            </Link>
            <div className="border-t my-2"></div>
            <Link
              href="#"
              className="px-6 py-1 text-[10px] font-medium text-gray-700 hover:bg-gray-100 flex gap-1"
              role="menuitem"
            >
              Download Mobile App
            </Link>
            <Link
              href="#"
              className="px-6 py-1 text-[10px] font-medium text-gray-700 hover:bg-gray-100 flex gap-1"
              role="menuitem"
            >
              Install Chrome Extension
            </Link>
          </div>
        </div>
      )}
          </div>
          <div className="my-4">
            
            <button className="block w-full bg-gray-100 text-blue-500 font-medium py-2 px-4 rounded-lg hover:bg-blue-200 transition duration-300 text-[10px] text-start">
              Muhammad
            </button>
            <button className="block w-full bg-gray-100 text-blue-500 mt-2 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-300  text-[10px] text-start">
              Invite teammates
            </button>
          </div>
        </div>

        {/* Scrollable middle section */}
        <div className="flex-grow overflow-y-auto scrollbar-thin">
          <nav className="px-4">
            <ul>
              <li>
                <Link href="/" className="flex items-center p-2 text-white bg-blue-500 rounded-md">
                  {/* Updated Heroicon usage */}
                  <span className="ml-1 text-[10px] flex gap-1"> <HomeIcon className="w-3 h-3 text-white" />Home</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center p-2 text-gray-900 hover:bg-gray-100 rounded-md">
             
                  <span className="ml-1 text-[10px] flex gap-1"> <img _ngcontent-otter-web-c2442667534="" src="https://public.otter.ai/img/otter_avatar_128x128.png" alt="" className= 'w-4 h-4 rounded-full'/>Otter AI Chat</span>
                  <span className="ml-auto bg-green-100 text-green-600 px-2 py-1 text-[10px] rounded-lg">New</span>
                </Link>
              </li>
              <li>
              <Link href= '/conversations/myconversation'>
                <span className="flex items-center p-2 ml-1 text-gray-900 hover:bg-gray-100 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-3 h-3 ' viewBox="0 0 512 512"><path d="M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492z"/></svg>
            
                  <span className="ml-1 text-[10px]  ">My Conversations</span>
                </span>
              </Link>
              </li>
              <li>
              <Link href='/conversations/allconversation'>
                <span className="flex items-center p-2 text-gray-900 hover:bg-gray-100 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4 rounded-full' viewBox="0 0 640 512"><path d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.8 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z"/></svg>
                  <span className="ml-2 text-[10px]">All Conversations</span>
                </span>
              </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center p-2 text-gray-900 hover:bg-gray-100 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="5%" height="5%" viewBox="0 0 18 18" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
    <g fill="currentColor" fill-rule="evenodd">
        <rect width="4" height="4" rx="1"></rect>
        <rect width="4" height="4" x="7" rx="1"></rect>
        <rect width="4" height="4" x="14" rx="1"></rect>
        <rect width="4" height="4" y="7" rx="1"></rect>
        <rect width="4" height="4" x="7" y="7" rx="1"></rect>
        <rect width="4" height="4" x="14" y="7" rx="1"></rect>
        <rect width="4" height="4" y="14" rx="1"></rect>
        <rect width="4" height="4" x="7" y="14" rx="1"></rect>
        <rect width="4" height="4" x="14" y="14" rx="1"></rect>
    </g>
</svg>
                  <span className="ml-2  text-[10px]">Apps</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center p-2 text-gray-900 hover:bg-gray-100 rounded-md">
                <svg width="2%" height="2%" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
<path fill-rule="evenodd" clipRule="evenodd" d="M3.77821 14.2222C3.77821 13.2404 2.98227 12.4444 2.00043 12.4444C1.01859 12.4444 0.222656 13.2404 0.222656 14.2222C0.222656 15.2041 1.01859 16 2.00043 16C2.98227 16 3.77821 15.2041 3.77821 14.2222ZM2.00043 6.22222C2.98227 6.22222 3.77821 7.01816 3.77821 8C3.77821 8.98184 2.98227 9.77778 2.00043 9.77778C1.01859 9.77778 0.222656 8.98184 0.222656 8C0.222656 7.01816 1.01859 6.22222 2.00043 6.22222ZM2.00043 0C2.98227 0 3.77821 0.795938 3.77821 1.77778C3.77821 2.75962 2.98227 3.55556 2.00043 3.55556C1.01859 3.55556 0.222656 2.75962 0.222656 1.77778C0.222656 0.795938 1.01859 0 2.00043 0Z" fill="currentColor"></path>
</svg>
                  <span className="ml-2 text-[10px]">More</span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="px-1 items-center justify-between ml-4 flex">
            <h3 className="text-xs text-gray-900">Channels</h3>
            <button className="flex items-center text-gray-900 hover:bg-gray-100 p-2 rounded-md mt-2">
              <span className="mr-7">+</span>
            </button>
          </div>

          <div className="px-1 flex justify-between items-center ml-4">
            <h3 className="text-xs text-gray-900">Direct Messages</h3>
            <button className="flex items-center text-gray-600 hover:bg-gray-100 p-2 rounded-md mt-2">
              <span className="mr-7 ">+</span>
            </button>
          </div>

          <div className="px-1 flex justify-between items-center ml-4">
            <h3 className="text-xs text-gray-900">Folders</h3>
            <button className="flex items-center text-gray-600 hover:bg-gray-100 p-2 rounded-md mt-2">
              <span className="mr-7 ">+</span>
            </button>
          </div>
        </div>

        {/* Bottom section: Fixed */}
        <div className="p-4 border-t border-gray-200 flex-shrink-0">
          <h3 className="text-xs text-gray-900 font-semibold">Basic (Free)</h3>
          <p className="text-[10px] text-gray-800">0 of 300 monthly minutes used</p>
          <p className="text-[10px] text-gray-800">Minutes reset in 9 days</p>
          <button className="block w-auto border-blue-500 border-[1px] text-blue-500 mt-2 font-bold py-2 px-2 rounded-lg text-[10px]">
            Upgrade
          </button>
        </div>
      </aside>
    </div>
  );
}