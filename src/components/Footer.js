import React from 'react'
import Checkbox from '@mui/material/Checkbox';

const Footer = () => {

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <div className=' mx-4'>

            {/* Top two images and scrollup Button */}
            <div className='relative flex mt-40'>
                <img className='w-full' src='/assests/Footer/footer1.webp' alt='' />
                <div className='absolute inset-0 md:-mt-72 -mt-20 flex items-center bg-opacity-50 text-black w-full'>
                    <img className='absolute inset-0 w-full' style={{ zIndex: '1' }} src='/assests/Footer/foter2.png' alt='' />
                </div>
                <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }} className='cursor-pointer absolute top-0 right-0 md:mr-4 mr-4 mt-4 bg-blue-800 md:w-16 md:h-16 w-10 h-10 rounded-full flex items-center justify-center z-10'>
                    <h2 className='md:text-xs text-[8px] text-white'>Scroll Up</h2>
                </button>
            </div>


            <div className='relative  flex w-full mt-32'>
                <div className='absolute inset-0 -mt-60 flex items-center bg-opacity-50 text-black w-full'>
                    <img className='absolute inset-0 items-end mt-[450px] w-full' style={{ zIndex: '1' }} src='/assests/Footer/footer3.webp' alt='' />

                    <div className='flex  flex-row md:mx-40 mx-4 font-sans text-xs z-10 md:mt-40 mt-10'>

                        {/* First Information Row */}
                        <div className='flex absolute flex-col w-3/12'>
                            <h2 className='font-bodoni-italic italic md:text-2xl text-sm mt-0 text-customPurple text-left'>Corporate information</h2>
                            <p className='md:text-xs text-[8px] text-gray-500 md:mt-4'>Cinnamon Hotels & Resorts</p>
                            <p className='md:text-xs text-[8px] text-gray-500 md:mt-4'>John Keells Group</p>
                            <h2 className='font-bodoni-italic italic md:text-2xl text-sm text-customPurple text-left md:mt-14 mt-6'>Blogs</h2>
                            <p className='md:text-xs text-[8px] text-gray-500 md:mt-4'>Cinnamon Ublog</p>
                            <h2 className='font-bodoni-italic italic md:text-2xl text-sm text-customPurple text-left md:mt-14 mt-6'>Careers</h2>
                            <p className='md:text-xs text-[8px] text-gray-500 md:mt-4'>Careers</p>
                            <h2 className='font-bodoni-italic italic md:text-2xl text-sm text-customPurple text-left md:mt-14 mt-6'>Get Cinnamon in your inbox</h2>

                            <form className="md:max-w-sm w-60 ">
                                <div className="relative mt-4">
                                    <input
                                        type="text"
                                        id="phone-input"
                                        aria-describedby="helper-text-explanation"
                                        className="bg-gray-50 rounded-none border md:p-4 p-2 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full md:ps-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-8"
                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                        placeholder="Email Address"
                                        required
                                    />
                                    <svg className="absolute left-[220px] top-[11px] md:left-[220px] md:top-4 w-4 h-4 text-gray-600 dark:text-gray-600 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                </div>
                                <div className='flex flex-row items-start justify-start'>
                                    <Checkbox {...label} defaultChecked className='' />
                                    <p id="helper-text-explanation" className="mt-2 md:text-sm text-[10px] text-gray-500 dark:text-gray-400"> By Checking this box, I consent to the processing of my Personal Data by Cinnamon for the purpose and within the Conditions set out in this form and the </p>
                                </div>
                            </form>
                        </div>


                        {/* Secound Information Row */}
                        <div className='flex absolute flex-col ml-4 w-3/12' style={{ left: '33%' }}>
                            <h2 className='font-bodoni-italic italic md:text-2xl text-sm text-customPurple text-left '>News and Awards</h2>
                            <p className='md:text-xs text-[8px] text-gray-500 md:mt-4'>News</p>
                            <p className='md:text-xs text-[8px] text-gray-500 md:mt-4'>Awards</p>

                            <h2 className='font-bodoni-italic italic md:text-2xl text-sm text-customPurple text-left md:mt-14 mt-6'>Corporate Governance</h2>
                            <p className='md:text-xs text-[8px] text-gray-500 md:mt-4'>CSR</p>
                        </div>


                        {/* Third Information Row */}
                        <div className='flex absolute flex-col ml-8 w-4/12' style={{ left: '55%' }}>
                            <h2 className='font-bodoni-italic italic md:text-2xl text-sm text-customPurple text-left '>Data Privacy & Security Policy</h2>
                            <p className='md:text-xs text-[8px] text-gray-500 md:mt-4'>Terms & Conditions</p>
                            <p className='md:text-xs text-[8px] text-gray-500 md:mt-4'>Privacy Statement</p>
                            <h2 className='font-bodoni-italic italic md:text-2xl text-sm text-customPurple text-left md:mt-14 mt-6'>Get In Touch</h2>
                            <p className='md:text-xs text-[8px] text-gray-500 md:mt-4'>info@cinnamonhotels.com</p>
                            <p className='md:text-xs text-[8px] text-gray-500 md:mt-4'>Hotel Contact Information</p>
                            <h2 className='font-bodoni-italic italic md:text-2xl text-sm text-customPurple text-left md:mt-14 mt-6'>Follow Us</h2>
                            <div className='mt-2'>
                                <div className="flex justify-start text-gray-500">
                                    <a href="http://www.google.com" aria-label="Read more about Seminole tax hike" className="md:mr-6 mr-2 text-neutral-600 dark:text-neutral-200">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                        </svg>
                                    </a>
                                    <a href="http://www.google.com" aria-label="Read more about Seminole tax hike" className="md:mr-6 mr-2 text-neutral-600 dark:text-neutral-200">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                        </svg>
                                    </a>
                                    <a href="http://www.google.com" aria-label="Read more about Seminole tax hike" className="md:mr-6 mr-2 text-neutral-600 dark:text-neutral-200">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                                                fillRule="evenodd"
                                                clipRule="evenodd" />
                                        </svg>
                                    </a>
                                    <a href="http://www.google.com" aria-label="Read more about Seminole tax hike" className="md:mr-6 mr-2 text-neutral-600 dark:text-neutral-200">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer