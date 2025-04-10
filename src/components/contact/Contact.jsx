import React from "react";
import { useState, useEffect } from "react";

function Contact() {
    return (
        // contenedor principal
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center h-screen">
            {/* imagen */}
            <div className="w-full h-14">
                <img className="w-full h-full" src="./assets/images/imagenContacto.jpg" alt="" />
            </div>
            {/* contenedor de formulario */}
            <div>
                {/* info texto */}
                <div></div>
                {/* formulario */}
                <div></div>
            </div>
        </div>
    );
}