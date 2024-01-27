import './App.css';
import Header from './Header'
import Navbar from './Navbar';
import Content from './Content';
import RegisterNominee from './RegisterNominee';
import RegisterVoter from './RegisterVoter';
import Admin from './Admin';
// import { useState } from 'react';

function App() {
  return (
    <main>
      <Navbar />
      <Header title="BlockBallot"
      />
      {/* <Content /> */}
      {/* <Admin /> */}
      {/* <RegisterNominee /> */}
      <RegisterVoter />
      
    </main>
  );
}

export default App;