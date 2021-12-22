import { Button } from '../button/Button'
import classes from './Product.module.scss'

export const Product = ({book}) => {
    return (
        <div className={classes.product}>
            <div className={classes.product__imgContainer}>
                <img src={book.image} alt="" />
            </div>
            <div className={classes.product__infoContainer}>
                <h1>{book.title}</h1>
                <p>{book.shortDesc}</p>
                <div className={classes['product__infoContainer--bottom']}>
                    <h2>£{book.price}</h2>
                    <Button>View More</Button>
                </div>
            </div>
        </div>
    )
}
