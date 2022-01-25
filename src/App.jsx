import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import './App.css';

function App() {
  const [time, setTime] = useState(20);
  const [check, setCheck] = useState(false)

  const swith = () => {
    setCheck(!check)
  }
  const reset = () => {
    setTime(0)
    setCheck(false)
  }

  useEffect(() => {

    if (!check) {
      return
    }
    const myInterval = setTimeout(() => {
      setTime(time - 1);
    }, 1000);
    if (time === 0) {
      Swal.fire({
        title: 'Time is up!',
        text: 'You have finished your task',
        icon: 'success',
        confirmButtonText: 'OK',
        willOpen: () => {
          setTime(20);
          setCheck(false);
          clearTimeout(myInterval);
        }
        })
    }
    return () => clearTimeout(myInterval);
  }, [check, time]);

  return (
    <>
      <h1>hello world</h1>
      <h1>{time}</h1>
      <button onClick={swith}>{check ? 'pause' : 'start'}</button>
      <button onClick={reset}>reset</button>
    </>
  );
}

export default App;
