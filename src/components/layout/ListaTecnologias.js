import style from '../styles/ListaTecnologias.module.css'


function ListaTecnologias({ habilidades, ferramentas }) {
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

export default ListaTecnologias