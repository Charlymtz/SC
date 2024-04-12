import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandPage from './components/landpage';
import Register from './components/register';
import Login from './components/login';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandPage/>}/>
      <Route path='/#' element={<LandPage/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Login' element={<Login/>}/>

    </Routes>
    </BrowserRouter>

  );
}

export default App;
