import React, {useState, useEffect, Fragment} from 'react'
import EditarPerfil from '../Forms/EditarPerfil'
import { NavLink } from 'react-router-dom'
import UserTable from "../Tabelas/UserTable"

const Perfil = () => {
    const baseUrl = "https://bancocadastro.herokuapp.com/cadastros/6";

    const initialFormState = {id: null, usuario: '', email: '', senha: '', confirmarsenha: '', nome: '' , sobrenome: '',
     cidade: '', estado: '', genero: ''}
    
    const [ users, setUsers ] = useState([])
    const [ currentUser, setCurrentUser ] = useState(initialFormState)
    const [ editing, setEditing ] = useState(true)

    useEffect(() => { 
     getUsersService();
     }, []);

    const updateUser = (id, updateUser) => {
        updateUserService(updateUser)
    }

    const editRow = user => {
        setEditing(true)
        setCurrentUser({id: user.id, usuario: user.usuario, email: user.email, senha: user.senha, 
            confirmarsenha: user.confirmarsenha, nome: user.nome, sobrenome: user.sobrenome, cidade: user.cidade, 
            estado: user.estado, genero: user.genero})
    }

    return (
        <section>
        <p class="siteCliente" >ASO.com</p>
       <div className="telaPerfilCliente">
           <NavLink to="home" style={{ textDecoration: 'none' }}> 
         <div class="voltarCliente">
            <button type="button" class="perfilCliente">
            Voltar
            </button>
         </div>
        </NavLink>
           <h1 className="msgPerfilCliente">Perfil</h1> 
           <section className="resultadoCliente" users={users}>
           <UserTable users={users} />
           <div className="flex-row">
            <div className="flex-large">
            <div className="dadosClienteCliente" users={users} editRow={editRow}/> 
                 
                   <Fragment>
                       <EditarPerfil
                           editing={editing}
                           setEditing={setEditing}
                           currentUser={currentUser}
                           updateUser={updateUser}
                           />
                        </Fragment>

             </div>
           </div>
           </section>
          </div>
          </section>
               )
                    
async function getUsersService() {
    fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
        setUsers([data]);
    });
}

async function updateUserService(user) {
    fetch(baseUrl+user.id, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
    },
    method: "PUT",
    body: JSON.stringify(user)
})
.then(
    response => {
        setCurrentUser(user);
        getUsersService()
    })   
}
}

export default Perfil