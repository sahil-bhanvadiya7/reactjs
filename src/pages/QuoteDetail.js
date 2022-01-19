import React from "react";
import Comments from "../components/comments/Comments";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
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
 const match = useRouteMatch();
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p>NO Quote found!!!</p>;
  }
  return (
    <>
      <HighLightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
      <div className="centered">
        <Link className="btn--flat" to={`${match.url}/comments`}>
          Load Comments
        </Link>
      </div>

      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
}

export default QuoteDetail;
