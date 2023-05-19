import React,{useState} from 'react';
import axios from 'axios';

export const Login = () => {
    const [loginuser,setLoginuser] = useState({
        email:'',
        password:''
    })
    const handleLogin = () => {
        axios.post(`${process.env.REACT_APP_URL}login`,loginuser)
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err))
    }
    return(
        <div>
        <label for="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="Email"
          onChange={(e) => setLoginuser({ ...loginuser, email: e.target.value })}
          value={loginuser.email}
        />
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="password"
          onChange={(e) => setLoginuser({ ...loginuser, password: e.target.value })}
          value={loginuser.password}
        />
        <button onClick={handleLogin}>Login</button>
        </div>
    )
}