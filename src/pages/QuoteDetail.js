import React from "react";
import Comments from "../components/comments/Comments";
import { useParams, Route } from "react-router-dom";
function QuoteDetail() {
  const params = useParams();
  return (
    <>
      <div> quote detail page</div>
      <h1>{params.quoteId}</h1>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
}

export default QuoteDetail;
