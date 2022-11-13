import Banner from '../../componentes/Banner';
import ContainerTravelTypes from '../../componentes/ContaineTravelTypes';
import Head from '../../componentes/Head';
import Slider from '../../componentes/Slider';

import './home.css'

function Home() {
    return (
      <div>
          <Head img='/imagens/header.svg' className='display'/>
          <Banner imagen='/imagens/Banner.png'/>
          <ContainerTravelTypes/>
          <div className='texto-principal'>
            <div></div>
            <label>Vamos nessa? <br/>Então escolha seu continente</label>
          </div>
          <Slider/>
      </div>
    );
  }
  
  export default Home;