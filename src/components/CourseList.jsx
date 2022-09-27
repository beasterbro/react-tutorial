import CourseListItem from "./CourseItem";

const CourseList = ({courses}) => {  
    return (
      <div>
        <ul>
        {Object.values(courses).map( (course) => <CourseListItem key={course.number} term={course.term} number={course.number} meets={course.meets} title={course.title} />) }
        </ul>
      </div>
    );
  };
//        <h1>{"<ul><li>" + courses.join('</li><li>') + '</li></ul>'}</h1>
  export default CourseList;