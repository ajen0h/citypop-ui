"use client"
import { Home } from 'lucide-react';
import Link from 'next/link';
import React, { ReactNode } from 'react'
import toast from 'react-hot-toast';

export default function CopyComponent({code,children}:{code:string,children:ReactNode}) {
    const handleCopy = () => {
        navigator.clipboard.writeText(code)
        toast('Código copiado!', {
          icon: '👏',
        });
      }
  return (
    <main className='flex flex-col gap-3'>
        <div className='flex justify-between items-center'>
       <Link href={"/"} className='border border-black rounded-full p-2 cursor-pointer transition-all bg-white'><Home/></Link> 
    <h1 className='font-bold text-lg'>Alert</h1>
        </div>
    <div className='overflow-x-auto border-2 border-black flex flex-row justify-center items-center p-5'>
      {children}
    </div>
    <div className='relative border-2 border-black'>
      <pre className='overflow-x-auto font-bold bg-[#f5f5f5] border-1 border-[#ddd] p-5'>
        <code>
          {code.trim()}
        </code>
        <button onClick={handleCopy} className="absolute top-2 right-2 cursor-pointer rounded-md border border-gray-900 bg-transparent p-2 transition hover:bg-gray-900 text-white">
          Copy
        </button>
      </pre>
    </div>
  </main>
  )
}
