import React from 'react';
import Image from 'next/image';

const ProfilePicture = ({
  srcImagen = '/images/profile_image.jpg',
  textoAlt = 'Foto de Perfil',
  tamano = 80,
  margen = '10px',
  calidad = 100,
  sinOptimizar = true,
  prioridad = true
}) => {
  return (
    <div className=' w-[80px]'>
      <div
        className={`flex items-center shadow-[0_0_34px_8px_rgba(0,0,0,0.60)] justify-center overflow-hidden rounded-full m-[${margen}]`}
        style={{ width: `${tamano}px`, height: `${tamano}px` }}
      >
        <Image
          src={srcImagen}
          alt={textoAlt}
          width={tamano}
          height={tamano}
          quality={calidad}
          unoptimized={sinOptimizar}
          priority= {prioridad}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ProfilePicture;