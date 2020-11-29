import React, { useState } from "react";

function Joke({ id, setup, punchline, removeJoke }) {
  const [showJoke, setShowJoke] = useState(false);

  return (
    <article className="joke">
      <p>{setup}</p>
      <p>{showJoke ? punchline : ""}</p>
      <div className="joke-btns">
        <button onClick={() => setShowJoke(!showJoke)}>
          {showJoke ? "Hide Answer" : "Show Answer"}
        </button>
        <button className="not-funny" onClick={() => removeJoke(id)}>
          Not Funny
        </button>
      </div>
    </article>
  );
}

export default Joke;
