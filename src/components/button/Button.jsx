import classes from './Button.module.scss'

export const Button = (props) => {
    return (
        <button type={props.type} className={classes.btn} >
            {props.children}
        </button>
    )
}
