import { useEffect, useState } from "react";

import Swal from "sweetalert2";

import Header from "../components/header";

const initialTime = { minutes: 25, seconds: 0 };

const MainLayout = () => {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [check, setCheck] = useState(false);
  function notification() {
    new Notification("Time is up!", {
      icon: "./img/clock.svg",
      body: "You have finished your task"
    });
  }

  const verifyCheck = () => {
    setCheck(!check);
  };

  const reset = () => {
    setMinutes(initialTime.minutes);
    setSeconds(initialTime.seconds);
    setCheck(false);
  };

  useEffect(() => {
    if (!check) {
      return;
    }
    const myInterval = setTimeout(() => {
      setSeconds(seconds - 1);
      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }, 1000);

    if (minutes === 0 && seconds === 0) {
      if (
        Notification.permission !== "denied" &&
        Notification.permission !== "default"
      ) {
        setMinutes(25);
        setSeconds(0);
        setCheck(false);
        clearTimeout(myInterval);
        return notification();
      }
      Swal.fire({
        title: "O tempo acabou!",
        text: "Você finalizou a tarefa",
        icon: "success",
        confirmButtonText: "OK",
        willOpen: () => {
          setMinutes(25);
          setSeconds(0);
          setCheck(false);
          clearTimeout(myInterval);
        }
      });
    }
    return () => clearTimeout(myInterval);
  }, [check, minutes, seconds]);

  return (
    <div className="flex">
      <div className="m-auto w-[1120px] mt-14">
        <Header />
      </div>
    </div>
  );
};

export default MainLayout;
