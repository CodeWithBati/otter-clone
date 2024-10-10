'use client'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles
import { format } from 'date-fns';
import googleLogo from '../../../../public/googlecal-logo.png'

export default function MyCalendar({ isVisible, onClose }) {
  const [value, setValue] = useState(new Date());
  const [activeTab, setActiveTab] = useState('calendar');

  // Handle when a day is clicked
  const handleDateChange = (date) => {
    setValue(date);
  };

  return (
   <div
className={`${
  isVisible ? 'absolute' : 'hidden'
} z-50 top-14 right-0 md:top-0 w-72 p-2 shadow-lg md:block md:relative md:w-72 md:h-fit md:shadow-none`}
>
      <div className="bg-white shadow rounded-lg p-1 mb-4">
        <div className="flex">
          <button
            className={`px-2 text-[11px]  ${activeTab === 'calendar' ? 'text-[11px] font-semibold' : ''}`}
            onClick={() => setActiveTab('calendar')}
          >
            Calendar
          </button>
          <button
            className={`px-4 py-2 text-[11px] ${activeTab === 'action' ? 'text-[11px]  font-semibold' : ''}`}
            onClick={() => setActiveTab('action')}
          >
            Action Items
          </button>
 <button className="text-red-500 md:hidden" onClick={onClose}>
            Close
          </button> 
        </div>

        {/* Calendar Tab */}
        {activeTab === 'calendar' && (
          <div className="flex justify-center items-center py-3">
            <div className="bg-white shadow-lg rounded-lg p-2 w-72">
              <Calendar
                onChange={handleDateChange}
                value={value}
                className="w-full"
                tileClassName="p-2 hover:bg-blue-100"
              />
              <div className="mt-4 text-center">
                <p className="text-xs font-semibold">
                  Selected Date: {format(value, 'PPP')}
                </p>
              </div>
            <h2 className="my-1 text-center leading-none text-[10px] font-semibold">You don’t have any meetings.</h2>
                <p className='text-[9px] mb-1'>Looks like you don't have any events on your calendar for the next 7 days. You can create new events in your calendar app and then refresh the browser window.</p>
                <div className="gmail flex items-center">
                
                <a target='blank' href="https://calendar.google.com/calendar/u/0/r?pli=1" className='rounded-xl font-bold text-blue-500 border-2 border-blue-500 p-2 flex items-center gap-2 text-xs'><img _ngcontent-otter-web-c269057047="" className='w-4 h-4' src={googleLogo.src}/>Open your Gmail Calendar
                Does</a>
                </div>
            </div>
          </div>
        )}

        {/* Action Items Tab */}
        {activeTab === 'action' && (
          <div className= 'w-72 min-h-[300px] text-center flex items-center justify-center flex-col'>
            <h2 className='font-semibold text-xs'>No current action items</h2>
            <p className="text-center text-gray-400 text-[10px]">Your action items will appear here when assigned</p>
          </div>
        )}
      </div>
    </div>
  );
}