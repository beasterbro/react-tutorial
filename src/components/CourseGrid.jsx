import CourseItem from "./CourseItem";
import './CourseItem.css'
const CourseGrid = ({courses, selection, selectedCourses, toggleSelected, setEditCourse}) => { 
    return (
      <div className="course-list">
        {
        Object.values(courses).filter( (course) => ( course.term == selection ) ).map(
           (course) => <CourseItem id ={Object.keys(courses).find(key => key.includes(course.term[0]+course.number))}
                        key={Object.keys(courses).find(key => key.includes(course.term[0]+course.number))} 
                        course={course} selectedCourses={selectedCourses} 
                        toggleSelected={toggleSelected} setEditCourse={setEditCourse}/>) }
      </div>
    );
  };
  export default CourseGrid;