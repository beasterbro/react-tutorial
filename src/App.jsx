import 'bootstrap/dist/css/bootstrap.min.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useJsonQuery } from './utilities/fetch';
import Banner from './components/Banner'
import CourseList from './components/CourseList'

const FetchSchedule = () => {
  const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');

  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading user data...</h1>;
  if (!data) return <h1>No user data found</h1>;
  console.log(data);
  return <div><Banner title={data.title}/><CourseList courses={data.courses}/></div>//data.users.map(user => <div key={user.id}>{user.firstName} {user.lastName}</div>);
}

const queryClient = new QueryClient();

//export const schedule 

const App = () => {
  const today = new Date();
  const day = today.toLocaleString([], {weekday: 'long'});
  const date = today.toLocaleDateString([], {dateStyle: 'long'})

  return (
    <QueryClientProvider client={queryClient}>
    <div>
     <FetchSchedule />
      <p>Today is {day}, {date}.</p>
    </div>
    </QueryClientProvider>
  );
};

export default App;
