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
    <header className="flex w-full justify-between">
      <div>
        <h1 className="text-40 font-extrabold text-zinc-800 dark:text-zinc-200">
          Pomodoro
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400">
          Gerencie seu tempo de maneira mágica!
        </p>
      </div>
      <div className="my-auto flex gap-2">
        <div
          onClick={changeTheme}
          className="flex h-8 w-8 cursor-pointer rounded bg-zinc-100 dark:bg-zinc-800"
        >
          <img src={SumIcon} className="m-auto" alt="sum icon" />
        </div>
        <div className="flex h-8 w-8 cursor-pointer rounded bg-zinc-100 dark:bg-zinc-800">
          <a
            href="http://github.com/matheusdsilva01/pomodoro"
            target="_blank"
            rel="noopener noreferrer"
            className="m-auto"
          >
            <img src={GithubIcon} alt="github icon" />
          </a>
        </div>
        <div className="flex h-8 w-8 cursor-pointer rounded bg-zinc-100 dark:bg-zinc-800">
          <img src={TranslateIcon} className="m-auto" alt="translate icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
