import './qtdPaises.css'

const QtdPaises = (props) => {
    return(
        <div className="container">
            <label className='labelId'>{props.qtd}<br/></label>
            <label className='labelId2'>{props.info}</label>
        </div>
    )
}

export default QtdPaises