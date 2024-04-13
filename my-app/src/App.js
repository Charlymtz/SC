import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandPage from './components/landpage';
import Register from './components/register';
import Login from './components/login';
import MainPage from './components/mainpage';
import Maps from './components/maps';
import Cart from './components/cart';
import Profile from './components/profile';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandPage/>}/>
      <Route path='/#' element={<LandPage/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/MainPage' element={<MainPage/>}/>
      <Route path='/Maps' element={<Maps/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      <Route path='/Cart' element={<Cart/>}/>

      

    </Routes>
    </BrowserRouter>

  );
}

export default App;
