import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from "react";
import { catchTimeConflicts } from './utilities/timing';
import SchedulePage from './components/SchedulePage';
import CourseEditor from "./components/CourseEditor";
import Banner from './components/Banner'

const terms = ['Fall', 'Winter', 'Spring']

const queryClient = new QueryClient();

const App = () => {
  const [selection, setSelection] = useState(() => terms[0]);
  const [selectedCourses, setSelectionCourse] = useState([])
  const [open, setOpen] = useState(false)
  const [editCourse, setEditCourse] = useState([])
  const [title,setTitle] = useState([])

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false)
  const toggleSelected = (course) => setSelectionCourse(
    selectedCourses.includes(course)
      ? selectedCourses.filter(x => x !== course)
      : catchTimeConflicts(course, selectedCourses)
        ? selectedCourses
        : [...selectedCourses, course]
  );

  const setTerm = (val) => {
    setSelection(val)
  }
  return (
    <QueryClientProvider client={queryClient}>
      <Banner title={title} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <SchedulePage setTitle={setTitle} terms={terms} selection={selection} setTerm={setTerm}
              openModal={openModal} open={open} closeModal={closeModal}
              selectedCourses={selectedCourses} toggleSelected={toggleSelected}
              editCourse={editCourse} setEditCourse={setEditCourse} />} />
          <Route path="/edit" element={<CourseEditor course={editCourse} />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
export default App;
