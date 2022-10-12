import './CourseList.css';

const CourseList = ({selectedCourses}) => {
console.log(selectedCourses);
return (
  <div className="cart">
    {
      selectedCourses.length === 0
      ? <h2>The list is empty</h2>
      : selectedCourses.map(course => (
          <div key={course.number}>
            {course.title} -- {course.meets}
          </div>
        ))
    }
  </div>
);
}
export default CourseList;