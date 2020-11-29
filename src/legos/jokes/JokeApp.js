import React, { useEffect, useState } from "react";
import Joke from "./Joke";
import "./joke.css";

const jokeUrl = "https://official-joke-api.appspot.com/jokes/ten";

function JokeApp() {
  const [loading, setLoading] = useState(true);
  const [jokes, setJokes] = useState([]);

  const fetchJokes = async () => {
    setLoading(true);
    try {
      const response = await fetch(jokeUrl);
      const jokes = await response.json();
      setLoading(false);
      setJokes(jokes);
      console.log(jokes);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const removeJoke = (id) => {
    let newJokes = jokes.filter((joke) => joke.id !== id);
    setJokes(newJokes);
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  if (loading) {
    return <h1>loading ...</h1>;
  }
  if (jokes.length === 0) {
    return <button onClick={fetchJokes}>Fetch New Jokes</button>;
  }

  return (
    <>
      <h1>Joke App</h1>
      {jokes.map((joke) => (
        <Joke key={joke.id} {...joke} removeJoke={removeJoke} />
      ))}
    </>
  );
}

export default JokeApp;
