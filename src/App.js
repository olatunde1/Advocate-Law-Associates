import React from 'react'
import NavBar from './Components/Navbar/NavBar'
import NavbarContent from './Components/Navbar/NavbarContent';
import CallNow from './Components/NextGeneration/CallNow';

function App() {
  return (
    <div className="App">
      <>
      <CallNow />
      <NavBar />
      <NavbarContent/>
      </>
    </div>
  );
}

export default App;
