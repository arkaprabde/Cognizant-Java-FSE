const BlogDetails = () => {
  const blogs = [
    { id: 101, title: "Understanding React", author: "Jane Doe" },
    { id: 102, title: "Intro to Redux", author: "John Smith" },
  ];

  return (
    <div>
      <h2>Blog Details</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            {blog.title} - {blog.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogDetails;