import { useEffect, useState } from "react";

import Badge from "./Badge";
import Sucess from "./success";

import ClockIcon from "/assets/icons/controls/ClockClockwise.svg";
import GearIcon from "/assets/icons/controls/Gear.svg";
import PauseIcon from "/assets/icons/controls/Pause.svg";
import PlayIcon from "/assets/icons/controls/Play.svg";
import TimerIcon from "/assets/icons/timer.svg";

const modes = [
  "focus",
  "breakLow",
  "focus",
  "breakLow",
  "focus",
  "breakLow",
  "focus",
  "breakHigh"
] as const;

const times = {
  focus: 1500,
  breakLow: 300,
  breakHigh: 900
};

const SessionData = () => {
  const [currenctMode, setCurrentMode] = useState(0);
  const [seconds, setSeconds] = useState(times.focus);
  const [check, setCheck] = useState(false);
  const finishedCycle = currenctMode === 7 && seconds === 0;

  const handleCheck = () => {
    setCheck(!check);
  };

  const reset = () => {
    setSeconds(times.focus);
    setCurrentMode(0);
    setCheck(false);
  };

  useEffect(() => {
    if (!check) {
      return;
    }
    const myInterval = setTimeout(() => {
      setSeconds(seconds - 1);
    }, 1000);

    if (finishedCycle) {
      clearTimeout(myInterval);
      setCheck(false);
      return () => clearTimeout(myInterval);
    }
    if (seconds === 0) {
      setSeconds(times[modes[currenctMode + 1]]);
      setCurrentMode(currenctMode + 1);
      setCheck(false);
    }
    return () => clearTimeout(myInterval);
  }, [check, seconds, currenctMode]);

  const cycleLength = times[modes[currenctMode]];

  function calculateMissingPercentage(cycleLength: number): number {
    const totalMinutesInCycle = cycleLength;
    const elapsedMinutes = seconds;

    let remainingMinutes;
    if (elapsedMinutes > totalMinutesInCycle) {
      remainingMinutes =
        totalMinutesInCycle - (elapsedMinutes % totalMinutesInCycle);
    } else {
      remainingMinutes = totalMinutesInCycle - elapsedMinutes;
    }

    const missingPercentage = (remainingMinutes / totalMinutesInCycle) * 100;

    return Math.round(missingPercentage);
  }

  function convertSecondsToMinutesAndSeconds(seconds: number) {
    const remainingMinutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const remainingSeconds = (seconds % 60).toString().padStart(2, "0");
    return { remainingMinutes, remainingSeconds };
  }

  const missingPercentage = calculateMissingPercentage(cycleLength);
  const { remainingMinutes, remainingSeconds } =
    convertSecondsToMinutesAndSeconds(seconds);

  const colorRadial = () => {
    if (finishedCycle) {
      return "text-zinc-100 dark:text-zinc-800";
    }
    if (currenctMode === 7) {
      return "text-cyan-500";
    }
    if (currenctMode % 2 === 0) {
      return "text-lime-500";
    }
    return "text-amber-500";
  };
  return (
    <div className=" flex h-[594px] w-full flex-col rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
      <div className="mb-6 flex justify-between">
        <div>
          <h2 className="mb-1 text-2xl font-bold leading-7 text-zinc-600 dark:text-zinc-400">
            Dados da sessão
          </h2>
          <span className="leading-5 text-zinc-500">
            Acompanhe os próximos cíclos
          </span>
        </div>
        <img
          className="my-auto block flex-none"
          src={TimerIcon}
          alt="timer icon"
        />
      </div>
      <hr className="border-zinc-200 dark:border-zinc-800" />
      {/* container */}
      <div className="flex flex-col gap-6 py-6">
        {/* card */}
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold leading-[22px] text-zinc-500 dark:text-zinc-400">
              Modo atual:
            </h3>
            <span className="text-sm leading-4 text-zinc-400 dark:text-zinc-500">
              Ciclo atual do cronômetro
            </span>
          </div>
          {/* badge */}
          <Badge index={currenctMode} />
        </div>
        {/* card */}
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold leading-[22px] text-zinc-500 dark:text-zinc-400">
              Próximo modo:
            </h3>
            <span className="text-sm leading-4 text-zinc-400 dark:text-zinc-500">
              Qual cíclo será ativado
            </span>
          </div>
          {/* badge */}
          <Badge index={currenctMode === 7 ? 0 : currenctMode + 1} />
        </div>
      </div>
      <div className="flex h-full">
        <div className="group/card relative flex h-full w-full">
          <div
            className={`radial-progress m-auto after:hidden ${colorRadial()}`}
            style={
              {
                "--value": missingPercentage,
                "--thickness": "14px",
                "--size": "224px"
              } as React.CSSProperties
            }
          >
            <p className="text-center font-alt text-6xl font-bold leading-[82px] text-zinc-600 dark:text-zinc-100">
              {remainingMinutes} : {remainingSeconds}
            </p>
          </div>
          <div className="invisible absolute left-0 top-0 z-50 flex h-full w-full flex-1 backdrop-blur-sm group-hover/card:animate-ping">
            <div className="m-auto flex h-56 w-56 items-end justify-center gap-4">
              <div className="flex h-14 w-14 cursor-pointer rounded bg-zinc-100  hover:bg-zinc-200 dark:bg-zinc-700 dark:hover:bg-zinc-800">
                <img className="m-auto" src={GearIcon} alt="Gear icon" />
              </div>
              <div
                onClick={handleCheck}
                className="-mb-2 flex h-[72px] w-[72px] cursor-pointer rounded bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-600 dark:hover:bg-zinc-700"
              >
                {check ? (
                  <img className="m-auto" src={PauseIcon} alt="Pause icon" />
                ) : (
                  <img className="m-auto" src={PlayIcon} alt="Play icon" />
                )}
              </div>
              <div
                onClick={reset}
                className="flex h-14 w-14 cursor-pointer rounded bg-zinc-100  hover:bg-zinc-200 dark:bg-zinc-700 dark:hover:bg-zinc-800"
              >
                <img className="m-auto" src={ClockIcon} alt="Clock icon" />
              </div>
            </div>
          </div>
        </div>
        {finishedCycle && <Sucess btnAction={reset} />}
      </div>
    </div>
  );
};

export default SessionData;
