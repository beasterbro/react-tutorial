import CourseListItem from "./CourseItem";
import './CourseItem.css'
const CourseList = ({courses}) => {  
    return (
      <div className="course-list">
        {Object.values(courses).map( (course) => <CourseListItem key={Object.keys(course)} term={course.term} number={course.number} meets={course.meets} title={course.title} />) }
      </div>
    );
  };
//        <h1>{"<ul><li>" + courses.join('</li><li>') + '</li></ul>'}</h1>
  export default CourseList;