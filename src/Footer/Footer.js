import React from "react";
import './Footer.css'


export default function Footer () {
    console.log(`nitz version: ${process.env.REACT_APP_VERSION}`)

    return (
    <div className="footer">
        <p>{process.env.REACT_APP_VERSION}</p>
    </div>
    )
}