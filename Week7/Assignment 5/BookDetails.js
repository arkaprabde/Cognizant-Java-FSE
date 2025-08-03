const BookDetails = () => {
  const books = [
    { id: 1, title: "JavaScript: The Good Parts", author: "Douglas Crockford" },
    { id: 2, title: "Eloquent JavaScript", author: "Marijn Haverbeke" },
  ];

  return (
    <div>
      <h2>Book Details</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookDetails;