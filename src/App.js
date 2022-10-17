import React from 'react'
import NavBar from './Components/Navbar/NavBar'
import NavbarContent from './Components/Navbar/NavbarContent';
import CallNow from './Components/Navbar/CallNow';
import WhatWeDo from './Components/Navbar/WhatWeDo';
import ClientsFeedback from './Components/Navbar/ClientsFeedback';
import Footer from './Components/Navbar/Footer';



function App() {
  return (
    <div className="App">
      <>
      <CallNow />
      <NavBar />
      <NavbarContent/>
      <WhatWeDo />
      <ClientsFeedback />
      <Footer />
      </>
    </div>
  );
}

export default App;
