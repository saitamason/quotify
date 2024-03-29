import { Fragment } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Dawid", text: "Healing comes with time" },
  { id: "q2", author: "Max", text: "Learning React is fun!" },
  { id: "q3", author: "Daniel", text: "I care, but most of the time I don't" },
];

const QuoteDetails = () => {
  const { quoteId } = useParams();
  const match = useRouteMatch();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === quoteId);
  if (!quote) return <p className="centered">No quote found.</p>;

  return (
    <Fragment>
      <h1>Quote details</h1>
      <HighlightedQuote text={quote.text} author={quote.author} />
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
    </Fragment>
  );
};

export default QuoteDetails;
