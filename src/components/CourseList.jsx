import CourseListItem from "./CourseItem";

const CourseList = ({courses}) => {  
    return (
      <div className="courseList">
        {Object.values(courses).map( (course) => <CourseListItem key={Object.keys(course)} term={course.term} number={course.number} meets={course.meets} title={course.title} />) }
      </div>
    );
  };
//        <h1>{"<ul><li>" + courses.join('</li><li>') + '</li></ul>'}</h1>
  export default CourseList;