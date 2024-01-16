import style from '../public/css/ProfileDev.module.css'

import { FaFacebookF, FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";


function Profiledev() {
    return (
        <div className={style.profile}>
            <div className={style.containerTP}>
                <h1 className={style.listSpan}>
                    <span className={style.animationHome}>D</span>
                    <span className={style.animationHome}>e</span>
                    <span className={style.animationHome}>s</span>
                    <span className={style.animationHome}>e</span>
                    <span className={style.animationHome}>n</span>
                    <span className={style.animationHome}>v</span>
                    <span className={style.animationHome}>o</span>
                    <span className={style.animationHome}>l</span>
                    <span className={style.animationHome}>v</span>
                    <span className={style.animationHome}>e</span>
                    <span className={style.animationHome}>d</span>
                    <span className={style.animationHome}>o</span>
                    <span className={style.animationHome}>r</span>
                </h1>
                <h1 className={style.frontend}>Front-end Jr.</h1>
                <p className={style.chamada}>Gosto de desenvolver aplicações dinâmicas, com layouts atrativos e com uma ótima experiência de usuário.</p>
            </div>

            <nav className={style.nav}>
                <a className={style.linksProfile} href='true' ><FaFacebookF /></a>
                <a className={style.linksProfile} href='true' ><FaInstagram /></a>
                <a className={style.linksProfile} href='true' ><FaTwitter /></a>
                <a className={style.linksProfile} href='true' ><FaWhatsapp /></a>
            </nav>
        </div>
    )
}

export default Profiledev