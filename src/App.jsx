import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Techstack from './Pages/Techstack';
import MyProjects from './Pages/MyProjects';
import Contact from './Pages/Contact';
import Aboutme from './Components/Aboutme/Aboutme';
import Header from './Static/Header/Header';
import Footer from './Static/Footer/Footer';

function App() {
  return (
    <div className="body">
   
      <BrowserRouter basename="/">
       
        <Header />

 
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/techstack" element={<Techstack />} />
          <Route path="/pro" element={<MyProjects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<Aboutme />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
