"use client"
interface ImageUrlProps {
  imageUrl: string
}

const SpinnerWithImage = ({ imageUrl }: ImageUrlProps) => {
  return (
    <div className="relative flex items-center justify-center w-32 h-32 select-none">
      {/* Spinner */}
      <div className="absolute flex items-center justify-center w-full h-full">
        <div className="w-16 h-16 border-4 border-black border-t-transparent border-solid rounded-full animate-spin"></div>
      </div>

      {/* Imagen en el centro */}
      <svg
      width="100"
      height="200"
      viewBox="0 0 100 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Parte superior del reloj */}
      <rect x="20" y="10" width="60" height="20" fill="#d3b7d3" />
      {/* Marco del reloj */}
      <rect x="20" y="10" width="60" height="180" fill="none" stroke="#6b4a6b" strokeWidth="4" />
      
      {/* Arena superior */}
      <polygon points="30,40 70,40 50,80" fill="#f5b700" />
      
      {/* Arena inferior */}
      <polygon points="50,120 30,160 70,160" fill="#f5b700" />
      
      {/* Vidrio superior */}
      <path d="M30 40 Q50 100 70 40" fill="none" stroke="#6b4a6b" strokeWidth="2" />
      
      {/* Vidrio inferior */}
      <path d="M30 160 Q50 100 70 160" fill="none" stroke="#6b4a6b" strokeWidth="2" />
    </svg>
    </div>
  );
};
export default function Spinner() {
  return (
    <div className="flex items-center justify-center  ">
      <SpinnerWithImage imageUrl="/ola.png" />
    </div>
  );

}
