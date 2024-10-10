import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import img from '../../../../public/MeganHuynh.png'

function SignUp() {
  return (
    <>
     <nav className= 'flex justify-center items-center mt-5 shadow-md py-2 pl-12'>
    <svg
    className="cursor-pointer text-blue-500 hover:text-gray-900 "
    width="149"
    height="40"
    viewBox="0 0 149 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: '100%', maxWidth: '149px', height: 'auto' }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.2723 12.9157C19.2723 16.3726 16.4699 19.175 13.013 19.175C9.55612 19.175 6.75375 16.3726 6.75375 12.9157C6.75375 9.4588 9.55612 6.65644 13.013 6.65644C16.4699 6.65644 19.2723 9.4588 19.2723 12.9157ZM0 13C0 20.1797 5.8203 26 13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13ZM32.4106 0.355957C34.3777 0.355957 35.9723 1.95056 35.9723 3.9176V22.082C35.9723 24.049 34.3777 25.6436 32.4106 25.6436C30.4436 25.6436 28.849 24.049 28.849 22.082V3.9176C28.849 1.95056 30.4436 0.355957 32.4106 0.355957ZM42.3835 0.355957C44.3506 0.355957 45.9452 1.95056 45.9452 3.9176V22.082C45.9452 24.049 44.3506 25.6436 42.3835 25.6436C40.4165 25.6436 38.8219 24.049 38.8219 22.082V3.9176C38.8219 1.95056 40.4165 0.355957 42.3835 0.355957ZM55.9177 12.1097C55.9177 10.1427 54.3231 8.5481 52.3561 8.5481C50.389 8.5481 48.7944 10.1427 48.7944 12.1097V14.2467C48.7944 16.2138 50.389 17.8084 52.3561 17.8084C54.3231 17.8084 55.9177 16.2138 55.9177 14.2467V12.1097ZM62.3288 4.98633C64.2958 4.98633 65.8904 6.58093 65.8904 8.54797V17.4521C65.8904 19.4191 64.2958 21.0137 62.3288 21.0137C60.3617 21.0137 58.7671 19.4191 58.7671 17.4521V8.54797C58.7671 6.58093 60.3617 4.98633 62.3288 4.98633Z"
      fill="currentColor"
    ></path>
  </svg>
    </nav>
    <div className="flex items-center justify-center min-h-screen shadow-md">
      <div className="bg-white p-10 rounded-lg w-full text-center">
        <h2 className="text-2xl font-semibold mb-6 text-center">Create Account</h2>
        <p className='leading-loose mb-4 font-light'>Sync you <b>work Calendar</b> to start using otter</p>
        <div className="space-y-4 flex flex-col items-center justify-center">
          <button
            className="relative w-72  py-2 px-4 border border-gray-300 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-100"
          >
            <img src="/google.png" alt="Google" className="w-5 h-5 absolute left-2" />
            <span>Continue with Google</span>
          </button>
          <button
            className="relative w-72 py-2 px-4 border border-gray-300 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-100"
          >
            <img src="/microsoft.png" alt="Microsoft" className="w-5 h-5 absolute left-2" />
            <span>Continue with Microsoft</span>
          </button>
          <p>Why does Otter need calendar access?</p>
        </div>
        <div className="my-4 text-gray-400">OR</div>
        <a href="#" className="text-blue-500 hover:underline">
          Other ways to log in
        </a>
        <p className="text-gray-600 mt-6">
          Already have an Otter Account?{' '}
          <Link href="/login/signIn" className="text-blue-500 hover:underline  border-2 p-2 rounded-lg border-blue-500">
            SignIn
          </Link>
        </p>
        <p className="text-sm text-gray-500 mt-6">
          By using Otter you agree to the{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
      <section className="flex flex-col items-center justify-center text-center py-12 bg-white mr-10">
      {/* Profile Image */}
      <div className="mb-4">
        <Image
          src={img} // Replace with actual path to image
          alt="Megan Huynh"
          width={80}
          height={80}
          className="rounded-full"
        />
      </div>

      {/* Name and Title */}
      <h3 className="text-lg font-semibold">Megan Huynh</h3>
      <p className="text-sm text-gray-600">Product Manager</p>

      {/* Quote */}
      <p className="max-w-lg mt-4 text-gray-600 italic">
        "Otter has really boosted my confidence in my work because now I know that every user interview I conduct is stored somewhere for me always to look back to."
      </p>

      {/* Featured On Section */}
      <div className="mt-8">
        <p className="text-gray-500 font-semibold">Featured on:</p>
        <div className="mt-8 text-center">
        <div className="flex flex-wrap justify-center space-x-4">
          <img 
            src="https://cdn.prod.website-files.com/618e9316785b3582a5178502/65ba7bb12bd967300c25e950_Amazon.svg" 
            loading="lazy" 
            alt="Amazon Logo" 
            className="home__client-logo anim-1"
          />
          <img 
            src="https://cdn.prod.website-files.com/618e9316785b3582a5178502/6643ff8070ff4a555db377f9_grant-thorton.svg" 
            loading="lazy" 
            alt="Grant Thornton Logo" 
            className="home__client-logo anim-2 is-gt"
          />
          <img 
            src="https://cdn.prod.website-files.com/618e9316785b3582a5178502/65ba7befab663a9b615307aa_NBC.svg" 
            loading="lazy" 
            alt="NBC Logo" 
            className="home__client-logo anim-2"
          />
          <img 
            src="https://cdn.prod.website-files.com/618e9316785b3582a5178502/65ba7bb18129c7a788209ba9_Walgreens.svg" 
            loading="lazy" 
            alt="Walgreens Logo" 
            className="home__client-logo anim-1"
          />
          <img 
            src="https://cdn.prod.website-files.com/618e9316785b3582a5178502/65ba7bb1f604c692aa2850c8_UCLA.svg" 
            loading="lazy" 
            alt="UCLA Logo" 
            className="home__client-logo anim-1"
          />
        </div>
      </div>
      </div>
    </section>
    </div>

    
    </>
  )
}

export default SignUp