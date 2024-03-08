import React from "react"

import style from '../public/css/Contact.module.css'

import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithubSquare, FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
    return (
        <nav className={style.nav}>
            <a className={style.links} href='https://www.facebook.com/odevnailsonrocha/' target='blank'><FaFacebookSquare /></a>
            <a className={style.links} href='https://www.instagram.com/nailsonrochadev/' target='blank' ><FaInstagram /></a>
            <a className={style.links} href='https://twitter.com/nailsonrochadev' target='blank'><FaXTwitter /></a>
            <a className={style.links} href='https://wa.me/5574988158808?text=Como%20posso%20ajudar?' target='blank' ><FaWhatsapp /></a>
            <a className={style.links} href='https://www.linkedin.com/in/nailsonrochadev/' target='blank'><FaLinkedin /></a>
            <a className={style.links} href='https://github.com/nailsonrochadev' target='blank'><FaGithubSquare /></a>
        </nav>
    )
}