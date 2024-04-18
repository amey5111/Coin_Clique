import React from 'react';
import FeatureDetailCard from './components/FeatureDetailCard';
import { FEATURES, JOIN_MESSAGE, WELLCOME_MESSAGE, BUTTON_TEXT } from './constants/constants';
export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-blue-600 to-blue-400 min-h-screen">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-white text-center mb-8">{WELLCOME_MESSAGE}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <FeatureDetailCard key={index} {...feature} />
          ))}
        </div>
        <div className="max-w-lg mx-auto mt-12">
          <p className="text-lg font-semibold text-white text-center">
            {JOIN_MESSAGE}
          </p>
          <div className="flex justify-center mt-6">
            <button className="bg-white text-blue-600 hover:bg-purple-500 hover:text-white font-semibold py-2 px-6 rounded-lg">
              {BUTTON_TEXT}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
