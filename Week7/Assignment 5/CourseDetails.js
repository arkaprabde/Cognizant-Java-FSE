const CourseDetails = () => {
  const courses = [
    { id: "CS101", title: "React Basics", duration: "4 weeks" },
    { id: "CS102", title: "Advanced React", duration: "6 weeks" },
  ];

  return (
    <div>
      <h2>Course Details</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            {course.title} - {course.duration}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;