import React from "react";
import 'react-bootstrap';
import GridExample from '../Components/CardGrid';
import NavBar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Api from '../Components/Api';

function Home() {
  return (
   <>
    <NavBar />
    <Api />
    <GridExample/>
    <Footer/>
    </>
  );
}

export default Home;
