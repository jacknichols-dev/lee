import classes from './Hero.module.scss'
import { Button } from '../button/Button'
import {HERO_SLIDES} from '../../data/heroSliderData'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


export const Hero = () => {
    SwiperCore.use([Navigation, Pagination, Autoplay]);

    return (
        <Swiper  
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        >
        <div className={classes.hero}>
            {
                HERO_SLIDES.map(slide=>(
                    <SwiperSlide key={slide.id}>
                        <div className={classes.hero__bg} style={{backgroundImage:`url(${slide.bgImg})`, backgroundSize: 'cover', height: '100vh', width: '100vw'}}>
                            <span className={classes.hero__grey}>
                                <h1 style={{textTransform: 'uppercase'}}>{slide.title}</h1>
                                <sub><em>By Lee Wood</em></sub>
                                <p>{slide.synopsis}</p>
                                <Button>Read more</Button>
                            </span>
                            <img src={slide.img} alt="" />
                        </div>
                    </SwiperSlide>
                ))
            }
        </div>
        </Swiper>
    )
}