import classes from "./Header.module.scss"
import logo from "../../assets/lee-logo.svg"
import TopInfo from "./TopInfo"

export const Header = () => {
    return (
        <>
        <TopInfo />
        <header className={classes.header} >
           
              <img src={logo} alt="lee wood logo" className={classes.header__logo} />
              <ul className={classes.header__list}>
                  <li className={classes['header__list--item']}>Home</li>
                  <li className={classes['header__list--item']}>Books</li>
                  <li className={classes['header__list--item']}>About</li>
              </ul>
              <div className={classes.header__icons}>
                  
              </div>

        </header>
        </>
    )
}
