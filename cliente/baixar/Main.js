import React from "react";
import Home from "./home";
import Perfil from "./crud/Perfil"
import Agend from "./crud/Agend"
import VerMais from "./crud/VerMais"
import { Switch, Route } from 'react-router-dom'


const Main = () => (
  <main>
      <>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/perfil' component={Perfil}/>
        <Route path='/agendamentos' component={Agend}/>
        <Route path='/vermais' component={VerMais}/>        
        <Route path='/home' component={Home}/> 
      </Switch>
      </>
  </main>  
);

export default Main;