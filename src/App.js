import './App.css';
import Header from './Header'
import Navbar from './Navbar';
import Content from './Content';
// import { useState } from 'react';

function App() {
  return (
    <main>
      <Navbar />
      <Header title="BlockBallot"
      />
      <Content />
    </main>
  );
}

export default App;
