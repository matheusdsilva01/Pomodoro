import { useContext } from "react";

import { ThemeContext } from "../context/theme.context";

import GithubIcon from "/assets/icons/GithubLogo.svg";
import SumIcon from "/assets/icons/SunDim.svg";
import TranslateIcon from "/assets/icons/Translate.svg";

const Header = () => {
  const { setTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    setTheme((theme: string) => (theme === "dark" ? "light" : "dark"));
  };
  return (
    <header className="flex justify-between w-full">
      <div>
        <h1 className="text-[40px] leading-[42px] font-extrabold text-zinc-800 dark:text-zinc-200">
          Pomodoro
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400">
          Gerencie seu tempo de maneira mágica!
        </p>
      </div>
      <div className="flex gap-2 my-auto">
        <div className="bg-zinc-100 w-8 h-8 rounded flex cursor-pointer dark:bg-zinc-800">
          <img
            src={SumIcon}
            onClick={changeTheme}
            className="m-auto"
            alt="sum icon"
          />
        </div>
        <div className="bg-zinc-100 w-8 h-8 rounded flex cursor-pointer dark:bg-zinc-800">
          <img src={GithubIcon} className="m-auto" alt="github icon" />
        </div>
        <div className="bg-zinc-100 w-8 h-8 rounded flex cursor-pointer dark:bg-zinc-800">
          <img src={TranslateIcon} className="m-auto" alt="translate icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
