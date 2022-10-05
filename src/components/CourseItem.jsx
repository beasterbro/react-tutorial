import './CourseItem.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const CourseItem = ({course, selectedCourses, toggleSelected}) => {  
    return (
        <div className='card m-1 p-2'>
          <h4 className='card-title'>{course.term} CS {course.number}</h4>
          <div className={`card-body ${selectedCourses.includes(id) ? 'selected' : ''}`}>
            <p className='card-text'>{course.title}</p>
            {selectedCourses.number == number}&& <p>slected</p>
            <p className='card-footer bg-transparent'>{course.meets}</p>
          </div>
      </div>//on click toggle selected
    );
  };

  export default CourseItem;