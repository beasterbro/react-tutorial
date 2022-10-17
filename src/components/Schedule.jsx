import { useJsonQuery } from '../utilities/fetch';
import Banner from './Banner'
import CourseGrid from './CourseGrid'

const FetchSchedule = ({ selection, selectedCourses, toggleSelected }) => {
    const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');
    if (error) return <h1>Error loading user data: {`${error}`}</h1>;
    if (isLoading) return <h1>Loading user data...</h1>;
    if (!data) return <h1>No user data found</h1>;
    return <div>
            <Banner title={data.title} />
            <CourseGrid courses={data.courses} selection={selection} selectedCourses={selectedCourses} toggleSelected={toggleSelected} />
         </div>
}
export default FetchSchedule;