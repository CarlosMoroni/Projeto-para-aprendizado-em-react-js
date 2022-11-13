import './head.css'

const Head = (props) => {
    return (
        <head className='container'>
            <div className="header">
                <img src={props.img} alt='world trip' />
            </div>
        </head>
    )
}

export default Head
