import './App.css';
import Login from './component/authentication/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './component/authentication/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Resetpassword from './component/authentication/Resetpassword';
import Product from './pages/Product';
export const frontEndUrl = process.env.CONNECTOR





function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route element={<Register/>} path='/Register'/>
      <Route element={<Login/>} path='/'/>
      <Route element={<Resetpassword/>} path='/ResetPassword'/>
      <Route element={<Product/>} path='/Product'/>
      </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </div>
  );
}

export default App;
