
const CourseListItem = ({term, number,meets,title}) => {  
    return (
        <div>
      <li> {term} CS {number}: {title} </li>
      </div>
    );
  };

  export default CourseListItem;