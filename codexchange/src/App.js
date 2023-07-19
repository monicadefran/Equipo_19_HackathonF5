import logo from './logo.svg';
import './App.css';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Details from './Pages/Details';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Home />} /> 
          <Route path="/" element={<Home />} />
          {/*<Route path="/Details/:id" element={<Details />} />}*/}
          <Route path="/Details" element={<Details />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
