import React from "react";

const Button = ({ icon='', text='Botón', shape='rounded-full', bgcolor='bg-[#494949]', hover='hover:bg-[#858585]', width='', height='', onClick}) => {
    return (
        <button 
        className={`flex flex-row items-center justify-center gap-2 ${shape} shadow-[0_0_20px_1px_rgba(0,0,0,0.60)] ${bgcolor} transition ease ${hover}`}
        style={{width, height}}
        onClick={onClick}
        >
        <span className="material-symbols-outlined" style={{fontSize:'1.2rem'}}>{icon}</span>
            {text}
        </button>
    );
};

export default Button;
