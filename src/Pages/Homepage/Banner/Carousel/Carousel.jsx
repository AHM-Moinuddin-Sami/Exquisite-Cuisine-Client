import React, { useState, useEffect } from "react";

const images = [
    "https://images.unsplash.com/photo-1576863514292-542ef379c13b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    "https://images.unsplash.com/photo-1611762687807-7cdd09aef422?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    "https://images.unsplash.com/photo-1577579115450-f0cf6cfd33ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1618889482923-38250401a84e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
]

// const images = [Image1, Image2, Image3];

function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveIndex((activeIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [activeIndex]);

    return (
        <div className="relative w-full h-screen">
            {images.map((image, index) => (
                <img
                    key={index}
                    className={`absolute bg-gradient-to-b from-black to-gray-600  top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === activeIndex ? "opacity-100" : "opacity-0"
                        }`}
                    src={image}
                    alt={`Image ${index}`}
                />
            ))}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-transparent to-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white text-4xl font-bold">Welcome to Exquisite Cuisine!</h1>
            </div>
        </div>
    );
}

export default Carousel;
