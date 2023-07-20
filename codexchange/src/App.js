import logo from './logo.svg';
import './App.css';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Details from './Pages/Details';
import Createads from './Pages/Createads'
import GridExample from './Components/CardGrid'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Home />} /> 
          <Route path="/" element={<Home />} />
          <Route path="/Createads" element={<Createads />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/CardGrid" element={< GridExample/>} />
          
   
        </Routes>
    </BrowserRouter>
  );
}

export default App;
