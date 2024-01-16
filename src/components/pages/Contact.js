import style from '../public/css/Contact.module.css'

function Contact() {
    return (
        <div className={style.container}>
            <h1 className={style.titulo1}>Me mande uma mensagem!</h1>
            <p className={style.titulo3}> Você tem alguma dúvida, sugestão, critica, elogios ou deseja fazer uma proposta? </p>
            
            
            <form className={style.form} action="/DadosForm" method="post">
                <div className={style.cardInput}>
                    <label className={style.label} for="nome">Seu nome:</label>
                    <input className={style.input} type="text" id="nome" name="nome" placeholder="Digite seu nome" />
                </div>
                <div className={style.cardInput}>
                    <label className={style.label} for="email">Endereço de email:</label>
                    <input className={style.input} type="email" id="email" name="email" placeholder="Insira seu endereço de email" />
                </div>
                <div className={style.cardInput}>
                    <label className={style.label} for="msg">Sua mensagem:</label>
                    <textarea className={style.input} id="msg" placeholder="Olá, Nailson! Podemos conversar?"></textarea>
                </div>
                <div className={style.cardInput}>
                    <button type="submit" className={style.button}>Enviar</button>
                </div>

            </form>
        </div>

    )
}

export default Contact