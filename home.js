import React, {useState, useEffect, Fragment} from 'react'
import { NavLink } from 'react-router-dom'

document.title = "Página do cliente";

function Home() {
  return (
  <section class="htmlCliente">
    <p class="siteCliente">ASO.com</p>
    <h3 class="saudacaoCliente">Bem Vindo, Fulano!</h3>

    <section class="grid-menuCliente">

    <NavLink to="Perfil" style={{ textDecoration: 'none' }}> 
      <div class="perfilCliente">
            <button type="button" class="perfilCliente">
            <img src="imagens/usuario.svg" alt="ícone usuário" />
            Perfil
            </button>
        </div>
        </NavLink>

        <NavLink to="Agendamentos" style={{ textDecoration: 'none' }}>
        <div class="agendadoCliente">
            <button type="button" class="agendadoCliente">
            <img src="imagens/relógio.svg" alt="ícone relógio" />
            Serviços agendados
            </button>
        </div>
        </NavLink>

        <NavLink to="sair" style={{ textDecoration: 'none' }}>
        <div class="sairCliente">
            <button type="button" class="sairCliente">
            <img src="imagens/porta.svg" alt="ícone porta" />
            Sair
            </button>
        </div>    
        </NavLink>

    </section>

<h4 class="mensagemCliente">Encontre profissionais com apenas um clique:</h4>

<form class="buscarCliente">
    <input type="text" placeholder="Digite aqui o serviço desejado"></input>
    <button type="submit" class="botaoCliente">Buscar</button>
</form>

<section class="resultadoCliente">
    <div class="conjuntoCliente">
        <div class="res1Cliente">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            <p>Nome do profissional: Fulano</p>
            <p>Avaliação: 10/10</p>
        </div>
        <NavLink to="vermais">
            <div>
            <button type="button" class="mais1Cliente">Ver Mais</button>
            </div>
        </NavLink>
    </div>
    <div class="conjuntoCliente">
    <div class="res2Cliente">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        <p>Nome do profissional: Fulano</p>
        <p>Avaliação: 10/10</p>
    </div>
    <NavLink to="vermais">
            <div>
            <button type="button" class="maisCliente">Ver Mais</button>
            </div>
        </NavLink>
    </div>
    <div class="conjuntoCliente">
        <div class="res3Cliente">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            <p>Nome do profissional: Fulano</p>
            <p>Avaliação: 9.5/10</p>
        </div>
        
        <NavLink to="vermais">
            <div>
            <button type="button" class="maisCliente">Ver Mais</button>
            </div>
        </NavLink>

    </div>
    <button type="button" class="maisResCliente">Mais resultados</button>
</section>
</section>

  );
}

export default Home;
