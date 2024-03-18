import style from '../public/css/home.module.css'

// import picture from '../static/naizinho.png'

function Home() {


    return (
        <div className={style.home}>
            <div className={style.cardResumo}>
                <h1>About</h1>
                <p className={style.resumo}>
                    Em 2022 decidi orbitar em tecnologia conhecendo o universo da programação.
                    Uma grata supresa. Fui atraído por códigos que tem capacidade de entregar interfaces perfeitas ao usuário. Ida sem volta.
                </p>
                <p className={style.resumo}>
                    Com capacidade multiplataforma, o JavaScript foi minha escolha como linguagem de
                    programação. Isso me possibilita trabalhar em diferentes plataformas sem a necessidade
                    de migrar de linguagem. O que torna a experiência perfeita. Mas é lógico que quero experimentar
                    novos ares.

                </p>
                <p className={style.resumo}>
                    Meu foco principal é me tornar um FullStack de excelência, liderando projetos,
                    desenvolvendo soluções, colaborando com a comunidade e, atender o público em suas diferentes demandas.

                </p>
            </div>
            <div className={style.cardAcademy}>
                <h2>Academic education</h2>
                <ul>
                    <li>Graduando em Analise e Desenvolvimento de Sistemas - <span>Gran Faculdade - 2024</span></li>
                </ul>
            </div>
            <div className={style.cardAcademy}>
                <h2>additional training</h2>
                <ul className={style.cardAddTraining}>
                    <li >Publicidade</li>
                    <li >Propaganda</li>
                    <li >Marketing</li>
                    <li >Liderança</li>
                    <li >Empreendedorismo</li>
                </ul>
            </div>
            <div className={style.cardAcademy}>
                <h2>Soft Skill</h2>
                <ul>
                    <li>Comunicação interpessoal</li>
                    <li>Gestão</li>
                    <li>Gerenciamento de crises</li>
                    <li>Trabalho em Equipe</li>
                    <li>Liderança</li>
                    <li>Adaptabilidade</li>
                    <li>Resiliência</li>
                    <li>Apendizagem contínua</li>
                </ul>
            </div>

        </div>
    )
}

export default Home