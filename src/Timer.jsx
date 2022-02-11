import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import './style.css';

/* Create function resetminutes and setminutesOut global, icon from buttons 'play', 'pause' and 'reset' */

function App() {

  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [check, setCheck] = useState(false);


  function notification() {
    new Notification('Time is up!', {
      icon: './img/clock.svg',
      body: "You have finished your task",
    });
  }

  const verifyCheck = () => {
    setCheck(!check)
  }
  const reset = () => {
    setMinutes(25)
    setSeconds(0)
    setCheck(false)
  }

  useEffect(() => {

    if (!check) {
      return
    }
    const myInterval = setTimeout(() => {
      setSeconds(seconds - 1);
      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }, 1000);

    if (minutes === 0 && seconds === 0) {
      if (Notification.permission !== "denied" && Notification.permission !== "default") {
        setMinutes(25);
        setSeconds(0);
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
          setMinutes(25);
          setSeconds(0);
          setCheck(false);
          clearTimeout(myInterval);
        }
      })

    }
    return () => clearTimeout(myInterval);
  }, [check, minutes, seconds]);
  





  return (
    <div className='container'>
      <div className='container-pomodoro'>
        <h1 id='title'>Pomodoro clock</h1>
        <h1>{minutes.toString().length === 1 ? '0'+ minutes : minutes}:{seconds.toString().length === 1 ? '0'+seconds : seconds}</h1>
        <div className='comands'>
          <button onClick={verifyCheck} >{check ? 'PAUSE' : 'START '}</button>
          <button onClick={reset} id="reset" >RESET</button>
        </div>
      </div>
    </div>
  );
}

export default App;
