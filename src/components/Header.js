import { useEffect, useState } from "react";
import NavList from './NavList';
import {
  Navbar,
} from "@material-tailwind/react";

const Header = () => {

  const images = [
    '/assests/hotel1.webp',
    '/assests/hotel2.webp',
    '/assests/hotel3.webp'
  ];

  const text = [
    'Shangri-La Colombo',
    'Rooms & Sites',
    'Shang Place'
  ];

  const para = [
    'A personal tropical sanctuary set within the heart of the city',
    'A personal tropical sanctuary set within the heart of the city',
    'A personal tropical sanctuary set within the heart of the city',
  ]

  const [currentIndex, setCurrentIndex] = useState(0);


  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(currentIndex => (currentIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Clean up the interval on unmount
    // eslint-disable-next-line
  }, []);



  return (
    <>
      {/* Navigation List */}
      <Navbar className="max-w-full px-0 py-2 bg-black rounded-none">
        <div className="flex items-center justify-center text-white">
          <div className="block">
            <NavList />
          </div>
        </div>
      </Navbar>


      {/* Image Slider Part */}
      <div className="text-bold md:h-[550px] h-80 relative overflow-hidden">
        <div className="w-full h-full flex" style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 1s ease' }}>
          {images.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              <img
                src={image}
                alt={`img${index + 1}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> {/* Semi-transparent overlay */}
              <div className="absolute top-0 left-0 w-full h-full flex font justify-center items-center playfair-font text-white md:text-4xl text-xl ">
                {text[index]}
              </div>
              <div className="absolute top-10 left-0 w-full h-full flex font justify-center items-center playfair-font text-white md:text-xl text-xs ">
                {para[index]}
              </div>
            </div>
          ))}
        </div>

        {/* Image Slide buttons */}
        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center md:w-10 md:h-10 w-6 h-6 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="md:w-4 md:h-4 w-2 h-2 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span className="inline-flex items-center justify-center md:w-10 md:h-10 w-6 h-6 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="md:w-4 md:h-4 w-2 h-2 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>

        {/* Date / Room / Special code Selection */}
        <div className="w-full justify-between">
          <div className="absolute justify-between mt-40 top-80 left-1/2 -translate-x-1/2 font items-center playfair-font bg-gray-400 h-auto flex flex-row">
            <div className="w-auto p-2">
              <div className="relative w-full md:min-w-[200px] h-10">
                <label htmlFor="date"></label>
                <input
                  id="date"
                  className="peer rounded-none pr-8 md:w-72 w-1/4 h-full bg-white text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-100 disabled:bg-blue-white disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 border-white focus:border-gray-900"
                  value="Feb 22, 2024 Feb 23, 2024"
                  placeholder=""
                  onChange={() => { }}

                />
                <svg
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-800 pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                  />
                </svg>
              </div>
            </div>

            <div className="w-auto p-2">
              <div className="relative w-full min-w-[200px] h-10">
                <label htmlFor="room"></label>
                <input
                  id="room"
                  className="peer rounded-none pr-8 md:w-72 w-1/4 h-full bg-white text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-100 disabled:bg-blue-white disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 border-white focus:border-gray-900"
                  value="1 Room, 1 Adult, 0 Children"
                  onChange={() => { }}
                  placeholder=" " />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-800 pointer-events-none">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>

              </div>
            </div>

            <div className="w-auto p-2">
              <div className="relative w-full min-w-[200px] h-10">
                <input
                  className="peer rounded-none md:w-72  h-full bg-white text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-100 disabled:bg-blue-white disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 border-white focus:border-gray-900"
                  placeholder="Special Code"
                  value="Special Code"
                  onChange={() => { }}
                />

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-800 pointer-events-none">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                </svg>

              </div>
            </div>

            <div className="w-auto p-2">
              <div className="relative w-full h-10">
                <button className="bg-yellow-900 p-2 px-4 text-white">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
