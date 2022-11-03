import './cidades.css'

const Cidades = (props) => {
    return (
        <div className='cidadesCard'>
            <img src={props.imagen} alt='imagen ilustrativa' />
            <div>
                <label><br />{props.cidade}</label>
                <p>{props.pais}</p>
                <img src={props.ellipse} className='ellipse' alt='imagen ilustrativa'/>
            </div>
        </div>
    )
}

export default Cidades