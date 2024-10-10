'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import SupportForm from './form/SupportForm ';

export default function ContactSupport() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const selectedOption = form.issue.value;
    if (selectedOption && selectedOption !== '-') {
      setIsSubmitted(true);
      setSelectedIssue(selectedOption);
    } else {
      alert('Please select an issue');
    }
  };

  return (
    <>
      <div className="mx-auto min-h-screen px-4 md:px-12 lg:px-32">
        {/* Header */}
        <div className="flex justify-between items-center p-4 md:p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2 md:space-x-4">
            <svg
              className="text-blue-500 hover:text-gray-900"
              width="149"
              height="26"
              viewBox="0 0 149 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '100%', maxWidth: '149px', height: 'auto' }}
            >
              {/* SVG paths */}
            </svg>
            <Link href="/help&contact/helpCenter" className="text-blue-500 text-sm md:text-base">
              Help Center
            </Link>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <span className="text-blue-500 font-medium text-sm md:text-base">
              Otter Status <span className="text-green-500 text-base md:text-2xl">•</span>
            </span>
          </div>
        </div>

        {/* Breadcrumb and search bar */}
        <div className="px-4 py-4 md:py-8 text-xs md:text-sm text-gray-500 flex flex-col gap-2 sm:flex-row justify-between">
          <div className="truncate">
            <a href="/help-center" className="text-indigo-600 hover:underline">
              Otter.ai Help Center
            </a>
            <span> &gt; </span>
            <span>Submit a request</span>
          </div>
          <div>
            <form className="max-w-md mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
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
                <input
                  type="search"
                  id="default-search"
                  className="block w-full sm:w-48 md:w-72 p-2 ps-10 text-sm md:text-md text-gray-900 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search"
                  required
                />
              </div>
            </form>
          </div>
        </div>

        {/* Main form */}
        <div className="max-w-3xl px-4 py-6 md:py-12 mb-6 md:mb-12">
          <h1 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-8">Submit a request</h1>
          <form onSubmit={handleSubmit} className="mb-4 md:mb-6">
            <label className="block text-lg md:text-xl mb-2" htmlFor="issue">
              Tell us what’s happening
            </label>
            <select
              id="issue"
              name="issue"
              className="border border-blue-500 rounded-md p-2 md:p-3 w-full"
              aria-label="Tell us what's happening"
            >
              <option value="-">-</option>
              <option value="1500002816202">Subscription, billing, & manage account</option>
              <option value="1500000868381">I am experiencing a problem using Otter</option>
              <option value="1500002735781">I have a general question about using Otter</option>
              <option value="1500002816222">Otter Business</option>
              <option value="1500002735801">
                I need help with a third-party app (Zoom, Dropbox, etc.)
              </option>
              <option value="1900000424245">Feedback</option>
              <option value="1500002735821">Something else</option>
            </select>
            <button
              type="submit"
              className="mt-4 w-full sm:w-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </form>

          {/* Conditionally render the SupportForm after submission */}
          {isSubmitted && (
            <div className="mt-6">
              <SupportForm issue={selectedIssue} />
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200 py-4 md:py-6 text-center text-xs md:text-sm text-gray-500">
          Otter.ai Help Center
        </footer>
      </div>
    </>
  );
}
