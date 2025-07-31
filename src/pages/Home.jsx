import Navbar from '../components/NavBarComponent'
import bgImage from '../assets/bg-image.png'
import otherImage from '../assets/image.png'
import Image from '../components/ImageComponent'

import './Home.css'

export const Home = () => {

    return <>
        <div className='w-full'>
            <div>
                <Navbar/>
            </div>
            <div>
                <Image src={bgImage} alt='bg-capa'/>
            </div>
            <div>
                <Image src={otherImage} alt='outra-imagem'/>
            </div>
            <div className='container-home'>
                <div className='flex flex-row justify-center'>
                    <h2>Soluções sob medida para necessidades reais</h2>
                </div>
                <div className='grid grid-cols-2 grid-rows-2 gap-10'>
                    <p className='col-span-1 row-span-2'>Softwares personalizados são desenvolvidos para atender exatamente as necessidades e fluxos de trabalho da sua empresa. Diferente de soluções prontas, que forçam você a se adaptar ao sistema, o software sob medida se adapta a você.</p>
                    <p className='col-span-1 row-end-3'>Quando o software faz exatamente o que é necessário — sem funções desnecessárias ou complexidade excessiva — as tarefas se tornam mais rápidas e eficientes. Isso reduz o tempo gasto com treinamentos e tarefas repetitivas.</p>
                    <p className='col-span-1 row-end-3'>Seu software cresce com você. À medida que sua empresa evolui, novas funcionalidades podem ser adicionadas, sem depender de terceiros ou ficar limitado ao que o mercado oferece.</p>
                    <p className='col-span-1 row-span-2'>Com uma solução única, sua empresa pode operar de maneira diferente (e melhor) da concorrência. Enquanto outros estão limitados por sistemas genéricos, você inova com mais liberdade.</p>
                </div>
            </div>
            <div className='flex flex-row justify-start'>
                <h3>
                    <p>O Que Oferecemos ?</p>
                </h3>
            </div>
        </div>        
    </>
}