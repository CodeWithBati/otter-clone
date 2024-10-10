'use client'
import { useState, useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sideBar/SideBar';
import MyCalendar from '../calender/calendar';
import Banner from '../banner/banner';

export default function Middle() {
  const [placeholderText, setPlaceholderText] = useState('');
  const [isCalendarVisible, setCalendarVisible] = useState(false); // Mobile calendar
  const [isSidebarVisible, setSidebarVisible] = useState(false); // Mobile
  
  // Typing animation for placeholder
  const typingText = 'What were the major challenges or obstacles discussed?';
  useEffect(() => {
    let index = 0;
    let direction = 1;
    const interval = setInterval(() => {
      setPlaceholderText(typingText.slice(0, index));
      index += direction;
      if (index === typingText.length || index === 0) direction *= -1;
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const images = [
    '/Image-1.png',  // Replace with your image paths
    '/Image-2.png',
    '/Image-3.png',
    '/Image-4.png',
    '/Image-5.png',
    '/Image-6.png',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
        <Banner />
     <div className="flex w-full md:h-screen overflow-y-clip relative">
        <Sidebar isViSible={isSidebarVisible} onClose={() => setSidebarVisible(false)}  />
    
         {/* Navbar: Takes remaining space */}
         <div className="md:flex-grow w-full">
         
         <Navbar    toggleSidebar= {() => setSidebarVisible(!isSidebarVisible)}
         toggleCalendar={() => setCalendarVisible(!isCalendarVisible)}
        />
         
       <div className="relative h-full flex flex-col md:flex-row justify-between">
        
         {/* Middle Section */}
         <div className="container overflow-y-auto flex flex-col h-full w-full">
          {/* Scrollable content starts here */}
          <div className="overflow-y-auto  min-h-[900px] flex-grow p-4 md:p-6"> {/* Set scrollable area */}
            <div className="shadow  max-w-[500px] mx-auto rounded-lg p-4 md:p-2">
              <h2 className="text-sm  font-semibold mb-3 leading-none">Get Started with OtterPilot for Sales</h2>
              <p className="font-semibold text-[10px] leading-none">A central place to collaborate and share meeting notes with your team.</p>
              <div className="mt-2 md:mt-3 h-5 border-gray-300 border-b-[1px] leading-none">
                <div className=" w-full bg-blue-200 rounded-full h-[5px] overflow-hidden">
                  <div className="bg-blue-600 h-2 w-32"></div>
                </div>
              </div>
              
              {/* Tasks */}
              <div className="bg-white mt-2 md:mt-2">
                <div className="flex flex-col md:flex-row justify-between md:mb-2">
                  <div>
                    <h2 className='font-semibold text-[10px]'>Record/import a sales call</h2>
                    <p className='text-[10px] md:text-[10px]'>Record or import a call and state it is a sales call.</p>
                  </div>
                  <button className='bg-blue-700 text-white w-9 h-6 mt-2 rounded-md text-[9px] font-semibold'>Start</button>
                </div>
                <div className="flex flex-col md:flex-row justify-between  md:mb-2">
                  <div>
                    <h2 className='font-semibold text-[10px]'>AI Sales Insights</h2>
                    <p className='text-[10px] md:text-[10px]'>Extracting Insights including Budget, Need, Action items, Competitors, BANT, MEDPIC</p>
                  </div>
                  <button className='bg-blue-700 text-white w-9 h-6 mt-2 rounded-md text-[9px] font-semibold'>Start</button>
                </div>
                <div className="flex flex-col md:flex-row justify-between md:mb-2">
                  <div>
                    <h2 className='font-semibold text-[10px]'>Sync AI Notes to CRMs</h2>
                    <p className='text-[10px] md:text-[10px]'>Save hours by automatically pushing Sales Insights and call notes to your CRM</p>
                  </div>
                  <button className='bg-blue-700 text-white w-9 h-6 mt-2 rounded-md text-[9px] font-semibold'>Start</button>
                </div>
                <div className="flex flex-col md:flex-row justify-between md:mb-6">
                  <div>
                    <h2 className='font-semibold text-[10px]'>Visibility into your team’s calls</h2>
                    <p className='text-[10px] md:text-[10px]'>Automatically share your team’s calls, giving you real-time visibility.</p>
                  </div>
                  <button className='bg-blue-700 text-white w-9 h-6 mt-2 rounded-md text-[9px] font-semibold'>Start</button>
                </div>
              </div>
            </div>

            {/* Additional Content */}
            <div className="container md:mt-16">
              <h2 className='font-semibold text-gray-600 text-[10px]'>Tuesday, August 27</h2>
            </div>

            {/* Image Slider */}
            <div className="flex flex-col md:flex-row justify-between items-start p-4 md:p-6">
              <div className="w-full md:w-2/3">
                <h2 className="text-xs md:text-xs font-semibold ">Learn how to use Otter</h2>
                <p className="text-gray-600 mb-1 text-xs md:text-[8px]">12:19 PM . 3 min . Muhammad Rauf General</p>
                <ul><li className="text-gray-700 text-xs md:text-[10px]">Using AI-powered Otter for meeting notes and organization. 0:00</li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 flex items-center mt-4 md:mt-0">
                <button className="bg-gray-300 px-3 py-1 rounded mr-2" onClick={handlePrev}>&#x3C;</button>
                <div className="overflow-hidden w-full md:w-64 h-28">
                  <img src={images[currentImage]} alt="Slider Image" className="w-full h-full object-cover" />
                </div>
                <button className="bg-gray-300 px-3 py-1 rounded ml-2" onClick={handleNext}>&#x3E; </button>
              </div>
          {/* Fixed Search bar */}
            </div>
           
          <div className="md:flex items-center hidden overflow-hidden fixed bottom-0 min-w-[700px] bg-white p-4 shadow-xl gap-2">
          <img _ngcontent-otter-web-c2442667534="" src="https://public.otter.ai/img/otter_avatar_128x128.png" alt="" className= 'w-4 h-4 rounded-full'/>
          <p class="font-semibold text-[12px] text-nowrap">Otter AI Chat</p>
            <input
              type="text"
              className="w-full h-10 px-4 text-xs border border-black rounded-full"
              placeholder={placeholderText}
            />
          </div>
          </div>
          
        </div>
        <MyCalendar isVisible={isCalendarVisible} onClose={() => setCalendarVisible(false)} />
         
      </div>
      </div>
      </div>
    </>
  );
}