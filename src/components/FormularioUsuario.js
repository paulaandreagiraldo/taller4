import React, { useState } from 'react';

const FormularioUsuario = () => {
    const [nombre, setNombre] = useState('');

    const handleChange = (e) => {
        setNombre(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Nombre ingresado: ${nombre}`);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <input 
                type="text" 
                value={nombre} 
                onChange={handleChange} 
                placeholder="Ingresa tu nombre"
                className="border border-gray-300 p-2 mb-2 rounded"
            />
            <button 
                type="submit" 
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
            >
                Enviar
            </button>
        </form>
    );
};

export default FormularioUsuario;
