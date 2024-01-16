import style from '../public/css/Home.module.css'

// import picture from '../static/naizinho.png'

function Home() {

    let data = new Date()
    let ano = data.getFullYear()
    let mes = data.getMonth()
    let dia = data.getDay()
    let idade = ano - 1993
   

    if(mes >= 4 && dia > 10){
       return idade 
    } else {
         idade--
    }

    return (
        <div className={style.home}>
                <p className={style.resumo}>
                   Me chamo Nailson Rocha, sou <span className={style.span}>desenvolvedor Front-end Júnior</span> baseado em JavaScript.
                   Natural de Salvador, Bahia, iniciei minha jornada no universo tecnológico 
                   em 2021. Numa oportunidade de 3 dias de teste gratuito no curso de HTML, 
                   simplesmente não conseguir parar. E assim permanecerei.
                </p>
                <p className={style.resumo}>
                   Hoje, Com meus {idade} anos, estou cursando <span className={style.span}>Análise e Desenvolvimento de Sistemas</span>, 
                   para implementar todo conhecimento adiquirido no desenvolvimento de aplicações e software de
                   ultima geração. Sou apaixonado em <span className={style.span}>UI bonitas e UX interativas</span>. Tudo isso em poucas 
                   linhas de códigos.
                </p>
                <p className={style.resumo}>
                    Meu foco principal é me tornar um <span className={style.span}>FullStack</span> de excelência, liderando projetos e,
                    atendendo o público em suas diferentes demandas. Com o JavaScript isso é possível. 
                    Uma linguagem multiplataforma, que fornece Frameworks e bibliotecas essencias nas
                    camadas do desenvolvimento (Front-End e Back-End).

                </p>
        </div>
    )
}

export default Home