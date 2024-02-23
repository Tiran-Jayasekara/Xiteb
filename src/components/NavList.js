import React, { useState } from 'react';
import { Typography, List, ListItem, Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Bars4Icon, SquaresPlusIcon, SunIcon, TagIcon, UserGroupIcon, MapIcon, ServerIcon } from "@heroicons/react/24/solid";

function NavListMenu() {
    const [dropdownIndex, setDropdownIndex] = useState(null);

    // Different sets of menu items for each dropdown
    const navListMenuItems = [
        [
            { title: "Overview", description: "Description 1", icon: UserGroupIcon },
            { title: "Explore Colombo", description: "Description 2", icon: UserGroupIcon },
            { title: "Services & Facilities", description: "Description 3", icon: ServerIcon },
            { title: "Map and Directions", description: "Description 3", icon: MapIcon }
        ],
        [
            { title: "Rooms", description: "Description 1", icon: SquaresPlusIcon },
            { title: "Horizon Club", description: "Description 2", icon: SquaresPlusIcon },
            { title: "Suites", description: "Description 3", icon: SquaresPlusIcon },
            { title: "Connecting Rooms", description: "Description 3", icon: SquaresPlusIcon }
        ],
        [
            { title: "Resturents", description: "Description 1", icon: Bars4Icon },
            { title: "Bars", description: "Description 2", icon: Bars4Icon },
            { title: "Pub", description: "Description 3", icon: Bars4Icon }
        ],
        [
            { title: "For Kids", description: "Description 1", icon: SunIcon },
            { title: "Heath & Leisure", description: "Description 2", icon: SunIcon },

        ],
        [
            { title: "Meeting & Events", description: "Description 1", icon: TagIcon },
            { title: "Wedding & Celebrations", description: "Description 2", icon: TagIcon },

        ],
        [
            { title: "Apartments", description: "Description 1", icon: TagIcon },

        ]
    ];

    // Custom titles for specific dropdowns
    const dropdownTitles = [
        "ABOUT",
        "ROOMS & SUITES",
        "DINING",
        "EXPERIENCE",
        "EVENTS",
        "MORE"
    ];

    return (
        <>
            {navListMenuItems.map((items, index) => (
                <div
                    key={index}

                >
                    <Menu
                        open={dropdownIndex === index}
                        offset={{ mainAxis: 20 }}
                        placement="bottom"

                    >
                        <MenuHandler>
                            <div role="button" aria-haspopup="true" aria-expanded={dropdownIndex === index ? 'true' : 'false'}>
                                <Typography as="div" variant="small" className="font-medium text-[5px] md:text-sm font-montserrat flex items-center">
                                    <ListItem
                                        className="flex items-center gap-1 md:gap-2 py-2 pr-0 font-montserrat text-white hover:bg-white font-bold"
                                        onMouseOver={() => {
                                            setDropdownIndex(index);
                                            console.log(index);
                                        }}
                                        onClick={() => {
                                            setDropdownIndex(dropdownIndex === index ? null : index);
                                            console.log(index);
                                        }}
                                    >
                                        {dropdownTitles[index]}
                                        <ChevronDownIcon
                                            strokeWidth={2.5}
                                            className={`hidden h-3 w-3 transition-transform lg:block ${dropdownIndex === index ? "rotate-180" : ""}`}
                                        />
                                    </ListItem>
                                </Typography>
                            </div>
                        </MenuHandler>


                        <MenuList className="max-w-screen-xl rounded-xl block" onMouseLeave={() => setDropdownIndex(null)}>
                            <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0 font-montserrat">
                                {items.map(({ icon: Icon, title, description }, key) => (
                                    <div key={key} onClick={() => console.log(title)}>
                                        <MenuItem className="flex items-center md:gap-3 gap-1 rounded-lg" >
                                            <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                                                <Icon strokeWidth={2} className="md:h-6 h-4 text-gray-900 w-6" />
                                            </div>
                                            <div>
                                                <Typography variant="h6" color="blue-gray" className="flex items-center md:text-sm text-[6px] font-bold">{title}</Typography>
                                                <Typography variant="paragraph" className="md:text-xs text-[4px] !font-medium text-blue-gray-500">{description}</Typography>
                                            </div>
                                        </MenuItem>
                                    </div>
                                ))}
                            </ul>
                        </MenuList>
                    </Menu>
                </div>
            ))}
        </>
    );
}



const NavList = () => {
    return (
        <div className='flex flex-row justify-between md:h-10 h-4'>
            <List className="mb-0 lg:mt-0 lg:mb-0 flex-row p-1 items-center">
                <NavListMenu />
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium text-[5px] md:text-sm">
                    <ListItem className="flex items-center  gap-2 py-2 md:pr-4 pr-0 text-white font-montserrat font-bold">GALLERY</ListItem>
                </Typography>
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium text-[5px] md:text-sm">
                    <ListItem className="flex items-center gap-2 py-2 md:pr-4 pr-0 font-montserrat text-white font-bold">OFFERS</ListItem>
                </Typography>
            </List>
            <div className="border border-white md:p-2 p-1 md:ml-20 ml-4
              font-bold box-border ">
                <p className='cursor-pointer text-[4px] md:text-sm' onClick={() => { }} >FIND A HOTEL</p>
            </div>
        </div>

    );
}

export default NavList;
