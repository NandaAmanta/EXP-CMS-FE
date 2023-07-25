import React, { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Routes from "./Config/Routes";
import { AiFillHome } from "react-icons/ai";

interface Route {
  path: string;
  name: string;
  icon: JSX.Element;
  subRoutes?: Route[];
}

const route: Route = {
  path: "/",
  name: "Dashboard",
  icon: <AiFillHome />,
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
  const [isSubmenuOpen, setSubmenuOpen] = useState(false); // Add isSubmenuOpen state
  const currentPath = window.location.pathname;

  const isLoginRoute = (path: string) => {
    return path === "/login" || "/signup";
  };
  return (
    <>
      {isLoginRoute(currentPath) ? (
        <Routes />
      ) : (
        <Sidebar
          setOpen={setOpen}
          menu={route}
          showAnimation={showAnimation}
          isOpen={isOpen}
          isSubmenuOpen={isSubmenuOpen} // Pass the isSubmenuOpen prop
        >
          <Routes />
        </Sidebar>
      )}
    </>
  );
};

export default App;
