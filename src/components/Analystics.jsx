import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analystics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[510xp] mx-auto my-4' src={Laptop} alt="" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold'>
                        PAINEL DE ANÁLISE DE DADOS
                    </p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                        Gerencie a análise de dados centralmente
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                        molestiae delectus culpa hic assumenda, voluptate reprehenderit
                        dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
                        eveniet ex deserunt fuga?
                    </p>
                    <button className='w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a] bg-black hover:scale-105 shadow-xl'>Iniciar</button>
                </div>
            </div>

        </div>
    )
}

export default Analystics