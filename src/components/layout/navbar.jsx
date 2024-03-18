import { Link } from "react-router-dom";

import style from '../public/css/navbar.module.css'

function Navbar(){
    
    return(
        <nav className={style.nav}>
            <div className={style.caixaLogo}>                    
                <h1 className={style.logo}>
                    <span className={style.name}>N</span>
                    <span className={style.name}>A</span>
                    <span className={style.name}>I</span>
                    <span className={style.name}>L</span>
                    <span className={style.name}>S</span>
                    <span className={style.name}>O</span>
                    <span className={style.name}>N</span>
                    <span>{' '}</span>
                    <span className={style.name}>R</span>
                    <span className={style.name}>O</span>
                    <span className={style.name}>C</span>
                    <span className={style.name}>H</span>
                    <span className={style.name}>A</span>
                </h1>
            </div>
            <ul className={style.ul}>
                <li className={style.list} >
                    <Link className={style.item} to="/">
                        Ab<span>out</span>
                    </Link>
                </li>
                <li className={style.list} >
                    <Link className={style.item} to="/hardSkills">
                        Sk<span>ills</span>
                    </Link>
                </li>
            
            </ul>
        </nav>
    )
}

export default Navbar