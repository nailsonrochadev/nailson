import style from '../public/css/hardSkills.module.css'


import Props from '../layout/props'


function HardSkills() {


    return (
        <div className={style.containerTecnologia}>
            <div className={style.card}>
                <h1>Hard Skills</h1>
                <h2 className={style.h2}>Frontend</h2>
                <h3 className={style.h3}>Development WEB</h3>
                <p className={style.introducao}>
                    Para criar aplicações bonitas, por mais simples que seja,
                    necessitamos de ferramentas que nos possibilitem criá-las.
                    Por isso, adquirir as principais habilidades para tirar 
                    interfaces do papel e torná-las visualmente funcionais.
                </p>
                <div className={style.list}>
                    <Props
                        habilidades='HTML'
                    />
                    <Props
                        habilidades='CSS'
                    />
                    <Props
                        habilidades='JavaScript'
                    />
                    <Props
                        habilidades='ReactJS'
                    />
                </div>
                
            </div>
            <div className={style.card}>
                <h2 className={style.titulo}>Backend</h2>
                <h3 className={style.h3}>Development WEB</h3>
                <p className={style.introducao}>
                    As possibilidades de manipulação de dados com o Node 
                    podem até ser subestimadas, mas não deveria. 
                </p>
                <p className={style.introducao}>
                    Meus conhecimentos com essa ferramenta se inicia 
                    com o simples "Hello World" impresso no terminal
                    e se complementa com, além de outros, o mecanismo 
                    de comunicação WebSocket. 
                </p>
                <div className={style.list}>
                    <Props
                        habilidades='Node'
                    />
                    <Props
                        habilidades='Express'
                    />
                </div>

            </div>
            <div className={style.card}>
                <h2 className={style.titulo}>Tools</h2>
                <p className={style.introducao}>
                    Tecnologia é um universo e, tudo se complementa.
                    Nesse caso, meus conhecimentos vão além da codificação. 
                </p>            

                <div className={style.list}>
                    <Props
                        ferramentas ='Mongo DB'
                    />
                    <Props
                        ferramentas ='MySQL'
                    />
                    <Props
                        ferramentas ='Scrum'
                    />
                    <Props
                        ferramentas ='Git'
                    />
                    <Props
                        ferramentas ='GitHub'
                    />
                     <Props
                        ferramentas ='Docker'
                    />
                </div>

            </div>

        </div>
    )
}

export default HardSkills