import React, {useState, useEffect, Fragment} from 'react'
import { NavLink } from 'react-router-dom'

document.title = "Login";


function Login(){
    return(
<section>
<p class="logoASOlogin">ASO.com</p>
    <h1 class="tituloLogin">Login</h1>
    
    <section class="areaLogin">
        <p class="msgLogin">Já possui registro?</p>
        <p class="emailLogin">Email</p>

        <div class="campoEmailLogin">
            <input type="text" placeholder="exemplo@email.com"></input>
        </div>

        <p class="senhaLogin">Senha</p>
        <form class="campoSenhaLogin">
            <input type="text" placeholder="insira sua senha"></input>
        </form>


        
        <div>
        
        <div class="centralizarLogin">
        <NavLink to="login" style={{ textDecoration: 'none' }}>
        <button type="submit" class="entrarLogin">Entrar</button>
        </NavLink>
        <p class="registLogin">Ainda não possui uma conta ASO? Registre-se agora:</p>
        </div>
        

        <NavLink to="cadastro" style={{ textDecoration: 'none' }}> 
        <div>
        <button type="button" class="registrarLogin">Registrar</button>
        </div>
        </NavLink>
        
        </div>
    </section>
    </section>
    );
}

export default Login;