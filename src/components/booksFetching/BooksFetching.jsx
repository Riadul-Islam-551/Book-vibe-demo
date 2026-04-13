import React, { use } from "react";
import BookCard from "../bookCard/BookCard";

const booksPromise = fetch("./booksData.json").then((res) => res.json());

const BooksFetching = () => {
  const books = use(booksPromise);
  //   console.log(books);
  return (
    <div className="max-w-300 mx-auto">
      <h1 className="text-4xl text-center font-bold my-6">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book, ind) => (
          <BookCard key={ind} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default BooksFetching;
