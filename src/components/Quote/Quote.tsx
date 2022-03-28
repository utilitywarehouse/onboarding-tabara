import React from 'react';
import { ParsedQuote } from '../../utils/interfaces';
import "./Quote.scss"

interface QuoteProps {
    quote: ParsedQuote;
}

const Quote = ({quote}: QuoteProps) => {
    
const { author, text } = quote;

return (
    <div className="text">
        <h3 className="heading">{author}</h3>
        <p className="quotes"><em>{text}</em></p>
    </div>
)

}

export default Quote;