import React from "react"
import "./HoverDropdown.css";

const HoverDropdown =({children})=> {
    return (
        <div className="hoover-dropdown ml-30">
            {children}
        </div>
    )
}

export default HoverDropdown;
