import React, { useState, useEffect } from "react";

const images = [
    "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
    "https://images.unsplash.com/photo-1611762687807-7cdd09aef422?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    "https://images.unsplash.com/photo-1577579115450-f0cf6cfd33ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1618889482923-38250401a84e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
]


function Banner() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveIndex((activeIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [activeIndex]);

    return (
        <div className="relative w-full h-[100vh]">
            {images.map((image, index) => (
                <img
                    key={index}
                    className={`absolute bg-gradient-to-b from-black to-gray-600  top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === activeIndex ? "opacity-100" : "opacity-0"
                        }`}
                    src={image}
                    alt={`Image ${index}`}
                />
            ))}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-70"></div>
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-transparent to-black opacity-70"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">

                <h1 className="text-white text-4xl font-semibold flex flex-col text-center md:flex-row gap-3">Welcome to <span className='font-serif font-normal text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600'>Exquisite Cuisine !</span>
                    <svg  className="w-10 h-10 mx-auto" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 119.66"><path fill="white" d="M34.34,112.6C23.61,109.25,16,104.52,10.48,97.41S1.84,81,0,68.29a1.87,1.87,0,0,1,0-.67A17.45,17.45,0,0,1,4.12,56.35c2-2.45,4.85-4.2,8.68-5.56a11.88,11.88,0,0,1,3.22-7,14.32,14.32,0,0,1,7.92-4.12A28.62,28.62,0,0,1,38.23,32a30.55,30.55,0,0,1,17.29,1.2c.35.14,1.49.71,2.52,1.23a.9.9,0,0,1,.35.28A22.64,22.64,0,0,1,70.08,30a24.51,24.51,0,0,1,8.49.61L92.1,3.52c1.23-2.4,3.2-4.7,7-2.84a6.28,6.28,0,0,1,2.52,2.18c1.74,2.66.28,4.51-1,6.8L85.94,34a16.86,16.86,0,0,1,3,2.68l.11.13A13.43,13.43,0,0,1,92,42.4c1.28.36,2.51.77,3.67,1.21l17-28.36c1.42-2.29,3.56-4.42,7.22-2.27a6.36,6.36,0,0,1,2.34,2.38c1.51,2.79-.08,4.52-1.58,6.69L102.88,47.39a24.55,24.55,0,0,1,4.48,4,17.36,17.36,0,0,1,4.19,15.48,2.36,2.36,0,0,1-.16.47,2.14,2.14,0,0,1,.11.67,2.45,2.45,0,0,1,0,.27,47.22,47.22,0,0,1-10.6,27.93c-5.88,7-14.47,12.88-26.51,16.46h-.06v6.13a.86.86,0,0,1-.86.86H35.52a1.11,1.11,0,0,1-1.11-1.1v-5.93l-.07,0ZM82.18,61.39a2.17,2.17,0,0,1,0-4.34h5.14a2.17,2.17,0,0,1,0,4.34Zm-1.3-15a2.16,2.16,0,1,1-1.76,3.95l-4.69-2.11a2.16,2.16,0,0,1,1.76-3.95l4.69,2.11Zm-26,1.29a2.16,2.16,0,1,1,1.62-4l5.15,2.1a2.16,2.16,0,1,1-1.63,4l-5.14-2.1ZM53,61.39a2.17,2.17,0,0,1,0-4.34h5.14a2.17,2.17,0,0,1,0,4.34ZM35.5,51A2.16,2.16,0,0,1,33.74,47l4.69-2.11a2.16,2.16,0,1,1,1.76,3.94L35.5,51ZM25.42,61.39a2.17,2.17,0,0,1,0-4.34h5.15a2.17,2.17,0,0,1,0,4.34ZM5.15,66H107.32v0a13.16,13.16,0,0,0-3.24-11.72c-3-3.49-7.93-6.34-14.51-8a2.17,2.17,0,0,1-1.64-1.88,8.7,8.7,0,0,0-2.15-4.76l-.1-.1a15.24,15.24,0,0,0-6.44-4.15,20.32,20.32,0,0,0-8.73-1,18.36,18.36,0,0,0-10.26,4.4,2.14,2.14,0,0,1-1.49.59,8.55,8.55,0,0,1-2.68-1.08c-.91-.45-1.91-1-2.12-1a26,26,0,0,0-14.83-1,24.1,24.1,0,0,0-12.56,7,2.11,2.11,0,0,1-1.35.69,10,10,0,0,0-6.07,2.9A7.84,7.84,0,0,0,17,52.23a2.17,2.17,0,0,1-1.51,2.22c-3.76,1.17-6.41,2.61-8.06,4.63A11.57,11.57,0,0,0,5.15,66ZM96.68,76.3a1.52,1.52,0,1,1,2.8,1.16A57.45,57.45,0,0,1,97,82.78a56,56,0,0,1-3,5,1.52,1.52,0,1,1-2.51-1.7,53.33,53.33,0,0,0,2.87-4.74,55.13,55.13,0,0,0,2.39-5ZM88.31,90.23a1.51,1.51,0,1,1,2.31,2c-.89,1.06-1.82,2.07-2.76,3S86,97,85,97.82A1.51,1.51,0,1,1,83,95.48c.91-.75,1.81-1.57,2.69-2.44s1.76-1.84,2.58-2.81ZM13.68,94.94c4.9,6.38,11.88,10.66,21.71,13.75H73.52c11-3.33,18.9-8.68,24.25-15.09A42.65,42.65,0,0,0,107.29,70H4.38C6.14,80.82,9,88.88,13.68,94.94Z" /></svg>
                    </h1>

                <h1 className="text-white text-4xl font-semibold text-center">Here you can find authentic Japanese recipes from world renowned chefs!</h1>
            </div>
        </div>
    );
};

export default Banner;