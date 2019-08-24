import React, { useState } from "react";
import axios from 'axios';

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [creds, setCreds] = useState({username: '', password: ''});

  const handleChange = event => {
    setCreds({...creds, [event.target.name]: event.target.value});
  }
  
  const handleSubmit = event => {
    event.preventDefault();
    console.log(creds);
    axios.post('http://localhost:5000/api/login', creds)
      .then(res => {
        console.log('login', res);
        localStorage.setItem('token', res.data.payload);
        props.history.push("/BubblePage");
      })
      .catch(err => console.log(err.response));
    setCreds({username: '', password: ''});
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input name="username" placeholder="Username" value={creds.username} onChange={handleChange} />
        </label>
        <label>
          Password
          <input name="password" placeholder="Password" value={creds.password} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
