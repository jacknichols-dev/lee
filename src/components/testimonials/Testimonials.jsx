import classes from './Testimonials.module.scss'

const Testimonials = () => {
    return (
        <section className={classes.testimonials}>
            <div className="container">
                <svg  className={classes['testimonials__quote--left']} xmlns="http://www.w3.org/2000/svg" width="170" height="127.5" viewBox="0 0 170 127.5">
                    <path id="Icon_open-double-quote-serif-left" data-name="Icon open-double-quote-serif-left" d="M63.75,0A63.937,63.937,0,0,0,0,63.75V127.5H63.75V63.75H21.25a42.353,42.353,0,0,1,42.5-42.5ZM170,0a63.937,63.937,0,0,0-63.75,63.75V127.5H170V63.75H127.5A42.353,42.353,0,0,1,170,21.25Z"/>
                </svg>
                <svg className={classes['testimonials__quote--right']}  xmlns="http://www.w3.org/2000/svg" width="163.2" height="122.4" viewBox="0 0 163.2 122.4">
                    <path id="Icon_open-double-quote-serif-right" data-name="Icon open-double-quote-serif-right" d="M0,0V61.2H40.8A40.659,40.659,0,0,1,0,102v20.4A61.38,61.38,0,0,0,61.2,61.2V0ZM102,0V61.2h40.8A40.659,40.659,0,0,1,102,102v20.4a61.38,61.38,0,0,0,61.2-61.2V0Z"/>
                </svg>
                <p className={classes.testimonials__review}>
                “Most of us have fantasised at some point in our life about what we would do if we won a lottery. Lee Wood provides us with a surprising yet believable scenario set in suburban UK and featuring contemporary social issues including drugs, prostitution, corruption, homelessness and the plight of the working class.”
                </p>
                <div style={{transform: 'translateY(2rem)'}} className={classes.testimonials__info}>
                <h2 style={{color: 'var(--sec)', textAlign: 'center'}}>Chris Smith</h2>
                <p style={{color: 'var(--ter)', textAlign: 'center'}}>Kent</p>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
