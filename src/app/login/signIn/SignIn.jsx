import Head from 'next/head'
import Link from 'next/link'

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>      
    <nav className= 'flex justify-center items-center mt-5 shadow-md my-2 pl-12'>
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
    <div className="flex items-center justify-center min-h-full ">
      <div className="bg-white p-10 rounded-lg w-full text-center">
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign In</h2>
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
          <button
            className="relative w-72 py-2 px-4 border border-gray-300 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-100"
          >
            <img src="/apple.png" alt="Apple" className="w-5 h-5 absolute left-2" />
            <span>Continue with Apple</span>
          </button>
        </div>
        <div className="my-4 text-gray-400">OR</div>
        <a href="#" className="text-blue-500 hover:underline">
          Other ways to log in
        </a>
        <p className="text-gray-600 mt-6">
          Don't have an account?{' '}
          <Link href="/login/signUp" className="text-blue-500 hover:underline border-2 p-2 rounded-lg border-blue-500">
            Create Account
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
    </div>
    </>
  )
}
