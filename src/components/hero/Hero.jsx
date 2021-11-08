import classes from './Hero.module.scss'
import heroImg from '../../assets/hero-img.jpg'

export const Hero = () => {
    return (
        <div className={classes.hero}>
            <div className={classes.hero__bg} style={{backgroundImage:`url(${heroImg})`, backgroundSize: 'cover', height: '100vh', width: '100vw'}}>
                <span className={classes.hero__blue}></span>
                <span className={classes.hero__grey}>
                    <h1>Mr. Lucky</h1>
                    <sub><em>By Lee Wood</em></sub>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>
                <button>Read more</button>
                </span>
            </div>
        </div>
    )
}
