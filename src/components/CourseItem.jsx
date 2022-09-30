import './CourseItem.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const CourseItem = ({term, number,meets,title}) => {  
    return (
        <div className='card ,m-1 p-2'>
          <h4 className='card-title'>{term} CS {number}</h4>
          <div className='card-body'>
            <p className='card-text'>{title}</p>
            <p className='card-footer bg-transparent'>{meets}</p>
          </div>
      </div>
    );
  };

  export default CourseItem;