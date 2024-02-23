import React, { useState } from 'react'

const Experience = () => {
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    const [isHovered5, setIsHovered5] = useState(false);
    const [isHovered6, setIsHovered6] = useState(false);


    return (
        <>
            {/* header and Descroption */}
            <div>
                <h2 className="text-header font-sans md:text-3xl text-xl text-blue-900 md:ml-32 ml-4 font-extrabold backdrop-blur backdrop-opacity-75" data-testid="textBlockHeader">Save more, do more</h2>
                <p className='md:ml-32 mx-4 m-4 font-sans md:text-xl text-xs '>Choose from our exclusive offers, and get more from your next stay.</p>
            </div>



            {/* Image grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:mx-32 mx-4">

                {/* first image */}
                <div className="relative" onMouseEnter={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)}>
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                    <img
                        className="h-auto max-w-full rounded-none"
                        src="/assests/hotel4.webp"
                        alt=""
                    />
                    <div className="hidden  absolute inset-0 md:flex items-center justify-center bg-opacity-50 text-white p-4">
                        <h3 className="text-xl font-sans text-center uppercase font-semibold" style={{ transform: isHovered1 ? 'translateY(0)' : 'translateY(100px)', transition: 'transform 0.3s ease' }}>Advance Purchase Discount – save up to 17%</h3>
                    </div>
                    <div className="absolute md:hidden inset-0 flex items-center justify-center bg-opacity-50 text-white md:p-4 p-2">
                        <h3 className="text-[8px] font-sans text-center uppercase font-semibold" style={{ transform: isHovered1 ? 'translateY(0)' : 'translateY(40px)', transition: 'transform 0.3s ease' }}>Advance Purchase Discount – save up to 17%</h3>
                    </div>
                </div>

                {/* secound Image */}
                <div className="relative" onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)}>
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                    <img
                        className="h-auto max-w-full rounded-none"
                        src="/assests/hotel5.webp"
                        alt=""
                    />
                    <div className="absolute inset-0 md:flex hidden items-center justify-center bg-opacity-50 text-white p-4">
                        <h3 className="text-xl font-sans text-center uppercase font-semibold" style={{ transform: isHovered2 ? 'translateY(0)' : 'translateY(100px)', transition: 'transform 0.3s ease' }}>Multiply Your Points</h3>
                    </div>
                    <div className="absolute md:hidden inset-0 flex items-center justify-center bg-opacity-50 text-white md:p-4 p-2">
                        <h3 className="text-[8px] font-sans text-center uppercase font-semibold" style={{ transform: isHovered2 ? 'translateY(0)' : 'translateY(40px)', transition: 'transform 0.3s ease' }}>Multiply Your Points</h3>
                    </div>
                </div>


                {/* Third Image */}
                <div className="relative" onMouseEnter={() => setIsHovered3(true)} onMouseLeave={() => setIsHovered3(false)}>
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                    <img
                        className="h-auto max-w-full rounded-none"
                        src="/assests/hotel6.webp"
                        alt=""
                    />
                    <div className="absolute inset-0 md:flex hidden items-center justify-center bg-opacity-50 text-white p-4">
                        <h3 className="text-xl font-sans text-center uppercase font-semibold" style={{ transform: isHovered3 ? 'translateY(0)' : 'translateY(100px)', transition: 'transform 0.3s ease' }}>Free Bonus Points at new hotels</h3>
                    </div>
                    <div className="absolute md:hidden inset-0 flex items-center justify-center bg-opacity-50 text-white md:p-4 p-2">
                        <h3 className="text-[8px] font-sans text-center uppercase font-semibold" style={{ transform: isHovered3 ? 'translateY(0)' : 'translateY(40px)', transition: 'transform 0.3s ease' }}>Free Bonus Points at new hotels</h3>
                    </div>
                </div>


                {/* Fourth Image */}
                <div className="relative" onMouseEnter={() => setIsHovered4(true)} onMouseLeave={() => setIsHovered4(false)}>
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                    <img
                        className="h-auto max-w-full rounded-none"
                        src="/assests/hotel7.webp"
                        alt=""
                    />
                    <div className="absolute inset-0 md:flex hidden items-center justify-center bg-opacity-50 text-white p-4">
                        <h3 className="text-xl font-sans text-center uppercase font-semibold" style={{ transform: isHovered4 ? 'translateY(0)' : 'translateY(100px)', transition: 'transform 0.3s ease' }}>Park & Stay</h3>
                    </div>
                    <div className="absolute md:hidden inset-0 flex items-center justify-center bg-opacity-50 text-white md:p-4 p-2">
                        <h3 className="text-[8px] font-sans text-center uppercase font-semibold" style={{ transform: isHovered4 ? 'translateY(0)' : 'translateY(40px)', transition: 'transform 0.3s ease' }}>Park & Stay</h3>
                    </div>
                </div>



                {/* Fifth Image */}
                <div className="relative" onMouseEnter={() => setIsHovered5(true)} onMouseLeave={() => setIsHovered5(false)}>
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                    <img
                        className="h-auto max-w-full rounded-none"
                        src="/assests/hotel8.webp"
                        alt=""
                    />
                    <div className="absolute inset-0 md:flex hidden items-center justify-center bg-opacity-50 text-white p-4">
                        <h3 className="text-xl font-sans text-center uppercase font-semibold" style={{ transform: isHovered5 ? 'translateY(0)' : 'translateY(100px)', transition: 'transform 0.3s ease' }}>Experience the Stay</h3>
                    </div>
                    <div className="absolute md:hidden inset-0 flex items-center justify-center bg-opacity-50 text-white md:p-4 p-2">
                        <h3 className="text-[8px] font-sans text-center uppercase font-semibold" style={{ transform: isHovered5 ? 'translateY(0)' : 'translateY(40px)', transition: 'transform 0.3s ease' }}>Experience the Stay</h3>
                    </div>
                </div>


                {/* Sixth Image */}
                <div className="relative" onMouseEnter={() => setIsHovered6(true)} onMouseLeave={() => setIsHovered6(false)}>
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                    <img
                        className="h-auto max-w-full rounded-none"
                        src="/assests/hotel9.webp"
                        alt=""
                    />
                    <div className="absolute inset-0 md:flex hidden items-center justify-center bg-opacity-50 text-white p-4">
                        <h3 className="text-xl font-sans text-center uppercase font-semibold" style={{ transform: isHovered6 ? 'translateY(0)' : 'translateY(100px)', transition: 'transform 0.3s ease' }}>Breakfast Included Package</h3>
                    </div>
                    <div className="absolute md:hidden inset-0 flex items-center justify-center bg-opacity-50 text-white md:p-4 p-2">
                        <h3 className="text-[8px] font-sans text-center uppercase font-semibold" style={{ transform: isHovered6 ? 'translateY(0)' : 'translateY(40px)', transition: 'transform 0.3s ease' }}>Breakfast Included Package</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience