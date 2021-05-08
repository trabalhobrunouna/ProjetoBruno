import React, {useState, useEffect, Fragment} from 'react'
import EditarPerfil from '../forms/EditarPerfil'

const Perfil = () => {
    const baseUrl = "https://localhost:8080/perfil";

    const initialFormState = {id: null, email: '', senha: '', nome: '', sobrenome: '', cidade: '', estado: '', 
                              usuario: true, genero: true}
    
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
        setCurrentUser({id: user.id, email: user.email, senha: user.senha, nome: user.nome, sobrenome: user.sobrenome, 
            cidade: user.cidade, estado: user.estado, usuario: user.usuario, genero: user.genero})
    }

    return (
       <div className="quadro">
           <h1>Perfil</h1> 
           <div className="flex-row">
            <div className="flex-large">
            <div className="dadosCliente" users={users} editRow={editRow}/> 
                   <Fragment>
                       <h2>Editar Cadastro</h2>
                       <EditarPerfil
                           editing={editing}
                           setEditing={setEditing}
                           currentUser={currentUser}
                           updateUser={updateUser}
                           />
                        </Fragment>
             </div>
           </div>
          </div>
               )
                    
async function getUsersService() {
    fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
        setUsers(data);
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