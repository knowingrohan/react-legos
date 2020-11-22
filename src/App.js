import React from 'react';
import 'normalize.css';
import './app.css'
import RandomQuote from './legos/random-quote/RandomQuote';
import Counter from './legos/counter/Counter';



function App() {
  return (
    <div className="container">
      {/* <RandomQuote /> */}
      <Counter />
    </div>
  );
}

export default App;