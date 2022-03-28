export interface RawQuote {
    quoteId: string;
    quoteText: string;
    quoteAuthor: string;
  }
  
export interface ParsedQuote {
    id: string;
    author: string;
    text: string;
  }
  
export interface GetQuotesData {
    statusCode: number;
    message: string;
    totalQuotes: number;
    data: ParsedQuote[];
  }