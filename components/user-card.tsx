
export default function UserCardComponent() {
  return (
    <section className="flex  place-items-center p-2 border-2 border-[#170f06] rounded-2xl shadow-[3px_3px_0_#170f06] bg-white">

    {/* Imagen de usuario a la izquierda */}
    <div className="w-1/4 h-[100px] rounded-l-2xl overflow-hidden">
      <img src="/user-photo.jpg" alt="User" className="w-full h-full object-cover" />
    </div>
    
    {/* Contenido principal (texto) en el centro */}
    <div className="flex-1 p-4">
      <h1 className="text-xl font-bold uppercase">John Doe</h1>
      
    </div>
    
    {/* Área de acción a la derecha */}
    <div className="w-1/4 flex items-center justify-center">
      <button className="bg-[#170f06] text-white py-2 px-4 rounded-xl shadow-[2px_2px_0_#170f06] hover:bg-[#3d2b1f] transition-colors">
        Action
      </button>
    </div>
  </section>
  )
}
