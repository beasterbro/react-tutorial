import './CourseItem.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const CourseItem = ({course, selectedCourses, toggleSelected}) => { 
  console.log(selectedCourses) 
    return (//TODO: add toggle selected
        <div className='card m-1 p-2' onClick={() => toggleSelected(course.number)} >
          <h4 className='card-title'>{course.term} CS {course.number}</h4>
          <div className={`card-body ${selectedCourses.includes(course.number) ? 'selected' : ''}`}>
            <p className='card-text'>{course.title}</p>
            {selectedCourses.includes(course.number) && <p>selected</p>}
            <p className='card-footer bg-transparent'>{course.meets}</p>
          </div>
      </div>//on click toggle selected
    );
  };

  export default CourseItem;