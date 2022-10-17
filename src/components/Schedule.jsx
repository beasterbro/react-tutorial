import { useDbData } from '../utilities/firebase';
import Banner from './Banner'
import CourseGrid from './CourseGrid'

const FetchSchedule = ({ setTitle, selection, selectedCourses, toggleSelected, setEditCourse }) => {
    const [data, error] = useDbData('/');
    if (error) return <h1>Error loading data: {error.toString()}</h1>;
    if (data === undefined) return <h1>Loading data...</h1>;
    if (!data) return <h1>No data found</h1>;
    setTitle(data.title)
    return <div>
            <CourseGrid courses={data.courses} selection={selection} selectedCourses={selectedCourses} toggleSelected={toggleSelected} setEditCourse={setEditCourse}/>
         </div>
}
export default FetchSchedule;