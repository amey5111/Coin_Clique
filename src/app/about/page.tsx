import React from 'react';
import Image from 'next/image';
export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-blue-600 to-blue-400 min-h-screen">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Welcome to CoinClique Here to Help you for:</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center justify-center bg-white rounded-lg p-6 text-center shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Effortless Expense Tracking</h2>
            <p className="text-gray-700 text-lg">Say goodbye to spreadsheets! Record your expenses effortlessly and categorize them for easy analysis.</p>
            <Image className=" text-blue-500 mb-4" src="/aboutPage/TrackExAboutImg.jpg" alt="" height={350} width={350} />
          </div>
          <div className="flex flex-col items-center justify-center bg-white rounded-lg p-6 text-center shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Actionable Insights</h2>
            <p className="text-gray-700 text-lg">Gain a clear understanding of your financial health with intuitive graphs and charts.</p>
            <Image className=" text-blue-500 mb-4" src="/aboutPage/actionable_insights2.jpg" alt="" height={350} width={350} />
          </div>
          <div className="flex flex-col items-center justify-center bg-white rounded-lg p-6 text-center shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Split Bills with Ease</h2>
            <p className="text-gray-700 text-lg">Planning a group outing? Split expenses effortlessly among your group.</p>
            <Image className=" text-blue-500 mb-4" src="/aboutPage/split_expenses_with_friends.png" alt="" height={350} width={350} />
          </div>
        </div>
        <div className="max-w-lg mx-auto mt-12">
          <p className="text-lg font-semibold text-white text-center">
            Join CoinClique today and experience a smarter, simpler way to manage your finances!
          </p>
          <div className="flex justify-center mt-6">
            <button className="bg-white text-blue-600 hover:bg-purple-500 hover:text-white font-semibold py-2 px-6 rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
