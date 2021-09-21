
import { useEffect, useState } from 'react';
import './Quotes.css'

const Quotes = () => {
    const [quote, setQuote] = useState([])
    useEffect(() => {
        fetch(`https://api.kanye.rest/`)
            .then(res => res.json())
            .then(data => setQuote(data.quote))
    }, [])
    const loadNext = () => {
        fetch('https://api.kanye.rest/')
            .then(res => res.json())
            .then(data => setQuote(data.quote))
    }
    return (
        <div>
            <div className="quote">
                <div className="card">
                    <h3>" {quote} "</h3>
                    <button onClick={loadNext}><span>Another Quote</span></button>
                </div>
            </div>
        </div>
    );
};

export default Quotes;