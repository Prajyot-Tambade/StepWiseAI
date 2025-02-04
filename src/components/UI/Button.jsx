import React from "react";
import { Link } from "react-router-dom";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-white",
    textColor = "text-white",
    border = "border-none",
    className = "",
    to="#",
    ...props
}) {
    return type=="link"? 
    (
        <Link to={to} className={`px-8 py-2 rounded-full inline-block ${bgColor} ${textColor} ${className} ${border}`} {...props}>
            {children}
        </Link>
    ): 
    
    (
        <button className={`px-8 py-2 rounded-full ${bgColor} ${textColor} ${className} ${border}`} {...props}>
            {children}
        </button>
    );
}