import React from "react";

import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../Utility/AddToDB";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === id);

  console.log(data, book, bookId, id);
  //   console.log(bookId);
  //   "bookId": 1,
  //   "bookName": "The Great Gatsby",
  //   "author": "F. Scott Fitzgerald",
  //   "image": "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg",
  //   "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
  //   "totalPages": 192,
  //   "rating": 4.5,
  //   "category": "Classic",
  //   "tags": ["Fiction", "Romance"],
  //   "publisher": "Scribner",
  //   "yearOfPublishing": 1925
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
  } = book;
  const handleMarkAsRead = (id) => {
    addToStoredReadList(id);
  };
  return (
    <div className="mb-5">
      <h2>i am from BookDetails</h2>
      <h2>Book Details :{bookId}</h2>
      <div className="hero bg-base-200 min-h-screen rounded-xl">
        <div className="hero-content flex-col lg:flex-row gap-9">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="space-y-3">
            <h1 className="text-5xl font-bold">{bookName}</h1>
            <h1 className="text-2xl font-bold">BY : {author}</h1>
            <h1 className="text-xl font-bold">{category}</h1>
            <p>{review}</p>
            {tags.map((tag, idx) => (
              <button
                key={idx}
                className="btn btn-xs bg-green-200 text-green-800"
              >
                #{tag}
              </button>
            ))}
            <h1 className="text-xl font-bold">Number Of page : {totalPages}</h1>
            <h1 className="text-xl font-bold">Publisher : {publisher}</h1>
            <h1 className="text-xl font-bold">
              Year of publishing : {yearOfPublishing}
            </h1>
            <h1 className="text-xl font-bold">Rating : {rating}</h1>
            <div className="flex gap-5">
              <button
                onClick={() => handleMarkAsRead(bookId)}
                className="btn btn-outline btn-accent "
              >
                Mark as Read
              </button>
              <button className="btn btn-accent">Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
