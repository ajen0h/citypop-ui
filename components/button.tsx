"use client"
import { ReactNode } from "react";

export default function ButtonComponent({ children }: { children: ReactNode }) {
  return (
    <button className='shadow-[3px_3px_0_#170f06] border-2 border-[#170f06] font-medium p-1 rounded-2xl hover:text-white hover:bg-[#170f06] transition-all uppercase'>{children}</button>

  )
}
