import classes from './Latest.module.scss'

import { Button } from '../button/Button'

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import {LATEST_DATA} from '../../data/latestData'

export const Latest = () => {
    SwiperCore.use([Navigation, Pagination, Autoplay]);
    return (
        <section className={classes.latest}>
        <div className="container">
            <div className={classes.latest__content}>

                <div className={classes.latest__tb}>
                    <h1 style={{color: 'var(--ter)'}}>Latest Releases</h1>
                    <p><em>“Lee Wood writes his thrillers as if he were building roller coasters.”</em></p>
                    <h1 className={classes.latest__heading}>- ASSOCIATED PRESS</h1>
                </div>

                <div className={classes.latest__slider}>
                    <div className={classes['latest__slider--slides']}>
                        <Swiper
                        slidesPerView={3}
                        spaceBetween={5}
                        navigation
                        autoplay={{ delay: 5000 }}
                        >
                                {
                                    LATEST_DATA.map(latestItem => (
                                        <div className={classes['latest__slider--container']}>
                                            <SwiperSlide>
                                                <div className={classes['latest__slider--slide']}>
                                                    <img src={latestItem.img} alt="book" />
                                                    <h3>{latestItem.title}</h3>
                                                    <Button>See More</Button>
                                                </div>
                                            </SwiperSlide>
                                        </div>
                                    ))
                                }
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
