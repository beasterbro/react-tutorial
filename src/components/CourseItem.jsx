import './CourseItem.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const CourseListItem = ({term, number,meets,title}) => {  
    return (
        <div className='card ,m-1 p-2'>
          <h1 className='card-title'>{term} CS {number}</h1>
          <div className='card-body'>
            <p className='card-text'>{title}</p>
            <p className='card-text'>{meets}</p>
          </div>
      </div>
    );
  };

  export default CourseListItem;