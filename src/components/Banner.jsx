import Navigation from "./Navigation";
import User from "./User";
const Banner = ({title, profile}) => {  
  const today = new Date();
  const day = today.toLocaleString([], { weekday: 'long' });
  const date = today.toLocaleDateString([], { dateStyle: 'long' })
    return (
      <div>
        <h1>{title}</h1>
        <p>Today is {day}, {date}.</p>
        <Navigation />
        <User profile={profile} user={profile.user}/>
      </div>
    );
  };

export default Banner;
