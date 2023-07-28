// Sidebar.tsx
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../../Assets/exp-logo.webp";
import SidebarItem from "./SidebarItem";
import "./Sidebar.scss";
import {navLink} from "./SidebarMenu"

// Icons
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface Route {
  path: string;
  name: string;
  icon: JSX.Element;
  subNav?: string[];
  subRoutes?: Route[];
}

interface SidebarItemProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  menu: Route;
  showAnimation: {
    hidden: {
      width: number;
      opacity: number;
      transition: {
        duration: number;
      };
    };
    show: {
      opacity: number;
      width: string;
      transition: {
        duration: number;
      };
    };
  };
  subRoutes?: Route[];
  isOpen: boolean;
  isSubmenuOpen: boolean;
  children?: React.ReactNode;
}



function Sidebar({
  setOpen,
  menu,
  showAnimation,
  isOpen,
  children,
}: SidebarItemProps) {
  const { pathname } = useLocation();
  const [isMobile, setMobile] = useState(false);
  const toggle = () => setOpen(!isOpen);
  const active = navLink.findIndex((e) => e.path === pathname);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 468) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="main">
      <div className="main__container">
        <motion.div
          animate={{
            width: isOpen ? "250px" : " 65px",
          }}
          initial={false}
          className={`main__sidebar `}
        >
          <div className={`main__section_top ${isOpen ? "open" : ""}`}>
            <section
              style={{
                paddingTop: isOpen ? "15px" : "15px",
                justifyContent: isOpen ? "" : "right",
              }}
            >
              <motion.div
                animate={{
                  width: isOpen ? "80px" : "52px",
                }}
                initial={false}
                className={`logo`}
              >
                <img src={Logo} alt="" />
              </motion.div>

              <section className="routes">
                <span
                  style={{
                    paddingLeft: isOpen ? "10px" : "0",
                    fontSize: isOpen ? "16px" : "9px",
                  }}
                >
                  Main Menu
                </span>
                {navLink.slice(0, 3).map((route, index) => {
                  if (route.subRoutes) {
                    return (
                      <SidebarItem
                        setOpen={setOpen}
                        menu={route}
                        showAnimation={showAnimation}
                        subRoutes={route.subRoutes}
                        isOpen={isOpen}
                        isSubmenuOpen={menu === route && isOpen} // Check if submenu is open
                        key={index}
                      />
                    );
                  }

                  return (
                    <NavLink
                      to={route.path}
                      key={index}
                      className={`${
                        index === active
                          ? "routes__link active"
                          : "routes__link "
                      }`}
                      style={{
                        justifyContent: isOpen ? "" : "center",
                        paddingLeft: isOpen ? "30px" : "0",
                        paddingRight: isOpen ? "30px" : "0",
                      }}
                    >
                      <div className="icon">{route.icon}</div>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            variants={showAnimation}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="link_text"
                          >
                            {route.name}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </NavLink>
                  );
                })}

                <div
                  className="line-sidebar"
                  style={{ width: isOpen ? "180px" : "48px" }}
                ></div>
                <span
                  className="preference"
                  style={{
                    paddingLeft: isOpen ? "10px" : "0",
                    fontSize: isOpen ? "16px" : "9px",
                  }}
                >
                  Preference
                </span>
                {navLink.slice(3).map((route, index) => (
                  <NavLink
                    to={route.path}
                    key={index}
                    className={`${
                      index + 3 === active
                        ? "routes__link active"
                        : "routes__link"
                    }`}
                    style={{
                      justifyContent: isOpen ? "" : "center",
                      paddingLeft: isOpen ? "30px" : "0",
                      paddingRight: isOpen ? "30px" : "0",
                    }}
                  >
                    <div className="icon">{route.icon}</div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          variants={showAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className="link_text"
                        >
                          {route.name}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </NavLink>
                ))}
              </section>
            </section>
          </div>
        </motion.div>

        <motion.div
          animate={{
            left: isOpen ? "232px" : "47px",
          }}
          initial={false}
          className={`bar`}
          onClick={toggle}
        >
          {isOpen ? <ArrowBackIosNewOutlinedIcon /> : <ArrowForwardIosIcon />}
        </motion.div>
        <main style={{ marginLeft: "70px !important" }}>
          <div className="topAdmin">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default Sidebar;
