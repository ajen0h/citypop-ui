"use client"
export default function CardComponent() {
  return (
    <section className='p-2 border-2 border-[#170f06] rounded-2xl shadow-[3px_3px_0_#170f06]'>
      <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
        <img src="/card1.jpg" alt="" className="transition-all hover:scale-105 aspect-[3/4 absolute inset-0 object-cover w-full h-full" />
      </div>
      <div className="flex flex-col p-3 gap-2">
        <h1 className="text-2xl font-bold uppercase">
          Life with cockatiel
        </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam cupiditate laudantium, impedit fugiat dolorum repellat magni, eaque delectus cum blanditiis non aut illum autem ut a, recusandae exercitationem quibusdam magnam.
        </p>
      </div>
    </section>

  )
}
