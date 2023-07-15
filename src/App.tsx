import React, { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Routes from "./Config/Routes";
import { AiFillHome } from "react-icons/ai";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

interface Route {
  path: string;
  name: string;
  icon: JSX.Element;
  iconClose?: JSX.Element;
  iconOpen?: JSX.Element;
  subRoutes?: Route[];
}

const route: Route = {
  path: "/",
  name: "Dashboard",
  icon: <AiFillHome />,
  iconClose: <MdKeyboardArrowDown />,
  iconOpen: <MdKeyboardArrowUp />,
};

const showAnimation = {
  hidden: {
    width: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  show: {
    opacity: 1,
    width: "auto",
    transition: {
      duration: 0.5,
    },
  },
};

const App: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Sidebar
        setOpen={setOpen}
        menu={route}
        showAnimation={showAnimation}
        isOpen={isOpen}
      >
        <Routes />
      </Sidebar>
    </>
  );
};

export default App;
