"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  params: {
    id: string;
  }
}

const ResultadoPage = ({params}: Props) => {
  const [columnSums, setColumnSums] = useState<number[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (params && params.id) {
      const sums = params.id.split('-').map(value => parseInt(value));
      setColumnSums(sums);
    }
  }, [params]);

  return (
    <div>
      <h1>Resultado</h1>
      <div>
        {columnSums.map((sum, index) => (
          <div key={index}>
            <p>Soma da coluna {index + 1}: {sum}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default ResultadoPage;