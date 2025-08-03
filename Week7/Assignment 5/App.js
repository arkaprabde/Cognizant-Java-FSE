import { useState } from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {
  const [componentToShow, setComponentToShow] = useState("book");

  let renderedComponent;
  if (componentToShow === "book") {
    renderedComponent = <BookDetails />;
  } else if (componentToShow === "blog") {
    renderedComponent = <BlogDetails />;
  } else {
    renderedComponent = <CourseDetails />;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Blogger App</h1>
      <div>
        <button onClick={() => setComponentToShow("book")}>Book</button>
        <button onClick={() => setComponentToShow("blog")}>Blog</button>
        <button onClick={() => setComponentToShow("course")}>Course</button>
      </div>
      <hr />
      {renderedComponent}
    </div>
  );
}

export default App;