import { useState, useEffect, useRef, ReactNode } from 'react';

interface SheetComponentProps {
    position?: 'right' | 'left';
    children:ReactNode
}

export default function SheetComponent({ position = 'left',children }: SheetComponentProps) {
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const [sheetPosition, setSheetPosition] = useState<'right' | 'left'>(position); // Usa el valor de prop inicial
    const divRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        // Actualiza el estado cuando la prop `position` cambia

        setSheetPosition(position);
        if (divRef.current) {
            // Verificar el estado actual del display y alternarlo
             // Mostrar el div
            divRef.current.style.opacity = "0"; // Mostrar el div

        }
    }, [position]);

    const positionClasses = {
        right: 'translate-x-full',
        left: '-translate-x-full',
    };

    const transitionClasses = isSheetOpen ? 'translate-x-0' : positionClasses[sheetPosition];

    const openSheet = () => {
        setIsSheetOpen(true);
        if(divRef.current) divRef.current.style.opacity = "1"

    };

    const closeSheet = () => setIsSheetOpen(false);

    return (
        <div className="App" >
            <div className="container mx-auto p-4">
                {/* Botón para abrir el Sheet en la posición especificada */}
                <button
                    className='shadow-[3px_3px_0_#170f06] border-2 border-[#170f06] font-medium p-1 rounded-2xl hover:text-white hover:bg-[#170f06] transition-all uppercase'
                    onClick={openSheet}
                >
                    Abrir Sheet {sheetPosition === 'right' ? 'a la derecha' : 'a la izquierda'}
                </button>
            </div>

            {/* Overlay y Panel del Sheet */}
            <>
                {/* Overlay */}
                <div
                    className={` fixed inset-0 bg-black bg-opacity-50 transition-opacity z-10 ${isSheetOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                    onClick={closeSheet}
                    
                />

                {/* Sheet Panel */}
                <div
                    className={`fixed top-0 w-80 bg-white h-full transform transition-transform duration-300 shadow-[3px_3px_0_#170f06] border-2 border-[#170f06] z-10 ${sheetPosition === 'right' ? 'right-0' : 'left-0'
                        } ${transitionClasses}`}
                        ref={divRef}
                >
                    <div className="p-4">
                        <button
                            className="text-gray-500 hover:text-gray-700 focus:outline-none"
                            onClick={closeSheet}
                        >
                            Cerrar
                        </button>
                    </div>
                    <div className="p-4">
                        {children}
                    </div>
                </div>
            </>
        </div>
    );
}
