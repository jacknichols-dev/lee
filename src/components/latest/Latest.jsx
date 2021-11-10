import classes from './Latest.module.scss'

export const Latest = () => {
    return (
        <section className={classes.latest}>
        <div className="container">
            <div className={classes.latest__content}>
            <div className={classes.latest__tb}>
                <h1>Latest Releases</h1>
                <p><em>“Lee Wood writes his thrillers as if he were building roller coasters.”</em></p>
                <h1 className={classes.latest__heading}>- ASSOCIATED PRESS</h1>
            </div>
            <div className={classes.latest__slider}>
                Silder
            </div>
            </div>
        </div>
        </section>
    )
}
