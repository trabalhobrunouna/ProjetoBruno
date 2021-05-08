import React, { useState, useEffect } from 'react'

const EditAgend = (props) => {
  const [agend, setAgend] = useState(props.currentAgend)

  useEffect(() => {setAgend(props.currentAgend)}, [props])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setAgend({ ...agend, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        props.updateAgend(agend.id_agend, agend)
      }}
    >
      <label>horarioAgendado</label>
      <input
        type="text"
        name="horarioAgendado"
        value={agend.horarioAgendado}
        onChange={handleInputChange}
      />
      <button>Atualizar</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancelar
      </button>
    </form>
  )
}

export default EditAgend