import 'bootstrap/dist/css/bootstrap.min.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from "react";
import { catchTimeConflicts } from './utilities/timing';
import SchedulePage from './components/SchedulePage';

const terms = ['Fall', 'Winter','Spring']

const queryClient = new QueryClient();
//export const schedule 

const App = () => {
  const [selection , setSelection] = useState(() => terms[0]);
  const [selectedCourses, setSelectionCourse] = useState([])
  const [open, setOpen] = useState(false)

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
      <SchedulePage terms={terms} selection={selection} setTerm={setTerm}
         openModal={openModal} open={open} closeModal={closeModal} 
         selectedCourses={selectedCourses} toggleSelected={toggleSelected}/>
    </QueryClientProvider>
  );
};

export default App;
