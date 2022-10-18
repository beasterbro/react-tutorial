import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from "react";
import { catchTimeConflicts } from './utilities/timing';
import SchedulePage from './components/SchedulePage';
import CourseEditor from "./components/CourseEditor";
import Banner from './components/Banner'
import { useProfile } from './utilities/profile';

const terms = ['Fall', 'Winter', 'Spring']

const queryClient = new QueryClient();

const App = () => {
  const [selection, setSelection] = useState(() => terms[0]);
  const [selectedCourses, setSelectionCourse] = useState([])
  const [open, setOpen] = useState(false)
  const [editCourse, setEditCourse] = useState([])
  const [title,setTitle] = useState([])
  const [profile, profileLoading, profileError] = useProfile();


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

  if (profileError) return <h1>Error loading profile: {`${profileError}`}</h1>;
  if (profileLoading) return <h1>Loading user profile</h1>;
  if (!profile) return <h1>No profile data</h1>;
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
        <Banner title={title} profile={profile}/>
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
