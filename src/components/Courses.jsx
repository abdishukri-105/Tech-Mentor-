import React from "react";
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    name: "Introduction to Python",
    bootcamp: "Data Science Bootcamp",
    description:
      "This course covers the basics of Python programming language, including data types, control structures, functions, and modules.",
    cost: "$199",
  },
  {
    id: 2,
    name: "Web Development with React",
    bootcamp: "Web Development Bootcamp",
    description:
      "This course covers the fundamentals of web development using the React library. Topics include components, JSX, state, props, and hooks.",
    cost: "$299",
  },
  {
    id: 3,
    name: "Machine Learning with Scikit-Learn",
    bootcamp: "Data Science Bootcamp",
    description:
      "This course covers the basics of machine learning using the Scikit-Learn library. Topics include data preprocessing, model selection, and evaluation.",
    cost: "$399",
  },
];

const Courses = () => {
  return (
    <div>
      <h1>Available Courses:</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <Link to={{ pathname: `/courses/${course.id}`, state: { courseName: course.name } }}>
              {course.name} ({course.cost})
            </Link>{" "}
            - offered by {course.bootcamp}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
