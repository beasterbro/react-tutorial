import 'bootstrap/dist/css/bootstrap.min.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from "react";
import { useJsonQuery } from './utilities/fetch';
import TermFilter from './components/TermFilter'
import Banner from './components/Banner'
import CourseGrid from './components/CourseGrid'
import SchedulePopup from './components/SchedulePopup';
import CourseList from './components/CourseList';

const terms = ['Fall', 'Winter','Spring']

const FetchSchedule = ({selection, selectedCourses, toggleSelected}) => {
  const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');
  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading user data...</h1>;
  if (!data) return <h1>No user data found</h1>;
  courses = data.courses;
  return <div><Banner title={data.title} /><CourseGrid courses={data.courses} selection={selection} selectedCourses={selectedCourses} toggleSelected={toggleSelected} /></div>
}

const queryClient = new QueryClient();
var courses;
//export const schedule 

const App = () => {
  const [selection , setSelection] = useState(() => terms[0]);
  const [selectedCourses, setSelectionCourse] = useState([])
  const [open, setOpen] = useState(false)
  const today = new Date();
  const day = today.toLocaleString([], { weekday: 'long' });
  const date = today.toLocaleDateString([], { dateStyle: 'long' })

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false)
  const toggleSelected = (course) => setSelectionCourse(
    selectedCourses.includes(course)
    ? selectedCourses.filter(x => x !== course)
    : [...selectedCourses,course]
    );

  const setTerm = (val) => {
    setSelection(val)
  }
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <p>Today is {day}, {date}.</p>
        <TermFilter terms={terms} selection={selection} setSelection={setTerm}/>
        <button className='btn btn-outline-dark' onClick={openModal}><i className='bi bi-cart4'>Course Plan</i></button>
        <SchedulePopup open={open} close={closeModal}>
          Course Plan
          <CourseList selectedCourses={selectedCourses}/>
        </SchedulePopup>
      </div>
      <div>
        <FetchSchedule selection={selection} selectedCourses={selectedCourses} toggleSelected={toggleSelected}/>
      </div>

    </QueryClientProvider>
  );
};

export default App;
