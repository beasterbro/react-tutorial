import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const schedule = {
  title: "CS Courses for 2022-2023"
};

const App = () => {
  const today = new Date();
  const day = today.toLocaleString([], {weekday: 'long'});
  const date = today.toLocaleDateString([], {dateStyle: 'long'})

  return (
    <div>
      <h1>{schedule.title}</h1>
      
      <p>Today is {day}, {date}.</p>
    </div>
  );
};

export default App;
