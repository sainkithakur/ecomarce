
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Product from './Component/Product';
import Contect from './Component/Contect';
import About from './Component/About';
import Login from './Component/Login';
import Single from './Component/Single';
import Privateroute from './Component/Privateroute';

function App() {
  return (
    <div className="App">
      <Header/>
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/login' element={<Login/>} />
  <Route element={<Privateroute/>} >
  <Route path='/product' element={<Product/>} />
  <Route path='/Contect' element={<Contect/>} />
  <Route path='/About' element={<About/>} />
  
  </Route>
  <Route path='/single/:id' element={<Single/>} />
</Routes>
<Footer/>
    </div>
  );
}

export default App;
