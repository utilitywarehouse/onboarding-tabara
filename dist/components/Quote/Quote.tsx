import React from 'react';
import { ParsedQuote } from '../../utils/interfaces';
import './Quote.scss';

interface QuoteProps {
  quote: ParsedQuote;
}

function Quote({ quote }: QuoteProps) {
  const { author, text } = quote;

  return (
    <div className="text">
      <h4 className="heading">{author}</h4>
      <p className="quotes"><em>{text}</em></p>
    </div>
  );
}

export default Quote;
