import Head from '../../componentes/Head'
import Banner from '../../componentes/Banner'
import QtdPaises from '../../componentes/qtdPaises'
import Cidades from '../../componentes/Cidades'

import './europa.css'


const Europa = () => {
    return (
        <div className='containerEuropa'>
            <Head />
            <Banner imagen='/imagens/bannerEuropa.png' />

            <div className='div-texto'>
                <label>A Europa é, por convenção, um dos seis continentes do
                    mundo. Compreendendo a península ocidental da Eurásia,
                    a Europa geralmente divide-se da Ásia a leste pela divisória
                    de águas dos montes Urais, o rio Ural, o mar Cáspio, o
                    Cáucaso, e o mar Negro a sudeste
                </label>
            </div>

            <div className='informacao'>
                <QtdPaises qtd='50' info='países' />
                <QtdPaises qtd='60' info='Línguas' />
                <QtdPaises qtd='27' info='Cidades +100' />
            </div>

            <div className='cidades'>
                <h2>Cidades +100</h2>

                <Cidades imagen='/imagens/londres.png' cidade='Londres' pais='Reino Unido' ellipse='/imagens/reinoUnidoEllipse.png'/>
                <Cidades imagen='/imagens/paris.png' cidade='Paris' pais='França' ellipse='/imagens/francaEllipse.png'/>
                <Cidades imagen='/imagens/roma.png' cidade='Roma' pais='Itália' ellipse='/imagens/italiaEllipse.png'/>
                <Cidades imagen='/imagens/praga.png' cidade='Praga' pais='República Tcheca' ellipse='/imagens/republicaTchecaEllipse.png'/>
                <Cidades imagen='/imagens/amsterda.png' cidade='Amsterdã' pais='Holanda' ellipse='/imagens/holandaEllipse.png'/>
            </div>
        </div>
    )
}


export default Europa