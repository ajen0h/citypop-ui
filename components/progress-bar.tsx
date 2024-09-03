import React from 'react';
import { ArrowRightCircle } from 'lucide-react'; // Importa el icono de Lucide

interface SliderWithIconProps {
  progress: number;
  onChange: (value: number) => void;
}

const SliderWithIcon = ({ progress, onChange }: SliderWithIconProps) => {
  const sliderWidth = 300; // Ancho del slider
  const thumbWidth = 24; // Ancho del thumb (icono)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  // Calcular la posición del icono
  const calculateThumbPosition = (progress: number) => {
    const percent = (progress / 100) * sliderWidth;
    return `calc(${percent}px - ${thumbWidth / 2}px)`; // Ajuste para centrar el icono
  };

  return (
    <div className="relative w-full flex items-center">
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={handleChange}
        className="w-full h-2 bg-gray-200 appearance-none"
        style={{ cursor: 'pointer' }}
      />
      <div
        className="absolute"
        style={{
          left: calculateThumbPosition(progress),
          transform: 'translateX(-50%)', // Centra el icono sobre el thumb
          pointerEvents: 'none' // Evita que el icono interfiera con el control deslizante
        }}
      >
        <ArrowRightCircle size={24} className="text-blue-500" />
      </div>
    </div>
  );
};

export default function ProgressBarComponent() {
    const [progress, setProgress] = React.useState(50); // Valor inicial del progreso

    return (
      <div className="p-4 flex flex-col items-center">
        <SliderWithIcon progress={progress} onChange={setProgress} />
        <p className="mt-2 text-lg text-blue-500">{progress}%</p>
      </div>
    );
  }