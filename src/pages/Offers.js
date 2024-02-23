import React from 'react'

const Offers = () => {
    return (
        <>
            <div className='w-full'>
                <h2 className='text-center md:mt-40 mt-20 md:text-4xl text-2xl text-gray-800'>Offers</h2>
            </div>

            {/* Cards Row */}
            <div className='flex flex-row md:mx-32 mx-4 mt-10 mb-20'>

                {/* First Card */}
                <div className='flex flex-col md:mr-10 mr-4 shadow-md hover:shadow-xl' style={{ fontFamily: 'Montserrat, Verdana, Helvetica, Arial, sans-serif' }}>
                    <div className='relative'>
                        <img className='w-full h-20 md:h-auto' src='/assests/offers/offers1.webp' alt='offers1' />
                        <div className="absolute inset-0 md:flex hidden items-center justify-center bg-opacity-50 text-black ">
                            <p className='bg-gray-200 rounded-s-full p-2 md:-mt-[120px] xl:-mt-[390px]  lg:ml-[200px] xl:ml-[216px] text-sm px-6' style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>Member Exclusive</p>
                        </div>
                        <p className='md:text-xs text-[8px] text-center mt-2 font-medium text-gray-800'>Rooms & Suites</p>
                        <h2 className='md:text-[14px] text-[10px] text-center  text-black font-medium md:mx-4 mx-2 mt-6'>Shangri–La Circle Exclusive Member Rate with Breakfast</h2>
                        <p className='md:text-xs text-[8px] text-center mt-2 mx-4 text-gray-600'>Exclusive Member Rate with Breakfast for Shangri-La Circle member.</p>

                        <p className='text-center md:text-sm text-[6px]  md:mt-12 mt-6 md:mx-6 mx-4  text-black'>From <b>LKR 55,978.20 </b>Average Per Night</p>
                        <button className='p-1 md:px-4 px-2 md:text-sm text-[8px] mt-4 md:mb-6 mb-2 border font-medium text-brown-700 mx-auto block' style={{ color: '#876a20', borderColor: '#876a20' }}>View Details</button>
                    </div>
                </div>


                {/* Secound Card */}
                <div className='flex flex-col md:mr-10 mr-4 shadow-md hover:shadow-xl' style={{ fontFamily: 'Montserrat, Verdana, Helvetica, Arial, sans-serif' }}>
                    <div className='relative'>
                        <img className='w-full h-20 md:h-auto' src='/assests/offers/offers2.webp' alt='offers2' />
                        <div className="absolute inset-0 md:flex hidden items-center justify-center bg-opacity-50 text-black ">
                            <p className='bg-gray-200 rounded-s-full p-2 md:-mt-[120px] xl:-mt-[390px]  lg:ml-[200px] xl:ml-[216px] text-sm px-6' style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>Member Exclusive</p>
                        </div>
                        <p className='md:text-xs text-[8px] text-center mt-2 font-medium text-gray-800'>Rooms & Suites</p>
                        <h2 className='md:text-[14px] text-[10px] text-center  text-black font-medium md:mx-4 mx-2 mt-6'>Shangri–La Circle Exclusive Member Rate with Breakfast</h2>
                        <p className='md:text-xs text-[8px] text-center mt-2 mx-4 text-gray-600'>Exclusive Member Rate with Breakfast for Shangri-La Circle member.</p>

                        <p className='text-center md:text-sm text-[6px]  md:mt-12 mt-6 md:mx-6 mx-4  text-black'>From <b>LKR 55,978.20 </b>Average Per Night</p>
                        <button className='p-1 md:px-4 px-2 md:text-sm text-[8px] mt-4 md:mb-6 mb-2 border font-medium text-brown-700 mx-auto block' style={{ color: '#876a20', borderColor: '#876a20' }}>View Details</button>
                    </div>
                </div>


                {/* Third card */}
                <div className='flex flex-col mr-0 shadow-md hover:shadow-xl' style={{ fontFamily: 'Montserrat, Verdana, Helvetica, Arial, sans-serif' }}>
                    <div className='relative'>
                        <img className='w-full h-20 md:h-auto' src='/assests/offers/offers3.webp' alt='offers3' />

                        <p className='md:text-xs text-[8px] text-center mt-2 font-medium text-gray-800'>Dining</p>
                        <p className='md:text-xs text-[8px] text-center mt-2 font-medium text-gray-800'>03 Jan 2024 - 31 Dec 2024</p>
                        <h2 className='md:text-[14px] text-[10px] text-center  text-black font-medium md:mx-4 mx-2 mt-6'>Weekend Brunch at Central</h2>
                        <p className='md:text-xs text-[8px] text-center mt-2 mx-4 text-gray-600'>Exclusive Member Rate with Breakfast for Shangri-La Circle member.</p>
                        <button className='p-1 md:px-4 px-2 md:text-sm text-[8px] md:mt-24 mt-16 md:mb-6 mb-2 border font-medium text-brown-700 mx-auto block' style={{ color: '#876a20', borderColor: '#876a20' }}>View Details</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Offers