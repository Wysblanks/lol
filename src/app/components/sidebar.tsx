import Link from 'next/link';
import Image from 'next/image';
import logo from '../images/logo.png';

export default function Sidebar() {
  return (
    <nav className="w-64 h-screen bg-white border flex flex-col">
      <div className='overflow-y-auto py-5 px-3 flex-1 bg-cool-gray-400 border-gray-200'>
        <div className='mb-8'> 
          <Image 
            src={logo} 
            alt="logo" 
            className=' w-20 h-20 mx-auto'
          /> 
          <h1 className='text-center text-black mt-2 tracking-widest text-1xl font-semibold'>
            Markads TransCo.
          </h1>
        </div>
        <hr className='mt-4'/>
        <ul className='space-y-2 tracking-wide'>

          <li className="mt-4">
            <h1 className='text-lg font-medium'>MENU</h1>
            <Link href="/admin" className="flex items-center p-3 text-lg font-medium rounded-lg dark:hover:bg-gray-100 hover:w-52 group">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
                <path d="M12.0001 18L12.0001 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M2.35151 13.2135C1.99849 10.9162 1.82198 9.76763 2.25629 8.74938C2.69059 7.73112 3.65415 7.03443 5.58126 5.64106L7.02111 4.6C9.41841 2.86667 10.6171 2 12.0001 2C13.3832 2 14.5818 2.86667 16.9791 4.6L18.419 5.64106C20.3461 7.03443 21.3097 7.73112 21.744 8.74938C22.1783 9.76763 22.0018 10.9162 21.6487 13.2135L21.3477 15.1724C20.8473 18.4289 20.597 20.0572 19.4291 21.0286C18.2612 22 16.5538 22 13.1389 22H10.8613C7.44646 22 5.73903 22 4.57112 21.0286C3.40321 20.0572 3.15299 18.4289 2.65255 15.1724L2.35151 13.2135Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
              </svg>                 
              <span className="ml-3 text-black">Dashboard</span>
            </Link>
          </li>

          <li>
            <Link href="/admin/operators" className="flex items-center p-3 text-lg font-medium rounded-lg dark:hover:bg-gray-100 hover:w-52 group">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
                <path d="M20.774 18C21.5233 18 22.1193 17.5285 22.6545 16.8691C23.7499 15.5194 21.9513 14.4408 21.2654 13.9126C20.568 13.3756 19.7894 13.0714 19 13M18 11C19.3807 11 20.5 9.88071 20.5 8.5C20.5 7.11929 19.3807 6 18 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M3.22596 18C2.47666 18 1.88067 17.5285 1.34555 16.8691C0.250089 15.5194 2.04867 14.4408 2.73465 13.9126C3.43197 13.3756 4.21058 13.0714 5 13M5.5 11C4.11929 11 3 9.88071 3 8.5C3 7.11929 4.11929 6 5.5 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M8.0838 15.1112C7.06203 15.743 4.38299 17.0331 6.0147 18.6474C6.81178 19.436 7.69952 20 8.81563 20H15.1844C16.3005 20 17.1882 19.436 17.9853 18.6474C19.617 17.0331 16.938 15.743 15.9162 15.1112C13.5201 13.6296 10.4799 13.6296 8.0838 15.1112Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.5 7.5C15.5 9.433 13.933 11 12 11C10.067 11 8.5 9.433 8.5 7.5C8.5 5.567 10.067 4 12 4C13.933 4 15.5 5.567 15.5 7.5Z" stroke="currentColor" stroke-width="1.5" />
              </svg>
              <span className="ml-3 text-black">Operator</span>
            </Link>
          </li>

          <li>
            <Link href="/admin/vans" className="flex items-center p-3 text-lg font-medium rounded-lg dark:hover:bg-gray-100 hover:w-52 group">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
                <path d="M19.1 18H20.5C20.9659 18 21.1989 18 21.3827 17.9239C21.6277 17.8224 21.8224 17.6277 21.9239 17.3827C22 17.1989 22 16.9659 22 16.5M19.1 18V11.3955C19.1 9.32395 18.7412 8.25904 17.3783 6.71082C15.5455 4.62893 14.3713 4 11.5699 4H6.22222C4.23185 4 3.23666 4 2.61833 4.68342C2 5.36683 2 6.46678 2 8.66667V13.3333C2 15.5332 2 16.6332 2.61833 17.3166C3.23666 18 4.23185 18 6.22222 18H7M19.1 18H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <circle cx="9" cy="18" r="2" stroke="currentColor" stroke-width="1.5" />
                <path d="M5 9.5C5 8.32149 5 7.73223 5.34171 7.36612C5.68342 7 6.23339 7 7.33333 7H9.66667C10.7666 7 11.3166 7 11.6583 7.36612C12 7.73223 12 8.32149 12 9.5C12 10.6785 12 11.2678 11.6583 11.6339C11.3166 12 10.7666 12 9.66667 12H7.33333C6.23339 12 5.68342 12 5.34171 11.6339C5 11.2678 5 10.6785 5 9.5Z" stroke="currentColor" stroke-width="1.5" />
              </svg>
              <span className="ml-3 text-black">Vans</span>
            </Link>
          </li>

          <li>
            <Link href="/admin/assignments" className="flex items-center p-3 text-lg font-medium rounded-lg dark:hover:bg-gray-100 hover:w-52 group">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                <path d="M4 3H3C2.44772 3 2 3.44772 2 4V18L3.5 21L5 18V4C5 3.44772 4.55228 3 4 3Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                <path d="M21 12.0013V8.00072C21 5.64336 21 4.46468 20.2678 3.73234C19.5355 3 18.357 3 16 3H13C10.643 3 9.46447 3 8.73223 3.73234C8 4.46468 8 5.64336 8 8.00072V16.0019C8 18.3592 8 19.5379 8.73223 20.2703C9.35264 20.8908 10.2934 20.9855 12 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 7H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 11H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14 19C14 19 15.5 19.5 16.5 21C16.5 21 18 17 22 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2 7H5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
              <span className="ml-3 text-black">Assignments</span>
            </Link>
          </li>

          <li>
            <Link href="/admin/register" className="flex items-center p-3 text-lg font-medium rounded-lg dark:hover:bg-gray-100 hover:w-52 group">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                <path d="M5.18007 15.2964C3.92249 16.0335 0.625213 17.5386 2.63348 19.422C3.6145 20.342 4.7071 21 6.08077 21H13.9192C15.2929 21 16.3855 20.342 17.3665 19.422C19.3748 17.5386 16.0775 16.0335 14.8199 15.2964C11.8709 13.5679 8.12906 13.5679 5.18007 15.2964Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14 7C14 9.20914 12.2091 11 10 11C7.79086 11 6 9.20914 6 7C6 4.79086 7.79086 3 10 3C12.2091 3 14 4.79086 14 7Z" stroke="currentColor" stroke-width="1.5" />
                <path d="M19.5 4V9M22 6.5L17 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
              <span className="ml-3 text-black">Register</span>
            </Link>
          </li>
          
          <li>
            <Link href="/admin/schedule" className="flex items-center p-3 text-lg font-medium rounded-lg dark:hover:bg-gray-100 hover:w-52 group">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
                <path d="M6.25 2V5.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M17.75 2V5.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M3.5 9H20.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M21 9.5V17.8C21 19.9201 21 20.9801 20.394 21.732C19.8692 22.4011 19.0366 22.7827 18.15 22.8576C17.1346 22.943 16.0355 22.5 13.8373 21.6146L12.8056 21.1979C12.3037 20.9935 12.0527 20.8913 11.7944 20.8562C11.5665 20.825 11.3342 20.825 11.1062 20.8562C10.8479 20.8913 10.5969 20.9935 10.095 21.1979L9.06325 21.6146C6.86502 22.5 5.76591 22.943 4.75049 22.8576C3.86391 22.7827 3.03131 22.4011 2.50646 21.732C1.90046 20.9801 1.90046 19.9201 1.90046 17.8V9.5C1.90046 7.38087 1.90046 6.3213 2.50646 5.56935C3.03131 4.90026 3.86391 4.51871 4.75049 4.44384C5.76591 4.35851 6.86502 4.80146 9.06325 5.68685L10.095 6.10351C10.5969 6.30799 10.8479 6.41023 11.1062 6.44535C11.3342 6.47648 11.5665 6.47648 11.7944 6.44535C12.0527 6.41023 12.3037 6.30799 12.8056 6.10351L13.8373 5.68685C16.0355 4.80146 17.1346 4.35851 18.15 4.44384C19.0366 4.51871 19.8692 4.90026 20.394 5.56935C21 6.3213 21 7.38087 21 9.5Z" stroke="currentColor" stroke-width="1.5" />
                <path d="M16 13.25H15.25V14C15.25 14.6904 14.6904 15.25 14 15.25H10C9.30964 15.25 8.75 14.6904 8.75 14V13.25H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span className="ml-3 text-black">Schedule</span>
            </Link>
          </li>

          <li>
            <Link href="/admin/report" className="flex items-center p-3 text-lg font-medium rounded-lg dark:hover:bg-gray-100 hover:w-52 group">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
                <path d="M12 15H8.75C8.05964 15 7.5 14.4404 7.5 13.75V6.25C7.5 5.55964 8.05964 5 8.75 5H15.25C15.9404 5 16.5 5.55964 16.5 6.25V9.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M16.5 15V18.25C16.5 18.9404 15.9404 19.5 15.25 19.5H8.75C8.05964 19.5 7.5 18.9404 7.5 18.25V15" stroke="currentColor" stroke-width="1.5" />
                <path d="M16.5 9.25H15.5C14.8096 9.25 14.25 9.80964 14.25 10.5V11.25C14.25 11.9404 14.8096 12.5 15.5 12.5H16.5V15M16.5 9.25V12.5M16.5 12.5H17.5C18.1904 12.5 18.75 11.9404 18.75 11.25V10.5C18.75 9.80964 18.1904 9.25 17.5 9.25H16.5M12 8H11M12 11H11M12 14H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span className="ml-3 text-black">Report</span>
            </Link>
          </li>

          <li>
            <Link href="/" className="flex items-center p-3 text-lg font-medium rounded-lg dark:hover:bg-gray-100 hover:w-52 group">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
                <path d="M15 16L19 12M19 12L15 8M19 12H9M11 15.75V17.25C11 18.3546 11 18.907 10.782 19.338C10.5903 19.7092 10.2921 20.0073 9.92096 20.199C9.49004 20.416 8.93769 20.416 7.83313 20.416H6.66667C5.56211 20.416 5.00984 20.416 4.57892 20.199C4.20773 20.0073 3.90963 19.7092 3.71785 19.338C3.5 18.907 3.5 18.3546 3.5 17.25V6.75C3.5 5.64543 3.5 5.09315 3.71785 4.66223C3.90963 4.29099 4.20773 3.9929 4.57892 3.80113C5.00984 3.58328 5.56211 3.58328 6.66667 3.58328H7.83333C8.93789 3.58328 9.49016 3.58328 9.92108 3.80113C10.2923 3.9929 10.5904 4.29099 10.7821 4.66223C11 5.09315 11 5.64543 11 6.75V8.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span className="ml-3 text-black">Logout</span>
            </Link>
          </li>

        </ul>

      </div>
    </nav>
  );
}
 