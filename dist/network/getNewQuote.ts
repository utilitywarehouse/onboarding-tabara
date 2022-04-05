import { GetQuotesData, RawQuote } from '../utils/interfaces';

export default function GetQuotes(): Promise<GetQuotesData> {
  const API_VERSION = 3;
  const API_URL = `https://quote-garden.herokuapp.com/api/v${API_VERSION}/quotes/random`;

  return fetch(`${API_URL}`)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    })
    .then((response) => {
      response.data = response.data.map((quote: RawQuote) => ({
        id: quote.quoteId,
        text: quote.quoteText,
        author: quote.quoteAuthor,
      }));

      return response;
    });
}
