import React from 'react';
import Image from 'next/image';

const SocialLinks = () => {
    return (
        <div className="rrss">
            <a id="iconHover" href="https://github.com/Zstral" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/images/assets/github.png"
                    alt="GitHub"
                    width={40}
                    height={40}
                />
            </a>
            <a id="iconHover" href="https://www.linkedin.com/in/zstral" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/images/assets/linkedin.png"
                    alt="LinkedIn"
                    width={40}
                    height={40}
                />
            </a>
            <a id="iconHover" href="mailto:rafaelfernandezgalleguillos@outlook.com?Subject=Contacto Portafolio">
                <Image
                    src="/images/assets/mail.png"
                    alt="Email"
                    width={40}
                    height={40}
                />
            </a>
        </div>
    );
};

export default SocialLinks;