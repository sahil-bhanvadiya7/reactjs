import React from "react";
import QuoteList from '../components/quotes/QuoteList'
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
function AllQuotes() {
  return <QuoteList quotes={DUMMY_QUOTES}/>;
}

export default AllQuotes;
