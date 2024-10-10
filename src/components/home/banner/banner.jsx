// components/Banner.js
import { InformationCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="bg-blue-700 p-2 text-wrap text-center md:flex items-center justify-center">
      {/* Info Icon */}
     
      {/* Banner Content */}
      <p className="text-white text-center text-[10px] flex ">
      <InformationCircleIcon className="h-3 w-3 text-white mr-1" />
        OtterPilot for Sales trial ends in <strong>143 days.</strong> Get it for your team today. 
      </p>
      {/* Button */}
      <Link href='/help&contact/contactSupport'
        className="border border-white text-white py-1 px-1 rounded-md ml-2 text-[10px] font-semibold"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default Banner;
