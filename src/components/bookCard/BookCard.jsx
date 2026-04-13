import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  // console.log(book);
  return (
    <Link
      to={`/bookDetails/${book.bookId}`}
      className="card bg-base-100 p-6 border border-base-300 rounded-2xl"
    >
      <figure className="p-6 rounded-xl bg-base-300">
        <img
          src={book.image}
          className="rounded-2xl h-50"
          alt={book.bookName}
        />
      </figure>
      <div className="flex justify-start items-center gap-3">
        {book.tags.map((tag, ind) => (
          <p
            key={ind}
            className="my-2  py-1 px-3 rounded-xl text-sm text-[#23BE0A] bg-[#e6f5e4]"
          >
            {tag}
          </p>
        ))}
      </div>
      <div className="card-body pt-0 px-0 border-b border-[#bbbbbb] border-dashed">
        <h2 className="card-title">{book.bookName}</h2>
        <p className="text-secondary">By : {book.author}</p>
      </div>
      <div className="mt-3 text-sm flex justify-between items-center text-secondary">
        <p>{book.category}</p>

        <p className="flex gap-1">
          {book.rating}{" "}
          <span>
            {" "}
            <FaRegStar />{" "}
          </span>
        </p>
      </div>
    </Link>
  );
};

export default BookCard;
