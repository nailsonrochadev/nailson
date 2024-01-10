import { Link } from "react-router-dom";

import style from '../styles/Navbar.module.css'

function Navbar(){
    return(
        <nav className={style.nav}>
            <ul className={style.ul}>
                <li className={style.list} >
                    <Link className={style.item} to="/">
                        Home
                    </Link>
                </li>
                <li className={style.list} >
                    <Link className={style.item} to="/tecnologias">
                        Tecnologias
                    </Link>
                </li>
                <li className={style.list} >
                    <Link className={style.item} to="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar