import classes from './Footer.module.scss'
import { FooterBottom } from './FooterBottom'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Button } from '../button/Button'
import { Link } from 'react-router-dom'
import SendIcon from '@mui/icons-material/Send';

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
                            <div style={{margin: 'auto'}}>
                            <Button type="submit" bg="var(--pri)" color="white">Subscribe <SendIcon /></Button>
                            </div>
                        </form>
                    </section>
                    <section className={`${classes.footer__section} ${classes.footer__contact}`}>
                        <h1>Contact</h1>
                        <SupportAgentIcon sx={{ fontSize: 30 }}/>
                        <p style={{paddingTop: '1rem'}}>Agent</p>
                        <p style={{color: 'var(--pri)', paddingBottom: '2rem', fontWeight: '600'}}>publishing@soundpublishing.co.uk</p>
                        <MailOutlineIcon sx={{ fontSize: 30 }}/>
                        <p style={{paddingTop: '1rem'}}>Author</p>
                        <p style={{color: 'var(--pri)', fontWeight: '600'}}>lee@leewoodauthor.com</p>

                    </section>
                    <section className={`${classes.footer__section} ${classes.footer__navigate}`}>
                        <h1>Navigate</h1>
                        <ul>
                           <Link to='/'>
                             <li>Home</li>
                           </Link>
                            <Link to='/books'>
                            <li>Books</li>
                            </Link>
                            <Link to='/about'>
                            <li>About</li>
                            </Link>
                            <li>Terms &#38; Conditions</li>
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
                                <label>Linkedin</label>
                            </div>
                            <div className={classes['footer__socials--icon']}>
                                <TwitterIcon sx={{ fontSize: 30 }} />
                                <label>Twitter</label>
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
