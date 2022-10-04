import 'bootstrap/dist/css/bootstrap.min.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from "react";
import { useJsonQuery } from './utilities/fetch';
import TermFilter from './components/TermFilter'
import Banner from './components/Banner'
import CourseList from './components/CourseList'

const terms = ['Fall', 'Winter','Spring']

const FetchSchedule = (selection) => {
  const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');

  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading user data...</h1>;
  if (!data) return <h1>No user data found</h1>;
  return <div><Banner title={data.title} /><CourseList courses={data.courses} selection={selection.selection} /></div>//data.users.map(user => <div key={user.id}>{user.firstName} {user.lastName}</div>);
}

const queryClient = new QueryClient();

//export const schedule 

const App = () => {
  const today = new Date();
  const day = today.toLocaleString([], { weekday: 'long' });
  const date = today.toLocaleDateString([], { dateStyle: 'long' })
  const [selection , setSelection] = useState(() => terms[0]);
  const setTerm = (val) => {
    setSelection(val)
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <p>Today is {day}, {date}.</p>
        <TermFilter terms={terms} selection={selection} setSelection={setTerm}/>
      </div>
      <div>
        <FetchSchedule selection={selection}/>
      </div>

    </QueryClientProvider>
  );
};

export default App;
