import React from "react";
import 'react-bootstrap';
import GridExample from '../Components/CardGrid';
import NavBar from '../Components/Navbar';
import Footer from '../Components/Footer';

function Home() {
  return (
   <>
    <NavBar />
    <GridExample/>
    <Footer/>
    </>
  );
}

export default Home;
