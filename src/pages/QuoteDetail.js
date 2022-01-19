import React, { useEffect } from "react";
import Comments from "../components/comments/Comments";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import HighLightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpiner from "../components/UI/LoadingSpinner";

function QuoteDetail() {
  const match = useRouteMatch();
  const params = useParams();
  const { quoteId } = params;
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);
  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpiner />
      </div>
    );
  }
  if (error) {
    return <p className="centered focused">{error}</p>;
  }
  // const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!loadedQuote.text) {
    return <p>NO Quote found!!!</p>;
  }
  return (
    <>
      <HighLightedQuote text={loadedQuote.text} author={loadedQuote.author} />
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
