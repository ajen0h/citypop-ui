"use client"
import { useState } from "react";

type Option={
  value:string
  label:string
}

const SelectComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Select an option');

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const handleOptionClick = (option:Option) => {
    setSelectedOption(option.label);
    setIsOpen(false);
  };

  return (
    <div className='p-2 border-2 border-[#170f06] rounded-2xl shadow-[3px_3px_0_#170f06] relative cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
      <div className="flex items-center justify-between">
        <span className="text-lg">{selectedOption}</span>
        <span className="material-icons text-[#170f06]">
          {isOpen ? 'expand_less' : 'expand_more'}
        </span>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white border-2 border-[#170f06] rounded-2xl shadow-[3px_3px_0_#170f06] z-10">
          {options.map((option) => (
            <div
              key={option.value}
              className="p-2 hover:bg-[#f3f3f3] hover:text-[#170f06] text-[#170f06] cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectComponent;
