"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export default function HeroBanner() {
    const images = [
        "/HeaderBanner/actionable_insights.jpg",
        "/HeaderBanner/heroFirstImage.jpg",
        "/aboutPage/actionable_insights2.jpg",
        // Add more image URLs as needed
    ];

    const [flipped, setFlipped] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const flipInterval = setInterval(() => {
            setFlipped(prevState => !prevState);
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(flipInterval);
    }, []);

    return (
        <section className="text-white body-font bg-gradient-to-r from-pink-400 to-indigo-600">
            <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Take control of your Expenses with <div className='mx-auto lg:mx-0 mt-5 text-yellow-500 bg-white rounded-xl  font-medium py-2 px-4 w-fit'>CoinClique!</div></h1>
                    <p className="text-white bg-blue-400 pr-5 w-fit mt-5 mb-3 leading-relaxed text-xl border-4 border-l-8 border-l-yellow-400 pl-2 rounded-xl font-medium">Effortless Expense Tracking</p>
                    <p className="text-white bg-blue-400 pr-5 w-fit mt-5 mb-3 leading-relaxed text-xl border-4 border-l-8 border-l-yellow-400 pl-2 rounded-xl font-medium">Actionable Expense Insights with intuitive graphs </p>
                    <p className="text-white bg-blue-400 pr-5 w-fit mt-5 mb-3 leading-relaxed text-xl border-4 border-l-8 border-l-yellow-400 pl-2 rounded-xl font-medium">Split Bills of any events with Ease</p>
                    <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded-lg text-center text-xl mt-5 mx-auto w-fit lg:w-1/3">Lets Get Started</button>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-0/12 relative">
                    <div className="w-full h-full perspective">
                        <div className={`w-full h-full transform transition-transform duration-1000 ${flipped ? 'rotateY-180' : ''}`}>
                            <div className="front absolute inset-0 flex items-center justify-center">
                                <Image className="object-cover object-center rounded-3xl" alt="hero" src={images[currentImageIndex]} height={450} width={450} />
                            </div>
                            <div className="back absolute inset-0 flex items-center justify-center">
                                <Image className="object-cover object-center rounded-3xl" alt="hero" src={images[(currentImageIndex + 1) % images.length]} height={450} width={450} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
