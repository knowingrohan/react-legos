import React, { useState } from 'react';
import { quotes } from './quotes';
import './quote.css'

function RandomQuote() {

    const getRandomNumber = num => Math.floor(Math.random() * num);

    let randomIndex = getRandomNumber(quotes.length);

    const [quote, setQuote] = useState(quotes[randomIndex].text);
    const [author, setAuthor] = useState(quotes[randomIndex].author);

    const handleRandomQuote = () => {
        let newRandomIndex = getRandomNumber(quotes.length);
        setQuote(quotes[newRandomIndex].text);
        setAuthor(quotes[newRandomIndex].author);
    }
    return (
        <>
            <div className="quote-wrapper">
                <blockquote>
                    <h1>{quote}</h1>
                    <small>&mdash;{author}</small>
                </blockquote>
            </div>
            <button onClick={handleRandomQuote}>Generate Random Quote</button>
        </>
    );
}

export default RandomQuote;