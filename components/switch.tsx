import  { useState } from 'react';

const SwitchComponent = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center space-x-4 ">
      <label className="inline-flex items-center cursor-pointer ">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          className="sr-only " // Oculta el input real
        />
        <span className="relative ">
          <span
            className={`shadow-[3px_3px_0_#170f06] border-2 border-[#170f06] transition-all block w-14 h-8 rounded-full ${
              isChecked ? 'bg-black' : 'bg-gray-300'
            }`}
          />
          <span
            className={` absolute top-1 left-1 bg-white w-6 h-6 rounded-full transition-all ${
              isChecked ? 'translate-x-6' : 'translate-x-0'
            }`}
          />
        </span>
      </label>
      <span>Airplane Mode</span>
    </div>
  );
};

export default SwitchComponent;
