import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('/api/users/register', { name, email, password });
      console.log(response.data);
      // Redirecionar para o login ou mostrar mensagem de sucesso
    } catch (error) {
      console.error('Error registering', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input 
        type="text" 
        placeholder="Name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
