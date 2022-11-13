import './banner.css'

const Banner = (props) => {
    return(
        <div className='banner'>
            <img src={props.imagen} alt='Banner'/>
            <p>5 Continentes, infinitas possibilidades.</p>
        </div>

    )
}

export default Banner
