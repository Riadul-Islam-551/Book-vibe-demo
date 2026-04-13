import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const books = useLoaderData();
  // console.log(books);
  const selectedBook = books.find((book) => book.bookId == Number(id));
  console.log(selectedBook);
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = selectedBook;
  return (
    <div className="card lg:card-side max-w-300 mx-auto bg-base-100 shadow-sm">
      <figure>
        <img
          src={image}
          alt="Album"
          className="max-w-100 p-20 bg-base-300 rounded-2xl"
        />
      </figure>
      <div className=" p-6">
        <h2 className="card-title">{bookName}</h2>
        <p>By: {author}</p>
        <h5 className="py-3 border border-l-0 border-r-0 border-gray-400">
          {category}
        </h5>
        <p>
          <span className="font-bold">Review:</span>
          {review}
        </p>
        <p className="flex justify-start items-center">
          <span className="font-bold">Tags:</span>
          {tags.map((tag, ind) => (
            <p
              key={ind}
              className="py-1 px-3 rounded-xl text-sm text-[#23BE0A] bg-[#e6f5e4]"
            >
              {tag}
            </p>
          ))}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
