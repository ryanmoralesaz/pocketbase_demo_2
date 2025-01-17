import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await fetch("https://api.rmaztest.xyz");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setBooks(data || []);
      console.log(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {/* <button onClick={fetchBooks}>Fetch Books</button> */}
        {books.length > 0 && (
          <ul>
            {books.map((book) => (
              <li key={book.id}>
                {book.title} by {book.author} ({book.publish_date})
              </li>
            ))}
          </ul>
        )}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
