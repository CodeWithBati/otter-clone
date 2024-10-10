'use client'
import Navbar from "@/components/home/navbar/Navbar";
import Sidebar from "@/components/home/sideBar/SideBar";
import { useState } from "react";

export default function MyConversation
() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
    return (
      <>
       <div className="flex w-full md:h-screen">
        {/* Sidebar: Fixed width */}
        <Sidebar className="md:block w-64 hidden" />
        {isSidebarVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50" onClick={() => setSidebarVisible(false)} />
      )}
      <div className={`fixed inset-y-0 left-0 transform ${isSidebarVisible ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:hidden z-50`}>
        <Sidebar />
      </div>


        {/* Navbar: Takes remaining space */}
        <div className="flex-grow">
         
      <Navbar/>
         <h1 className="text-sm text-left font-semibold text-gray-800 m-4 ">All Conversations</h1>
        
      <div className="max-w-[600px] min-h-fit bg-white flex flex-col  justify-center items-center mx-auto p-8">
        
  
        {/* Container for the cards */}
        <div className="w-full max-w-4xl p-2 bg-white border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-xs font-semibold mb-4">Try OtterPilot for Sales ✨</h2>
  
          {/* Card Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            
            {/* Card 1 */}
            <div className=" hover:border hover:border-blue-500 flex flex-col p-2 bg-gray-50 border border-gray-300 rounded-md">
              <div className="flex items-center">
                <span className="text-green-500">
                  {/* Replace with appropriate icon */}
                  🚀
                </span>
                <span className="ml-2 text-[10px] font-bold text-gray-900 hover:text-blue-600">Review Sales Insights</span>
              </div>
              <p className="text-[10px] ml-[29px] text-gray-600">
                Budget, Need, Action items, Competitors, and your own
              </p>
            </div>
  
            {/* Card 2 */}
            <div className="flex flex-col p-2 hover:border hover:border-blue-500 bg-gray-50 border border-gray-300 rounded-md">
              <div className="flex items-center">
                <span className="text-purple-500">
                  {/* Replace with appropriate icon */}
                  📊
                </span>
                <span className="ml-2 text-[10px] font-bold text-gray-900 hover:text-blue-600">AI Notes to CRM</span>
              </div>
              <p className="text-[10px] ml-[29px] text-gray-600">
                Automatically push important meeting data to Salesforce & HubSpot
              </p>
            </div>
  
            {/* Card 3 */}
            <div className=" hover:border hover:border-blue-500 flex flex-col p-2 bg-gray-50 border border-gray-300 rounded-md">
              <div className="flex items-center">
                <span className="text-yellow-500">
                  {/* Replace with appropriate icon */}
                  🗣️
                </span>
                <span className="ml-2 text-[10px] font-bold text-gray-900 hover:text-blue-600">Visibility into team calls</span>
              </div>
              <p className="text-[10px] ml-[29px] text-gray-600">
                All in one place so you can save time to coach effectively
              </p>
            </div>
  
          </div>
        </div>
      </div>
      </div>
      </div>
      </>
    );
  }