import { NavLink } from 'react-router-dom'

function msgProfissional(){
    return (
        <section className="htmlMensagens">

        <p class="siteMP">ASO.com</p>
<section class="quadradoBrancoMP">

<NavLink to="profissional" style={{ textDecoration: 'none' }}>
    <button type="button" class="btnvoltarMP">
           <img src="imagens/voltar.svg" alt="ícone voltar" />
                <div class="voltarMP">
            Voltar
        </div>
        </button>
        </NavLink>

        <header class="cabecalhoMP">
            <p>Ciclano Cliente</p>
            <h3>CLIENTE</h3>
        </header>

        <section class="corpoMP">
            <p class="dataMP">12 de março</p>
            <section class="mensagensMP">

            <div class="cvClienteMP">
            <p class="msgClienteMP">Boa tarde Fulano, tudo bem? </p>
                <p class="horarioCvClienteMP">08:07</p>
            </div>
            <div class="cvProfissionalMP">
              <p class="msgProfissionalMP"> Boa tarde Ciclano, tudo bem, e você? Sobre o projeto, está tudo correndo conforme o planejado. 
                O resultado será entregue no prazo definido. </p> 
                <p class="horarioCvProfissionalMP">18:15</p>
            </div>
        </section>
        </section>

        <footer class="rodapeMP">
            <form class="envioMensagemMP">
                <input type="text" placeholder="Digite aqui sua mensagem..."></input>
                <button type="submit" class="botaoMensagemMP">Enviar</button>
            </form>
        </footer>

    </section>
    </section>
        )
}
export default msgProfissional;