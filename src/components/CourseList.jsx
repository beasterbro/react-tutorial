import CourseListItem from "./CourseItem";

const CourseList = ({courses}) => {  
    return (
      <div>
        <ul>
        {Object.entries(courses).map( (course,id) => <CourseListItem key={id} course={course.title} />) }
        </ul>
      </div>
    );
  };
//        <h1>{"<ul><li>" + courses.join('</li><li>') + '</li></ul>'}</h1>
  export default CourseList;