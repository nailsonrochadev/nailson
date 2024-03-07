import style from '../public/css/ProfileDev.module.css'

import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithubSquare, FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


function Profiledev() {
    return (
        <div className={style.profile}>
            <div className={style.containerTP}>
                <h1 className={style.listSpan}>
                    <span className={style.animationHome}>F</span>
                    <span className={style.animationHome}>r</span>
                    <span className={style.animationHome}>o</span>
                    <span className={style.animationHome}>n</span>
                    <span className={style.animationHome}>t</span>
                    <span className={style.animationHome}>e</span>
                    <span className={style.animationHome}>n</span>
                    <span className={style.animationHome}>d</span>
                </h1>
                <h1 className={style.frontend}>developer.</h1>
                <p className={style.chamada}>Gosto de desenvolver aplicações dinâmicas, com layouts atrativos e com uma ótima experiência de usuário.</p>
            </div>

            <nav className={style.nav}>
                
                <a className={style.linksProfile} href='https://www.facebook.com/odevnailsonrocha/' target='blank'><FaFacebookSquare /></a>
                <a className={style.linksProfile} href='https://www.instagram.com/nailsonrochadev/' target='blank' ><FaInstagram /></a>
                <a className={style.linksProfile} href='https://twitter.com/nailsonrochadev' target='blank'><FaXTwitter /></a>
                <a className={style.linksProfile} href='https://wa.me/5574988158808?text=Como%20posso%20ajudar?' target='blank' ><FaWhatsapp /></a>
                <a className={style.linksProfile} href='https://www.linkedin.com/in/nailsonrochadev/' target='blank'><FaLinkedin /></a>
                <a className={style.linksProfile} href='https://github.com/nailsonrochadev' target='blank'><FaGithubSquare /></a>

            </nav>
        </div>
    )
}

export default Profiledev