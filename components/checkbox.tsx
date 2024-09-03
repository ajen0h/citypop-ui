"use client"
export default function CheckboxComponent() {
  return (
    <div className='p-2 border-2 border-[#170f06] rounded-2xl shadow-[3px_3px_0_#170f06] flex items-center'>
      <input
        type="checkbox"
        id="custom-checkbox"
        className="appearance-none h-6 w-6 border-2 border-[#170f06] rounded-[0.375rem] cursor-pointer checked:bg-[#170f06] checked:border-[#170f06] relative shadow-[2px_2px_0_#170f06] focus:outline-none"
      />
      <label htmlFor="custom-checkbox" className="select-none cursor-pointer ml-3 text-xl font-bold uppercase">
        Life with cockatiel
      </label>
    </div>

  )
}
