import CourseItem from "./CourseItem";
import './CourseItem.css'
const CourseList = ({courses, selection}) => { 
  console.log(Object.values(courses)[0].term)
  console.log(selection.selection)
    return (
      <div className="course-list">
        {Object.values(courses).filter( (course) => ( course.term == selection.selection ) ).map( course => <CourseItem key={Object.keys(course)} term={course.term} number={course.number} meets={course.meets} title={course.title} />) }
      </div>
    );
  };
//        <h1>{"<ul><li>" + courses.join('</li><li>') + '</li></ul>'}</h1>
  export default CourseList;