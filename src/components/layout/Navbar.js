import { Link } from "react-router-dom";

import { RiAliensFill } from "react-icons/ri";


import style from '../public/css/Navbar.module.css'

function Navbar(){
    return(
        <nav className={style.nav}>
            <div className={style.container}>
                <h1 className={style.name}>
                    naro
                </h1>
                <RiAliensFill className={style.logo} />
            </div>
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