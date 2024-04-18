import React from 'react'
import Image from 'next/image'
import FeatureDetailCardProps from '../types/propTypes'
function FeatureDetailCard({ heading, description, image }: FeatureDetailCardProps) {
    return (
        <div className="flex flex-col items-center justify-center bg-white rounded-lg p-6 text-center shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{heading}</h2>
            <p className="text-gray-700 text-lg">{description}</p>
            <Image className=" text-blue-500 mb-4" src={image} alt="" height={350} width={350} />
        </div>
    )
}


export default FeatureDetailCard