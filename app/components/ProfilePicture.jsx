import React from 'react';
import Image from 'next/image';

const ProfilePicture = ({
  src = '/images/profile_image.jpg',
  alt = 'Foto de Perfil',
  size = 80,
  quality = 100,
  unoptimized = true,
  priority = true
}) => {
  return (
    <div>
      <div
        className={`shadow-[0_0_34px_8px_rgba(0,0,0,0.60)] overflow-hidden rounded-full`}
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          quality={quality}
          unoptimized={unoptimized}
          priority= {priority}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ProfilePicture;