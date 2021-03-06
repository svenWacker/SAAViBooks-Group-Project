import React from "react";
import { Link } from "react-router-dom";

// BookInfo components
import BookDetails from "./bookInfo components/Book-details";
import BookReviews from "./bookInfo components/Book-reviews";

const BookInfo = ({ id }) => {
  return (
    <React.Fragment>
      <BookDetails bookId={id} />
      <BookReviews bookId={id} />
    </React.Fragment>
  );
};

export default BookInfo;
