import React, { useState } from 'react';
import ButtonClick from './components/ButtonClick';
import FormularioUsuario from './components/FormularioUsuario';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';

const App = () => {
    const [numero, setNumero] = useState('');

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl mb-4">Ejercicios de React</h1>

            <h2 className="text-xl mb-2">Ejercicio 1: Manejo de Eventos</h2>
            <ButtonClick />

            <h2 className="text-xl mt-4 mb-2">Ejercicio 2: Formulario</h2>
            <FormularioUsuario />

            <h2 className="text-xl mt-4 mb-2">Ejercicio 3: Lifting State Up</h2>
            <Formulario onNumberChange={setNumero} />
            <Resultado numero={numero} />
        </div>
    );
};

export default App;
