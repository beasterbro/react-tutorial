const Banner = ({title}) => {  
  const today = new Date();
  const day = today.toLocaleString([], { weekday: 'long' });
  const date = today.toLocaleDateString([], { dateStyle: 'long' })

    return (
      <div>
        <h1>{title}</h1>
        <p>Today is {day}, {date}.</p>
      </div>
    );
  };

export default Banner;
