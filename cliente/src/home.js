import React, {useState, useEffect, Fragment} from 'react'
import { NavLink } from 'react-router-dom'
import Agend from './crud/Agend'
import Buscar from './crud/Buscar'
import Perfil from './crud/Perfil'
import VerMais from './crud/VerMais'

document.title = "página do cliente";

function Main() {
  return (
  <section class="html">
    <p class="site">ASO.com</p>
    <h3 class="saudacao">Bem Vindo, Fulano!</h3>

    <section class="grid-menu">

    <NavLink to="Dados"> 
      <div class="perfil" id="perfil">
            <button type="button" class="perfil">
            <img src="imagens/usuario.svg" alt="ícone usuário" />
            Perfil
            </button>
        </div>
        </NavLink>

        <NavLink to="Agendado">
        <div class="agendado">
            <button type="button" class="agendado">
            <img src="imagens/relógio.svg" alt="ícone relógio" />
            Serviços agendados
            </button>
        </div>
        </NavLink>

        <NavLink to="sair">
        <div class="sair">
            <button type="button" class="sair">
            <img src="imagens/porta.svg" alt="ícone porta" />
            Sair
            </button>
        </div>    
        </NavLink>

    </section>

<h4 class="mensagem">Encontre profissionais com apenas um clique:</h4>

<form class="buscar">
    <input type="text" placeholder="Digite aqui o serviço desejado"></input>
    <button type="submit" class="botao">Buscar</button>
</form>

<section class="resultado">
    <div class="conjunto">
        <div class="res1">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            <p>Nome do profissional: Fulano</p>
            <p>Avaliação: 10/10</p>
        </div>
            <button type="button" class="mais">Ver Mais</button>
    </div>
    <div class="conjunto">
    <div class="res2">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        <p>Nome do profissional: Fulano</p>
        <p>Avaliação: 10/10</p>
    </div>
        <button type="button" class="mais">Ver Mais</button>
    </div>
    <div class="conjunto">
        <div class="res3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            <p>Nome do profissional: Fulano</p>
            <p>Avaliação: 9.5/10</p>
        </div>
            <button type="button" class="mais">Ver Mais</button>
    </div>
    <button type="button" class="maisRes">Mais resultados</button>
</section>
</section>


  
  );
}


export default Main;
