import Image from 'next/image';
import personData from '../data/personData';

// Este componente renderiza imagens de pessoas em posição absoluta.
export default function PersonImage() {
  return (
    <>
      {personData.map((data) => (
            <Image
              key={data.id}
              src={data.src}
              alt={data.alt}
              width={data.width}
              height={data.height}
              className={data.className}
            />
      ))} {/* Aqui está o parêntese de fechamento que estava faltando */}
    </>
  );
}
