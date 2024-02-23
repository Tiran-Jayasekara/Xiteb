
import React, { useState } from "react";
import { Select, Option } from "@material-tailwind/react";

const Destinations = () => {

    // Destination Deta Set
    const DestinationsData = [
        {
            topic: "Cinnamon Bentota Beach",
            img: "/assests/hotel1.webp",
            description: "Choose Cinnamon Bentota Beach for an opulent stay on Sri Lanka's gold coast. Nestled in the groves of coconut trees is a tastefully designed piece of architecture, an ultimate destination for art and culture enthusiasts!"
        },
        {
            topic: "Hikka Tranz by Cinnamon",
            img: "/assests/hotel2.webp",
            description: "Live around the endless ocean, and feel the rising sun pump adrenaline into every nerve of yours. Let the setting sun cover you with a sense of calmness as it disappears."
        },
        {
            topic: "Cinnamon Life",
            img: "/assests/hotel3.webp",
            description: "Take a peak at the first-ever Integrated Resort in Sri Lanka. Envisoned to be the epicentre of modern South Asia, it is an urban sanctuary which includes a 5-Star hotel, residential units, office spaces and a wide range of shopping and entertainment options."
        }
        , {
            topic: "Cinnamon Grand Colombo",
            img: "/assests/hotel1.webp",
            description: "Our 5-star hotel in the heart of Colombo offers timeless elegance and grandeur. The perfect place to relish global cuisines after a business conference or a memorable rendezvous!"
        },
        {
            topic: "Cinnamon Red Colombo",
            img: "/assests/hotel2.webp",
            description: "South Asia's first ever lean luxury hotel situated right at the heart of Colombo. The vibrant rooftop bar and serene infinity pool overlooking the Colombo Skyline provides every sense of relaxation and rejuvenation for the adventurous traveller!"
        }
    ]

    const [value, setValue] = useState(DestinationsData[0]);

    return (
        <div className='flrx flec-col relative w-full h-auto md:pb-40 pb-32 md:mt-40 mt-20'>
            <h3 className='font-bodoni-italic italic md:text-4xl text-2xl mx-auto text-center md:mt-20 mt-10 text-customPurple '>Our Destinations</h3>


            {/* Destination Select */}
            <div className="md:w-3/6 w-4/6 rounded-none mx-auto mt-4">
                <Select
                    label="Select Destinations"
                    value={value.topic}
                    onChange={() => { }}
                >
                    {DestinationsData.map((destination, index) => (
                        <Option key={index} onClick={() => { setValue(destination) }} value={`${index + 1}`}>
                            {destination.topic}
                        </Option>
                    ))}
                </Select>
            </div>


            {/* Destination Details */}
            <div>
                <img className="md:mt-10 mt-8 md:w-3/5 w-full mx-auto h-[500px]" src={value.img} alt={value.topic} />
            </div>
            <div className="shadow-top shadow-right shadow-bottom shadow-2xl md:w-96 w-60 absolute justify-between md:left-1/2 left-36 md:translate-x-1/2 top-1/2 md:ml-20 ml-0 bg-white md:-mt-60 -mt-20" >
                <h2 className="font-bodoni-italic italic md:text-4xl text-xl md:m-8 m-4 mt-0 text-customPurple md:pt-20 pt-10">{value.topic}</h2>
                <p className="md:m-8 m-4 text-sm">{value.description}</p>
                <div>
                    <button className="bg-blue-900 md:p-4 p-2 text-white md:m-8 m-4" onClick={() => { }}>Discover More</button>
                </div>
            </div>
        </div>
    )
}

export default Destinations