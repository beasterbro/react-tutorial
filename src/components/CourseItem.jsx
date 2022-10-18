import './CourseItem.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import { useAuthState } from '../utilities/firebase';
import { useProfile } from '../utilities/profile';

const CourseItem = ({course, selectedCourses, toggleSelected, setEditCourse }) => {
  const [user] = useProfile()
  return (//TODO: url redirect with passed in course info on Edit button click
    <div className='card m-1 p-2'>
      <div onClick={() => toggleSelected(course)} >
        <h4 className='card-title'>{course.term} CS {course.number}</h4>
        <div className={`card-body ${selectedCourses.includes(course) ? 'selected' : ''}`}>
          <p className='card-text'>{course.title}</p>
          {selectedCourses.includes(course) && <p>selected</p>}
          <p className='card-footer bg-transparent'>{course.meets}</p>
        </div>
      </div>
      { user.isAdmin && <Link to="/edit" params={{ course: course, setEditCourse: setEditCourse }} onClick={() => setEditCourse(course)}>
        <button onClick={() => setEditCourse(course)}>Edit</button>
      </Link>}
    </div>
  );
};

export default CourseItem;