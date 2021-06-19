import { NavLink } from 'react-router-dom'

function msgCliente(){
    return (
        <section className="htmlMensagens">

        <p class="siteMC">ASO.com</p>
<section class="quadradoBrancoMC">

<NavLink to="home" style={{ textDecoration: 'none' }}>
    <button type="button" class="btnvoltarMC">
           <img src="imagens/voltar.svg"  alt="ícone voltar" />
                <div class="voltarMC">
            Voltar
        </div>
        </button>
        </NavLink>
        <header class="cabecalhoMC">
            <p>Fulano Profissional</p>
            <h3>WEB DESIGNER</h3>
        </header>

        <section class="corpoMC">
            <p class="dataMC">12 de março</p>
            <section class="mensagensMC">

            <div class="cvClienteMC">
            <p class="msgClienteMC">Boa tarde Fulano, tudo bem? </p>
                <p class="horarioCvClienteMC">08:07</p>
            </div>
            <div class="cvProfissionalMC">
              <p class="msgProfissionalMC"> Boa tarde Ciclano, tudo bem, e você? Sobre o projeto, está tudo correndo conforme o planejado. 
                O resultado será entregue no prazo definido. </p> 
                <p class="horarioCvProfissionalMC">18:15</p>
            </div>
        </section>
        </section>

        <footer class="rodapeMC">
            <form class="envioMensagemMC">
                <div class="testeMC">
                <input class="TextoMC"type="text" placeholder="Digite aqui sua mensagem..."></input>
                </div>
                <div class="testebotaoMC">
                <button type="submit" class="botaoMensagemMC">Enviar</button>
                </div>
            </form>
        </footer>

    </section>
    </section>
    )
}
export default msgCliente;