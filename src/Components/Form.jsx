import React, { useState } from 'react';
import '../Styles/Form.Component.css'

const Form = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (!validateEmail(email) || name.length <= 3 || lastName.length <= 3 || message.length <= 10) {
      setError('Por favor verifique su información nuevamente');
      return;
    }
    console.log({ name, lastName, email, message });

  
    setSuccessMessage(`Gracias ${name} ${lastName}, te contactaremos cuando antes vía mail`);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Apellido:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Apellido"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">e-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e-mail"
          />
        </div>

        <div className="form-group">
          <label htmlFor="Mensaje">Mensaje:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Comentario, duda o sugerencia"
          />
        </div>

        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;