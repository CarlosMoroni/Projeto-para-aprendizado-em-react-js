import './banner.css'

const Banner = (props) => {
    return(
        <div className='banner'>
            <img src={props.imagen} alt='Banner'/>
        </div>
    )
}

export default Banner
