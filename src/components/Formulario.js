import React, { useState } from 'react';

const Formulario = ({ onNumberChange }) => {
    const [numero, setNumero] = useState('');

    const handleChange = (e) => {
        setNumero(e.target.value);
        onNumberChange(e.target.value); // Lifting state up
    };

    return (
        <input 
            type="number" 
            value={numero} 
            onChange={handleChange} 
            placeholder="Ingresa un número"
            className="border border-gray-300 p-2 mb-2 rounded"
        />
    );
};

export default Formulario;
