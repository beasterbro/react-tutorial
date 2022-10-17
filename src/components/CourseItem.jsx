import './CourseItem.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { catchTimeConflicts } from '../utilities/timing';
const CourseItem = ({course, selectedCourses, toggleSelected, setEditCourse}) => { 
    return (//TODO: add toggle selected
    <div className='card m-1 p-2'>
        <div onClick={() => toggleSelected(course)} >
          <h4 className='card-title'>{course.term} CS {course.number}</h4>
          <div className={`card-body ${selectedCourses.includes(course) ? 'selected' : ''}`}>
            <p className='card-text'>{course.title}</p>
            {selectedCourses.includes(course) && <p>selected</p>}
            <p className='card-footer bg-transparent'>{course.meets}</p>
          </div>
      </div>
      <button onClick={() => setEditCourse(course)}>Edit</button>
      </div>
    );
  };

  export default CourseItem;