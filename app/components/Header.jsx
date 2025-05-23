import React from "react";

const Header = ({ children, height='' }) => {
    return (
        <div className="flex flex-row items-center gap-4 col-span-1 w-full" style={{height}}>
            {children}
        </div>
    );
};

export default Header;