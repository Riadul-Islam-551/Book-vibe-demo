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
    <div className="mt-9 grid grid-cols-1 lg:grid-cols-2 max-w-300 mx-auto bg-base-100">
      <figure className="flex justify-center items-center p-20 bg-base-300 rounded-2xl">
        <img src={image} alt={bookName} className="max-w-75 rounded-2xl" />
      </figure>
      <div className="p-6 space-y-3">
        <h2 className="font-bold text-2xl">{bookName}</h2>
        <p className="font-bold">By: {author}</p>
        <h5 className="py-3 border border-l-0 border-r-0 border-gray-400">
          {category}
        </h5>
        <p className="text-secondary text-sm">
          <span className="font-bold">Review:</span>
          {review}
        </p>
        <p className="flex justify-start items-center gap-2 my-3">
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
        <div className="space-y-2 py-7 text-sm border-t-2 border-gray-300">
          <p className="font-bold">
            <span className="text-secondary">Number of pages:</span>{" "}
            {totalPages}
          </p>
          <p className="font-bold">
            <span className="text-secondary">Publisher:</span> {publisher}
          </p>
          <p className="font-bold">
            <span className="text-secondary">Year of Publishing:</span>{" "}
            {yearOfPublishing}
          </p>
          <p className="font-bold">
            <span className="text-secondary">Rating:</span> {rating}
          </p>
        </div>
        <div className="card-actions justify-start ">
          <button className="btn">Read</button>
          <button className=" btn btn-info text-white">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
