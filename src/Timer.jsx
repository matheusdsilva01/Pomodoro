import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import './style.css';

/* Create function resetTime and setTimeOut global,
  icon from buttons 'play', 'pause' and 'reset'
   */

function App() {

  const [time, setTime] = useState(20);
  const [check, setCheck] = useState(false)

  function notification() {
    new Notification('Time is up!', {
      icon: './img/clock.png',
      body: "You have finished your task",
    });
  }

  const swith = () => {
    setCheck(!check)
  }
  const reset = () => {
    setTime(20)
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
      if (Notification.permission !== "denied" && Notification.permission !== "default") {
        setTime(20);
        setCheck(false);
        clearTimeout(myInterval)
        return notification()
      }
      Swal.fire({
        title: 'O tempo acabou!',
        text: 'Você finalizou a tarefa',
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
    <div className='container'>
      <div className='container-pomodoro'>
        <h1 id='title'>Pomodoro clock</h1>
        <h1>{time}</h1>
        <div className='comands'>
          <button onClick={swith} className={check ? 'pause' : 'start '}>{check ? 'PAUSE' : 'START '}</button>
          <button onClick={reset}>reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
