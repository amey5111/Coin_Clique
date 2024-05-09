import React, { useState } from "react";

function GraphOptionsMenu() {
  const [isOpen, setIsOpen] = useState([false, false, false, false]);

  const sections = ["Analyze with Time", "Analyze by Tag"]
  const options = ["Default", "Yearly Analysis", "Monthly Analysis", "Daily Analysis"]
  const toggleAccordion = (index: number) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <div className="w-full max-w-xs pt-5">
        
      {sections.map((section ,index) => (
        <div key={section} className="border rounded mb-2">
          <button
            className="w-full px-4 py-2 text-left bg-purple-300 hover:bg-purple-400 focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            {section}
          </button>
          {isOpen[index] && (
            <div className="border-t">
                {options.map((option ,index) => (
                   <button key={index} className="w-full px-4 py-2 text-left bg-purple-200 hover:bg-blue-300 focus:outline-none">
                   {option}
                 </button> 
                ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default GraphOptionsMenu;
