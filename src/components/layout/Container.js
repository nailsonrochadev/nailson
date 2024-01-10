import style from '../styles/Container.module.css'

function Container(props){
    return (
    <div className={style.container}>
        {props.children}
    </div>
)
}

export default Container