import React, { useEffect, useState } from 'react';
import './Container.scss';
import GetQuotes from '../../network/getNewQuote';
import { ParsedQuote } from '../../utils/interfaces';
import Quote from '../Quote';

function Container() {
  const [quotes, setQuotes] = useState<ParsedQuote[]>([]);
  const [shouldFetch, setShouldFetch] = useState(true);

  function onButtonClick() {
    setShouldFetch(true);
  }

  useEffect(() => {
    if (shouldFetch) {
      GetQuotes().then((results) => {
        setShouldFetch(false);
        setQuotes(results.data);
      });
    }
  }, [shouldFetch]);

  return (
    <div className="container">
      <div className="center">
        <button className="quoteBtn" type="button" onClick={onButtonClick} data-testid="button">
          Click!
        </button>
        {quotes.map((quote) => <Quote key={quote.id} quote={quote} />)}
      </div>
    </div>
  );
}

export default Container;
