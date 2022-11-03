import TravelTypes from '../TravelTypes'
import './ContainerTravelTypes.css'

const ContainerTravelTypes = () => {
    return(
        <div className='containerTravel'>
            <TravelTypes imagen='/imagens/vidaNoturna.png' texto='Vida Noturna' link=''/>
            <TravelTypes imagen='/imagens/praia.png' texto='Praia' link=''/>
            <TravelTypes imagen='/imagens/moderno.png' texto='Moderno' link=''/>
            <TravelTypes imagen='/imagens/classico.png' texto='Clássico' link=''/>
            <TravelTypes imagen='/imagens/planeta.png' texto='e mais...' link=''/>
        </div>
    )
}

export default ContainerTravelTypes