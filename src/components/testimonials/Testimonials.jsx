import classes from './Testimonials.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

const Testimonials = () => {
    SwiperCore.use([ Pagination, Autoplay]);

    const TESTIMONIAL_DATA = [
        {
            id: 1,
            review: 'Most of us have fantasised at some point in our life about what we would do if we won a lottery. Lee Wood provides us with a surprising yet believable scenario set in suburban UK and featuring contemporary social issues including drugs, prostitution, corruption, homelessness and the plight of the working class.',
            name: 'Chris Smith',
            location: 'Kent'
        },
        {
            id: 2,
            review: 'Each tale was a complex web of intrigue and devious dealings with surprise endings. This series are not to be missed. ',
            name: 'Deewun',
            location: 'Toronto'
        },
        {
            id: 3,
            review: `I enjoyed the writer's style of writing. He provided thrilling outcomes with a comical touch.
            I will definitely buy his next Box Set.`,
            name: 'Christopher Williams',
            location: 'Florida'
        },
        {
            id: 4,
            review: 'With a wonderfully well worked out Trentbridge setting (down to the last detail) Lee Wood is an accomplished writer who has clearly thought out his scenario in advance.',
            name: 'J. Ramsden',
            location: 'Cambridge'
        },
    ]
    return (
        
        <section className={classes.testimonials}>
                            <svg  className={classes['testimonials__quote--left']} xmlns="http://www.w3.org/2000/svg" width="170" height="127.5" viewBox="0 0 170 127.5">
                            <path id="Icon_open-double-quote-serif-left" data-name="Icon open-double-quote-serif-left" d="M63.75,0A63.937,63.937,0,0,0,0,63.75V127.5H63.75V63.75H21.25a42.353,42.353,0,0,1,42.5-42.5ZM170,0a63.937,63.937,0,0,0-63.75,63.75V127.5H170V63.75H127.5A42.353,42.353,0,0,1,170,21.25Z"/>
                            </svg>
                            <svg className={classes['testimonials__quote--right']}  xmlns="http://www.w3.org/2000/svg" width="163.2" height="122.4" viewBox="0 0 163.2 122.4">
                                <path id="Icon_open-double-quote-serif-right" data-name="Icon open-double-quote-serif-right" d="M0,0V61.2H40.8A40.659,40.659,0,0,1,0,102v20.4A61.38,61.38,0,0,0,61.2,61.2V0ZM102,0V61.2h40.8A40.659,40.659,0,0,1,102,102v20.4a61.38,61.38,0,0,0,61.2-61.2V0Z"/>
                            </svg>
            <Swiper
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            >
            <div className="container">

                {
                    TESTIMONIAL_DATA.map(testimonial=>(
                        
                        <SwiperSlide>
                        <div style={{height: '56rem'}} className={classes.testimonials__content}>
                            <p className={classes.testimonials__review}>
                            {testimonial.review}
                            </p>
                            <div style={{marginTop: '2rem'}} className={classes.testimonials__info}>
                                <h2 style={{color: 'var(--sec)', textAlign: 'center'}}>{testimonial.name}</h2>
                                <p style={{color: 'var(--ter)', textAlign: 'center', fontWeight: '600', fontSize: '1.4rem'}}><em>{testimonial.location}</em>
                                </p>
                            </div>
                            </div>
                    </SwiperSlide>
                    ))
                }
            </div>
                </Swiper>
        </section>
       
    )
}

export default Testimonials
