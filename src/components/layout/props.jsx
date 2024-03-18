import style from '../public/css/props.module.css'


function Props({ habilidades, ferramentas }) {
    return (
        <ul className={style.ul}>
            <li className={style.listHabilidades}>
                {habilidades}
            </li>
            <li className={style.listFerramentas}>
                {ferramentas}
            </li>
        </ul>

    )
}

export default Props