import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper'
import { Link } from 'react-router-dom'

import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import './slider.css'

const Slider = (props) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={true}
            className='slider'

        >              
            <SwiperSlide><Link to='Europa'><h1>Europa</h1><img src='/imagens/europa.jpg' alt='imagen ilustrativa'/></Link></SwiperSlide>
            <SwiperSlide><Link><h1>Asia</h1><img src='/imagens/asia.jpg' alt='imagen ilustrativa' /></Link></SwiperSlide>
            <SwiperSlide><Link><h1>America do Sul</h1><img src='/imagens/americaDoSul.jpg' alt='imagen ilustrativa' /></Link></SwiperSlide>
            <SwiperSlide><Link><h1>America do Norte</h1><img src='/imagens/americaDoNorte.jpg' alt='imagen ilustrativa' /></Link></SwiperSlide>

        </Swiper>
    )
}

export default Slider