// components/SupportForm.js

const SupportForm = () => {
    return (
      <div className="max-w-4xl mx-auto md:flex mt-10 p-6 bg-white rounded-md">
        <form>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-500 font-normal mb-2" htmlFor="email">
              Email address
            </label>
            <p className="text-gray-500 text-sm mb-2">
              Provide the email address associated with your account. If you're unable to access that email, please provide another.
            </p>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400"
              placeholder="youremail@example.com"
            />
          </div>
  
          {/* Subject Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400"
              placeholder="Subject"
            />
          </div>
  
          {/* Description Textarea */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400"
              rows="4"
              placeholder="Please enter the details of your request..."
            ></textarea>
            <p className="text-gray-500 text-sm mt-1">
              Please enter the details of your request. Provide as much information as possible.
            </p>
          </div>
  
          {/* File Attachment Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Attachments (optional)
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center px-4 py-6 bg-gray-100 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200">
                <svg
                  className="w-8 h-8 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16v-4a4 4 0 118 0v4m-5-4h2v4m5 8a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="mt-2 text-sm text-gray-500">Add file or drop files here</span>
                <input type="file" className="hidden" />
              </label>
            </div>
          </div>
  
          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default SupportForm;
  