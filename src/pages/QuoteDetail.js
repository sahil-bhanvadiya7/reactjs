import React from "react";
import { useParams } from "react-router-dom";
function QuoteDetail() {
  const params = useParams();
  return (
    <>
      <div> quote detail page</div>
      <h1>{params.quoteId}</h1>
    </>
  );
}

export default QuoteDetail;
