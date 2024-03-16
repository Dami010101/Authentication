import './App.css';
import Login from './component/authentication/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './component/authentication/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Resetpassword from './component/authentication/Resetpassword';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route element={<Register/>} path='/Register'/>
      <Route element={<Login/>} path='/'/>
      <Route element={<Resetpassword/>} path='/ResetPassword'/>
      </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </div>
  );
}

export default App;
