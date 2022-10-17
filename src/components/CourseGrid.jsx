import CourseItem from "./CourseItem";
import './CourseItem.css'
const CourseGrid = ({courses, selection, selectedCourses, toggleSelected, setEditCourse}) => { 
    return (
      <div className="course-list">
        {
        Object.values(courses).filter( (course) => ( course.term == selection ) ).map(
           (course) => <CourseItem key={course.number} course={course} selectedCourses={selectedCourses} 
                                    toggleSelected={toggleSelected} setEditCourse={setEditCourse}/>) }
      </div>
    );
  };
  export default CourseGrid;