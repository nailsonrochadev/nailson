import style from '../public/css/ProfileDev.module.css'
import Contact from './Contact'


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
            <Contact/>
        </div>
    )
}

export default Profiledev