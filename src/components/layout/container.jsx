import style from '../public/css/Container.module.css'

function Container(props){
    return (
    <div className={style.container}>
        {props.children}
    </div>
)
}

export default Container