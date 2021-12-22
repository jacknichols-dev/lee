import { Button } from '../button/Button'
import classes from './AllBooksCta.module.scss'

const AllBooksCta = () => {
    return (
        <section className={classes.cta}>
            <div className="container">
                <div className={classes.cta__content}> 
                    <p style={{textAlign: 'center', width: '70%',margin: 'auto'}}>My books are available to purchase through my website, they 
                        are available in many formats and delivered with the utmost care. I am continuously 
                        writing new books so please check back every now and then to keep updated, 
                        alternatively you can subscribe to my newsletter where 
                        You can be the first  to know and read my new products!
                    </p>
                    <Button color="white" bg="var(--pri)" >All books</Button>
                </div>
            </div>
        </section>
    )
}

export default AllBooksCta
