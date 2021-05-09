// Importantando o React
import React from "react";
// Importantando o component Home
import Index2 from "./index2";
// Importantando o component Contact
import Login from "./login/login";
import Cadastro from "./teladecadastro/src/App";
import Home from "./Cliente/home";
import Perfil from "./Cliente/CRUD/Perfil";
import Agendados from "./Cliente/CRUD/Agend";
import VerMais from "./Cliente/CRUD/VerMais";
// Importanto o component <Switch /> e <Route /> da nossa Lib de rotas
import { Switch, Route } from 'react-router-dom'

const Main = () => (
  <main>
    <>
      <Switch>
        <Route exact path='/' component={Index2}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/cadastro' component={Cadastro}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/perfil' component={Perfil}/>
        <Route exact path='/agendados' component={Agendados}/>
        <Route exact path='/vermais' component={VerMais}/>
        <Route exact path='/sair' component={Index2}/>
      </Switch>
    </>
  </main>  
);

export default Main;