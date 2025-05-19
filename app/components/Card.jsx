import React from "react";

const Card = ({ title = 'Título', ttlSize='', text = 'Escribe algo', icon = '', width = '120px', height = '80px', bgcolor = '#0f0f0f', border = '#2a2a2a'}) => {
    return (
        <div
        className="flex flex-row items-center gap-1
        bg-[#0f0f0f] rounded-lg border border-[#2a2a2a]
        overflow-y-scroll scroll-overflow-all"
        style={{ width, height, background: bgcolor, border: border }}
        >
            
            <div className="flex flex-col p-4">
                <h2 className="text-lg font-light" style={{fontSize: ttlSize}}>{title}</h2>
                <p className="text-xs font-extralight">{text}</p>
            </div>
            <span className="material-symbols-outlined">{icon}</span>

        </div>
    )
}

export default Card;