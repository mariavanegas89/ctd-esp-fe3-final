import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div>
      <h2>¿Desea Mas Información?</h2>
      <p>Envienos sus preguntas o comentarios y un asesor se pondrá en contacto con usted.</p>
      <Form/>
    </div>
  )
}

export default Contact