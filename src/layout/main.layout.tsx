import Header from "../components/header";
import SessionData from "../components/sessionData";
import SessionTodos from "../components/sessionTodos";

const MainLayout = () => {
  return (
    <div className="flex">
      <div className="m-auto mt-14 w-[1120px]">
        <Header />
        <div className="mt-12 flex flex-col gap-9 gap-y-4 p-4 lg:flex-row">
          <SessionData />
          <SessionTodos />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
