
const CourseListItem = ({term, number,meets,title}) => {  
    return (
        <div>
      <li> {[term, number, meets, title].join(' ')} </li>
      </div>
    );
  };

  export default CourseListItem;