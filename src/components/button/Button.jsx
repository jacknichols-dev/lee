import classes from './Button.module.scss'

export const Button = (props) => {
    return (
        <button type={props.type} className={classes.btn} style={{color: props.color, background: props.bg}}>
            {props.children}
        </button>
    )
}
