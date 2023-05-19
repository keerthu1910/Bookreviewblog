import React from 'react';
import { Register } from './Pages/Register';
import {Login} from './Pages/Login';
import {Routes,Route,useNavigate} from 'react-router-dom';
function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
      <h1>Book review blog</h1>
      <button onClick={()=>navigate('/register')}>Register</button>
      <button onClick={()=>navigate('/login')}>Login</button>
      <Routes>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
