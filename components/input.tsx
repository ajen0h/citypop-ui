"use client"

import ArticleWrapper from "./article-wrapper"

export default function InputComponent({ disabled = false }: { disabled?: boolean }) {
  return (
    
      <div className='p-2 border-2 border-[#170f06] rounded-2xl shadow-[3px_3px_0_#170f06] flex items-center'>
        <input
          disabled={disabled}
          type="text"
          placeholder="Search..."
          className="appearance-none bg-transparent border-none flex-1 focus:outline-none text-lg "
        />
      </div>
    

  )
}
