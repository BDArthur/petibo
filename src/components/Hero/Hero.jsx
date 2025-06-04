import React from 'react'
import PetImg from "../../assets/Pet.png"
import Navbar from '../Navbar/Navbar';
import LupaImg from "../../assets/lupa.png";

const Hero = () => {
    const [sidebar, setSidebar] = React.useState(false);
    return (
        <main className='md:px-12 md:py-6 bg-primaryDark'>
            <section className='relative min-h-[650px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl shadow-md'>
                <div className='container'>
                    {/* Navbar */}
                    <Navbar sidebar={sidebar} setSidebar={setSidebar} />

                    {/* Hero section */}
                    <div className='grid grid-cols-1 md:grid-cols-2 place-items-center min-h-[650px]'>
                        {/* text content section */}
                        <div className='mt-[100px] md:mt-0 p-4 space-y-4'>
                            <h1 
                                data-aos="fade-up"
                                className='text-5xl font-bold uppercase text-shadow'>
                                Encontre o seu pet perdido
                            </h1>
                            <p className='text-sm'>
                                Utilize ferramentas de busca de pets com eficácia comprovada em todo o Brasil. 
                                Crie seu anúncio gratuito agora mesmo para ter acesso ao Painel de Busca.
                            </p>
                            <button className='primary-btn hover:bg-primaryDark flex items-center space-x-2'>
                                <img src={LupaImg} alt="Ícone de pet" className='w-12 h-12' />
                                <span>
                                    Perdi meu pet <br/>
                                    Quero encontrar
                                </span>
                            </button>
                            <button className='primary-btn hover:bg-primaryDark flex items-center space-x-2'>
                                <img src={LupaImg} alt="Ícone de pet" className='w-12 h-12' />
                                <span>
                                    Achei um pet <br/>
                                    Quero buscar um tutor
                                </span>
                            </button>
                        </div>

                        

                        {/* image section */}
                        <div className='justify-self-end'>
                            <img src={PetImg} alt="Pet" className='relative z-10 w-[800px] md:w-[900px] lg:w-[1000px]' />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Hero
