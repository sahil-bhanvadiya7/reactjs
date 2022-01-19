import React from "react";
import Comments from "../components/comments/Comments";
import { useParams, Route, Link } from "react-router-dom";
import HighLightedQuote from "../components/quotes/HighlightedQuote";
const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "xyz",
    text: "Learning React is fun!",
  },
  {
    id: "q2",
    author: "abc",
    text: "Learning React is fun!",
  },
  {
    id: "q3",
    author: "spd",
    text: "Learning React is fun!",
  },
];
function QuoteDetail() {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p>NO Quote found!!!</p>;
  }
  return (
    <>
      <HighLightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact>
      <div className="centered">
        <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
          Load Comments
        </Link>
      </div>

      </Route>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
}

export default QuoteDetail;
