import React, { useState, useEffect } from 'react'

const EditAgend = (props) => {
  const [agend, setAgend] = useState(props.currentAgend)

  useEffect(() => {setAgend(props.currentAgend)}, [props])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setAgend({ ...agend, [name]: value })
  }

  return (
    <form className="telaAgendadoCliente"
      onSubmit={(event) => {
        event.preventDefault()
        props.updateAgend(agend.id_agend, agend)
      }}
    >
      <label>Editar horário agendado</label>
      <input
        type="text"
        className="editarhorarioAgendadoCliente"
        value={agend.horarioAgendado}
        onChange={handleInputChange}
      />
      <button>Atualizar</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-buttonCliente"
      >
        Cancelar
      </button>
    </form>
  )
}

export default EditAgend