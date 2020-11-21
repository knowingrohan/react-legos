import React from 'react';
import 'normalize.css';
import './app.css'
import RandomQuote from './legos/random-quote/RandomQuote';


function App() {
  return (
    <div className="container">
      <RandomQuote />
    </div>
  );
}

export default App;