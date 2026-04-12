import React from "react";

const BookCard = ({ book }) => {
  console.log(book);
  return (
    <div>
      <div className="card bg-base-100 shadow-sm p-6 border border-base-300 ">
        <figure>
          <img src={book.image} className="rounded-2xl h-50" alt={book.bookName} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{book.bookName}</h2>
          <p>By : {book.author}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
