import 'bootstrap/dist/css/bootstrap.min.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from "react";
import TermFilter from './components/TermFilter'
import SchedulePopup from './components/SchedulePopup';
import CourseList from './components/CourseList';
import { catchTimeConflicts } from './utilities/timing';
import { FetchSchedule } from './components/Schedule';

const terms = ['Fall', 'Winter','Spring']

const queryClient = new QueryClient();
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
    : catchTimeConflicts(course,selectedCourses)
    ? selectedCourses
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
