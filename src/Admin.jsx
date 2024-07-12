import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from "react-router-dom";
import GetMahasiswa from './componen/admin/GetMahasiswa';
import CreateMahasiswa from './componen/admin/CreateMahasiswa';
import Login from './componen/auth/Login';
import Register from './componen/auth/Register';
import Home1 from './Pages/Home1';
import State from './Pages/State';

function App () {
  return (
    <>
      <Routes>
        <Route path="/" Component={Login}/>
        <Route path="/state" Component={State}/>
        <Route path="/register" Component={Register}/>
        <Route path="/home" Component={Home1}/>
        <Route path="/GetMhs" Component={GetMahasiswa}/>
        <Route path="/insert" Component={CreateMahasiswa}/>
      </Routes>
    </>
  )
}

export default App