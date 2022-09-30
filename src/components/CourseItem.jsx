
const CourseListItem = ({term, number,meets,title}) => {  
    return (
        <div>
       {term} CS {number}: {title} 
      </div>
    );
  };

  export default CourseListItem;