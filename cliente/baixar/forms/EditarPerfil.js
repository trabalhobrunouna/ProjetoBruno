import React, { useState, useEffect } from 'react'

const EditarPerfil = (props) => {
  const [user, setUser] = useState(props.currentUser)

  useEffect(() => {setUser(props.currentUser)}, [props])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

return (
    <table>              
    <form
      onSubmit={(event) => {
        event.preventDefault()
        props.updateUser(user.id, user)
      }}
    >
        <tr key={user.email}>
      <label>email</label>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleInputChange}
      />
</tr>
<tr key={user.senha}>
      <label>senha</label>
      <input
        type="text"
        name="senha"
        value={user.senha}
        onChange={handleInputChange}
      />
</tr>
<tr key={user.nome}>
      <label>nome</label>
      <input
        type="text"
        name="nome"
        value={user.nome}
        onChange={handleInputChange}
      />
</tr>
<tr key={user.sobrenome}>
      <label>sobrenome</label>
      <input
        type="text"
        name="sobrenome"
        value={user.sobrenome}
        onChange={handleInputChange}
      />
</tr>
<tr key={user.cidade}>
      <label>cidade</label>
      <input
        type="text"
        name="cidade"
        value={user.cidade}
        onChange={handleInputChange}
      />
</tr>
<tr key={user.estado}>
      <label>estado</label>
      <input
        type="text"
        name="estado"
        value={user.estado}
        onChange={handleInputChange}
      />
</tr>
<tr key={user.genero}>
      <label>genero</label>
      <input
        type="radio"
        name="genero"
        value={user.genero}
        onChange={handleInputChange}
      />
</tr>
<tr>
      <button>Concluir edição</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-buttonCliente"
      >
        Cancelar
      </button>
</tr>
</form>
</table>

  )
}

export default EditarPerfil