import Head from '../../componentes/Head'
import Banner from '../../componentes/Banner'
import QtdPaises from '../../componentes/qtdPaises'
import ContainerCidades from '../../componentes/ContainerCidades'

import './europa.css'


const Europa = () => {
    return (
        <div className='containerEuropa'>
            <Head img='/imagens/header.svg' />

            <header className='banner'>
                <Banner imagen='/imagens/bannerEuropa.png' textoAlternativo='Europa'/>
                <h1>Europa</h1>
            </header>

            <section className='container-itens'>
                <div className='texto'>
                    <h2>
                        A Europa é, por convenção, um dos seis continentes do
                        mundo. Compreendendo a península ocidental da Eurásia,
                        a Europa geralmente divide-se da Ásia a leste pela divisória
                        de águas dos montes Urais, o rio Ural, o mar Cáspio, o
                        Cáucaso, e o mar Negro a sudeste
                    </h2>
                </div>


                <div className='informacao'>
                    <QtdPaises qtd='50' info='países' />
                    <QtdPaises qtd='60' info='Línguas' />
                    <QtdPaises qtd='27' info='Cidades +100' />
                </div>
            </section>

            <div className='cards'>
                <ContainerCidades />
            </div>
        </div>
    )
}


export default Europa