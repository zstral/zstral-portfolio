import React from 'react';
import Image from 'next/image';

const Experience = ({
    title = 'Desarrollo Profesional',
    desc = 'Analista Programador - Duoc UC',
    subtitle = 'Certificados',
    certificates = [
        { title: "Certificado Python Essential", imageSrc: "/images/assets/python.png", link: "/docs/Python_Essentials_1_Badge20240503-8-8ue09z.pdf", alt: "Python", width: 40, height: 40 },
        { title: "Certificado Diseño Web HTML+CSS", imageSrc: "/images/assets/web.png", link: "/docs/Diplomado - Diseño Web.pdf", alt: "Web Design", width: 40, height: 40 },
        { title: "Certificado Diseño UX/UI", imageSrc: "/images/assets/uxui.png", link: "/docs/Diplomado - UXUI.pdf", alt: "UX/UI", width: 35, height: 35 }
    ] 
}) => {
    return (
        <div className="exp">
            <h1>{title}</h1>
            <p>{desc}</p>
            <h2>{subtitle}</h2>
            <div className="cert">
                {certificates.map((certificate, index) => (
                    <a 
                        key = {index}
                        title = {certificate.title}
                        target = "_blank"
                        href = {certificate.link}
                    >
                        <Image
                        src = {certificate.imageSrc}
                        alt = {certificate.alt}
                        width = {certificate.width}
                        height = {certificate.height}
                        />
                    </a>
                ))}
            </div>
            <button id="btnArrow">+</button>
        </div>
    );
};

export default Experience;