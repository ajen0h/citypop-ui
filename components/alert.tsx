
const AlertComponent = () => {
  return (
      <section className='bg-[#f4f0f4] shadow-[3px_3px_0_#b7a5b7] border-2 border-[#d0c0d0] h-[200px] w-[400px]'>
        <div className="bg-[#e8a5d2] w-full border-b-2 border-[#d0c0d0] px-3" >
          <h1 className="text-white font-semibold text-lg">Atetention!</h1>
        </div>
        <div className="flex flex-col gap-6 py-4">
          <h1 className="text-center text-xl font-bold px-14 text-[#6b4a6b]">Are you sure you want to send positive vibes?</h1>
          <div className="flex flex-row justify-center items-center gap-6 w-full px-20">
            <button className="flex justify-center items-center w-full border-2 p-2 border-[#b0a0b0] shadow-[2px_2px_0_#b0a0b0] font-bold text-lg uppercase text-[#6b4a6b] bg-[#d3b7d3]">Yes</button>
            <button className="flex justify-center items-center h-12 w-full border-2 p-3 border-[#b0a0b0] shadow-[2px_2px_0_#b0a0b0] font-bold text-lg uppercase text-[#6b4a6b] bg-[#d3b7d3]">Yes!!</button>
          </div>
        </div>
      </section>

  )
}
export default AlertComponent