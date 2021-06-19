import React, {useState, useEffect, Fragment} from 'react';
import { NavLink } from 'react-router-dom';

function Index2(){
    return(
<section className="telaProfissionalP">
<h5 class="ASOP">ASO.com</h5>
  <h1 class="TituloP">Bem vindo, usuário</h1>

  <section class="grid-menuP">
    <div class="perfilP">
    <NavLink to="PerfilP" style={{ textDecoration: 'none' }}> 
    <div>
      <button type="button" class="perfilP">
        <img src="imagens/usuario.svg" alt="ícone usuário"/>
        Perfil
      </button>
      </div>
    </NavLink>
    </div>
    <NavLink to="solicitacoesAgendamento" style={{ textDecoration: 'none' }}>
    <div class="agendadoP">
      <button type="button" class="agendadoP">
        <img src="imagens/relógio.svg" alt="ícone relógio"/>
        Solicitações de agendamento
      </button>
    </div>
    </NavLink>
    <NavLink to="sair" style={{ textDecoration: 'none' }}>
    <div class="sairP">
      <button type="button" class="sairP" style={{ textDecoration: 'none' }}>
        <img src="imagens/porta.svg" alt="ícone porta"/>
        Sair
      </button>
    </div>
    </NavLink>
  </section>

  <section class="MenuquadradoBrancoP">
    <div class="ServiçosPrestadosP">
      <NavLink to= "CadServico">
      <button type="button" class="botaoAdicionarServicosP">
        Cadastrar Serviços
      </button>
      </NavLink>
    </div>
    <NavLink to ="msgP">
    <div class="MensagensP">
      <button type="button" class="MensagensP">
        Mensagens
      </button>
    </div>
    </NavLink>
      <div class="VerAMais">
    <div class="conjuntoProfissionalP">
        <div class="res1ProfissionalP">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        </div>
        <NavLink to="vermaisP">
            <div>
            <button type="button" class="mais1ProfissionalP">Ver Mais</button>
            </div>
        </NavLink>
    </div>
    <div class="conjuntoProfissionalP2">
        <div class="res1ProfissionalP2">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        </div>
        <NavLink to="vermaisP">
            <div>
            <button type="button" class="mais1ProfissionalP2">Ver Mais</button>
            </div>
        </NavLink>
    </div>
    </div>
  </section>
  <div id="root"></div>
  </section>
  );
}
export default Index2;