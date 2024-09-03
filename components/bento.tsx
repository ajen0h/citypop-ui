
export default function BentoComponent() {
  return (
    <>
      {/* bENTO1 */}
      <div className="grid grid-cols-4 h-[700px] gap-2">
        <div className="col-span-4 rounded-2xl ">fOTO1</div>
        <div className="col-span-4 grid grid-cols-4 gap-2  ">
          <div className="col-span-2 rounded-2xl ">foto2</div>
          <div className="col-span-2 row-span-2 rounded-2xl">foto2</div>
          <div className="col-span-2 rounded-2xl ">foto2</div>
        </div>
        <div className="bg-slate-500 col-span-4 rounded-2xl border-2 border-[#170f06]">fOTO1</div>
      </div>
      {/* Bento 2 */}
      <div className="grid grid-cols-3 h-[700px] gap-2">
        <div className="rounded-2xl shadow-[3px_3px_0_#170f06] border-2 border-[#170f06] col-span-2">fOTO1</div>
        <div className="rounded-2xl shadow-[3px_3px_0_#170f06] border-2 border-[#170f06] col-span-1">Foto1</div>
        <div className="rounded-2xl shadow-[3px_3px_0_#170f06] border-2 border-[#170f06] col-span-1">Foto1</div>
        <div className="rounded-2xl shadow-[3px_3px_0_#170f06] border-2 border-[#170f06] col-span-2">Foto1</div>
        <div className="rounded-2xl shadow-[3px_3px_0_#170f06] border-2 border-[#170f06] col-span-2">fOTO1</div>
        <div className="rounded-2xl shadow-[3px_3px_0_#170f06] border-2 border-[#170f06] col-span-1">Foto1</div>
      </div>
      {/* Bento 3 */}
      <div className="grid grid-cols-4 grid-rows-3 h-[700px] gap-2">
        <div className="rounded-2xl shadow-[3px_3px_0_#170f06] border-2 border-[#170f06] col-span-2 row-span-2">fOTO1</div>
        <div className="rounded-2xl shadow-[3px_3px_0_#170f06] border-2 border-[#170f06] col-span-1 row-span-2">Foto1</div>
        <div className="rounded-2xl shadow-[3px_3px_0_#170f06] border-2 border-[#170f06] col-span-1">Foto1</div>
        <div className="rounded-2xl shadow-[3px_3px_0_#170f06] border-2 border-[#170f06] col-span-1 row-span-2">Foto1</div>
        <div className="rounded-2xl shadow-[3px_3px_0_#170f06] border-2 border-[#170f06] col-span-1">Foto1</div>
        <div className="rounded-2xl shadow-[3px_3px_0_#170f06] border-2 border-[#170f06] col-span-1">Foto1</div>
        <div className="rounded-2xl shadow-[3px_3px_0_#170f06] border-2 border-[#170f06] col-span-1">Foto1</div>

      </div>
    </>

  )
}
