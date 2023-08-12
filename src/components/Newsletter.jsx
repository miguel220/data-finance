import React from "react";

const Newsletter = () => {
    return (
        <div className='w-full py-16 text-white px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className="lg:col-span-2 my-4">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                        Quer dicas e truques para otimizar seu fluxo?
                    </h1>
                    <p>
                        Assine nossa newsletter e mantenha-se atualizado.
                    </p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                        <input className="p-3 felx w-full rounded-md text-black" type="email" name="email" placeholder="Digite o Email" />
                        <button className='bg-[#00df9a] rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 text-black hover:scale-105'>Me avise</button>
                    </div>
                    <p>
                        Nós nos preocupamos com a proteção de seus dados. Leia nossa{' '}
                        <span className='text-[#00df9a] underline decoration-[#00df9a] cursor-pointer'>Política de Privacidade.</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;