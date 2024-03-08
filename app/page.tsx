"use client"

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const IndexPage = () => {
  const [points, setPoints] = useState(Array(40).fill(0));
  const router = useRouter();

  const handleInputChange = (index: number, value: string) => {
    const newPoints = [...points];
    newPoints[index] = parseInt(value);
    setPoints(newPoints);
  };

  const handleNavigateToResult = () => {
    const columnSums = Array(4).fill(0);
    points.forEach((value, index) => {
      const columnIndex = index % 4;
      columnSums[columnIndex] += value;
    });

    const confirmation = window.confirm("Você gostaria de avaliar no Google?");

    if (confirmation) {
      // Se o usuário aceitar, redirecionar para avaliação no Google
      window.open("https://www.google.com/", "_blank");

      // Depois de abrir a avaliação no Google, redirecionar para a página de resultado
      router.push(`/result/${columnSums.join('-')}`);
    } else {
      // Se o usuário recusar, não enviar
      console.log("Usuário não aceitou avaliar no Google");
    }
  };

  return (
    <div>
      <h1>Calculadora de Pontos</h1>
      <div className="grid grid-cols-4 gap-4 text-black">
        {points.map((value, index) => (
          <input
            key={index}
            type="number"
            value={value}
            onChange={(e) => handleInputChange(index, e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
        ))}
      </div>
      <button onClick={handleNavigateToResult} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Calcular
      </button>
    </div>
  );
};

export default IndexPage;
