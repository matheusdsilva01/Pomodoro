import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(25);

  useEffect(() => {
    const myInterval = setTimeout(() => {
      setTime(time - 1);
    }, 1000);
    if (time === 0) {
      clearTimeout(myInterval);
    }
  }, [time]);

  return (
    <>
      <h1>hello world</h1>
      <h1>{time}</h1>
    </>
  );
}

export default App;
