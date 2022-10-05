import CourseItem from "./CourseItem";
import './CourseItem.css'
const CourseGrid = ({courses, selection}) => { 
    return (
      <div className="course-list">
        {Object.values(courses).filter( (course) => ( course.term == selection ) ).map( course => <CourseItem key={Object.keys(course)} term={course.term} number={course.number} meets={course.meets} title={course.title} />) }
      </div>
    );
  };
//        <h1>{"<ul><li>" + courses.join('</li><li>') + '</li></ul>'}</h1>
  export default CourseGrid;