import './travelTypes.css'

const TravelTypes = (props) => {
    return(
        <div className='travel-types'>
            <a href={props.link}><img src={props.imagen} alt='imagen ilustrativa'/></a>
            <label>{props.texto}</label>
        </div>
    )
}

export default TravelTypes