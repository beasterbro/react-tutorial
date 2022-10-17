import './CourseList.css';

const CourseList = ({selectedCourses}) => {
return (
  <div className="cart">
    {
      selectedCourses.length === 0
      ? <h2>The list is empty</h2>
      : selectedCourses.map(course => (
        <ul>
          <div key={course.number}>
            {course.title} -- {course.meets}
          </div>
          </ul>
        ))
    }
  </div>
);
}
export default CourseList;