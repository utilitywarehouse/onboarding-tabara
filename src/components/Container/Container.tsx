import React, { useEffect, useState } from "react";
import "./Container.scss"
import GetQuotes from "../../network/getNewQuote";
import { ParsedQuote } from "../../utils/interfaces";
import Button from "../Button";
import Quote from "../Quote";

export default function Container() {
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
          <Button onButtonClick={onButtonClick} />
          {quotes.map((quote) => {
            return <Quote key={quote.id} quote={quote} />;
          })}
        </div>
      </div>
    );

    }
