import React from "react";

const CoursesInfo = ({ location }) => {
  const { courseName } = location.state;

  return (
    <div>
      <h1>{courseName}</h1>
      <p>This is the course info page for {courseName}.</p>
    </div>
  );
};

export default CoursesInfo;
