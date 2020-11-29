import React from 'react';
import 'normalize.css';
import './app.css'
// import RandomQuote from './legos/random-quote/RandomQuote';
// import Counter from './legos/counter/Counter';
import JokeApp from './legos/jokes/JokeApp';



function App() {
  return (
    <div className="container">
      {/* <RandomQuote /> */}
      {/* <Counter /> */}
      <JokeApp />
    </div>
  );
}

export default App;