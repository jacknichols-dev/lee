import classes from './Footer.module.scss'
import { FooterBottom } from './FooterBottom'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button } from '../button/Button';

const Footer = () => {
    return (
        <>
        <footer className={classes.footer}>
            <div className="container">
                <div className={classes.footer__content}>
                    <section className={`${classes.footer__section} ${classes.footer__subscribe}`}>
                        <h1>Subscribe</h1>
                        <p>I publish a newsletter once a month with behind the scenes info, updates and details of special offers and new releases. If you would be happy to hear from me please pop your email address in the box.
                        </p>
                        <form>
                            <label>Email address</label>
                            <input type="email" placeholder="Please enter your email" />
                            <Button type="submit" bg="var(--pri)" color="white">Subscribe</Button>
                        </form>
                    </section>
                    <section className={`${classes.footer__section} ${classes.footer__contact}`}>
                        <h1>Contact</h1>
                        <SupportAgentIcon/>
                        <p>Contact Agent</p>
                        <p style={{color: 'var(--pri)'}}>publishing@soundpublishing.co.uk</p>
                        <MailOutlineIcon />
                        <p>Contact Author</p>
                        <p style={{color: 'var(--pri)'}}>lee@leewoodauthor.com</p>

                    </section>
                    <section className={`${classes.footer__section} ${classes.footer__navigate}`}>
                        <h1>Navigate</h1>
                        <ul>
                            <li>Home</li>
                            <li>Books</li>
                            <li>About</li>
                            <li>Terms and Conditions</li>
                        </ul>
                    </section>
                    <section className={`${classes.footer__section} ${classes.footer__socials}`}>
                        <h1>Socials</h1>  
                        <div className={classes['footer__socials--icons']}>
                            <div className={classes['footer__socials--icon']}>
                                <FacebookOutlinedIcon sx={{ fontSize: 30 }} />
                                <label>Facebook</label>
                            </div>
                            <div className={classes['footer__socials--icon']}>
                                <LinkedInIcon sx={{ fontSize: 30 }} />
                                <label>Facebook</label>
                            </div>
                            <div className={classes['footer__socials--icon']}>
                                <TwitterIcon sx={{ fontSize: 30 }} />
                                <label>Facebook</label>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </footer>
        <FooterBottom />
        </>
    )
}

export default Footer
