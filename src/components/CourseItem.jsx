
const CourseListItem = ({term, number,meets,title}) => {  
    return (
        <div>
      <li> {[term, number, meets, title]} </li>
      </div>
    );
  };

  export default CourseListItem;