import CourseItem from "./CourseItem";
import './CourseItem.css'
const CourseGrid = ({courses, selection, selectedCourses, toggleSelected, setEditCourse}) => { 
    return (
      <div className="course-list">
        {
        Object.values(courses).filter( (course) => ( course.term == selection ) ).map(
           (course) => <CourseItem key={Object.keys(course)} course={course} selectedCourses={selectedCourses} 
                                    toggleSelected={toggleSelected} setEditCourse={setEditCourse}/>) }
      </div>
    );
  };
//        <h1>{"<ul><li>" + courses.join('</li><li>') + '</li></ul>'}</h1>
  export default CourseGrid;