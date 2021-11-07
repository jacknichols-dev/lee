import classes from './Hero.module.scss'
import heroImg from '../../assets/hero-img.jpg'

export const Hero = () => {
    return (
        <div className={classes.hero}>
            <div className={classes.hero__bg} style={{backgroundImage:`url(${heroImg})`, backgroundSize: 'cover', height: '100vh', width: '100vw'}}></div>
        </div>
    )
}
