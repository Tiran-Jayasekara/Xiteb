import React, { useEffect, useState } from 'react'
import {
    Navbar,
    Typography,
    IconButton,
    Collapse,
} from "@material-tailwind/react";


const NavBar = () => {
    const [openNav, setOpenNav] = useState(false);


    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);


    // Navigation Bar
    const navList = (
        <ul className="mt-2 md:mb-2 flex flex-col md:gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-2 ">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 md:p-1"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-6 font-semibold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>

                <a href="https://google.com" className="flex items-center text-center justify-center font-semibold font-montserrat">
                    Sign In
                </a>
            </Typography>|
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 md:p-1 font-medium"
            >
                <a href="https://google.com" className="flex items-center font-semibold font-montserrat font-sans">
                    Join Now
                </a>
            </Typography>|
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 md:p-1 font-medium"
            >
                <a href="https://google.com" className="flex items-center font-semibold font-montserrat font-sans">
                    Find Reservations
                </a>
            </Typography>|
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 md:p-1 font-medium"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>

                <a href="https://google.com" className="flex items-center font-semibold font-montserrat font-sans">
                    English
                </a>
            </Typography>|
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 md:p-1 font-medium"
            >
                <a href="https://google.com" className="flex items-center font-semibold font-montserrat font-sans">
                    LKR
                </a>
            </Typography>|
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 md:p-1 font-medium"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>

            </Typography>
        </ul>
    );


    return (

        <Navbar className="md:max-w-full w-auto py-2 lg:px-4 lg:py-2 px-2 xl:mx-32 lg:mx-20">
            <div className=" mx-auto lg:mx-14 flex items-center justify-between text-blue-gray-900">
                <div className='flex flex-row'>
                    <img className='w-auto h-8 items-center justify-center mt-1 mr-1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSW42wKu4cAJZvHaKv-ooQiZPlMrTHGGbldribKlJFGQ&s' alt='icon' />
                    <Typography
                        as="a"
                        href="www.google.com"
                        className="mr-4 cursor-pointer py-1.5  text-xl font-montserrat font-sans"
                    >
                        <p className='font-montserrat font-sans'>SHANGRI-LA</p>

                    </Typography>
                </div>

                <div className="hidden lg:block">{navList}</div>


                {/* Nav Bar Open Icon in Mobile Response */}
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 cursor-pointer"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            onClick={() => { }}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>


            {/* Mobile Response Nav List */}
            <Collapse open={openNav}>
                <div className="container mx-auto">
                    {navList}
                </div>
            </Collapse>
        </Navbar>
    );
}

export default NavBar