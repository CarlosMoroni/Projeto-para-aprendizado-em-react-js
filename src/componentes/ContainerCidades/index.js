import './containerCidades.css'
import Cidades from '../Cidades'

const ContainerCidades = () => {
    return (
        <div className='container-cidades'>
            <h2>Cidades +100</h2>
            <div className='itens'>
                <Cidades imagen='/imagens/londres.png' cidade='Londres' pais='Reino Unido' ellipse='/imagens/reinoUnidoEllipse.png' />
                <Cidades imagen='/imagens/paris.png' cidade='Paris' pais='França' ellipse='/imagens/francaEllipse.png' />
                <Cidades imagen='/imagens/roma.png' cidade='Roma' pais='Itália' ellipse='/imagens/italiaEllipse.png' />
                <Cidades imagen='/imagens/praga.png' cidade='Praga' pais='República Tcheca' ellipse='/imagens/republicaTchecaEllipse.png' />
                <Cidades imagen='/imagens/amsterda.png' cidade='Amsterdã' pais='Holanda' ellipse='/imagens/holandaEllipse.png' />
            </div>
        </div>
    )
}

export default ContainerCidades