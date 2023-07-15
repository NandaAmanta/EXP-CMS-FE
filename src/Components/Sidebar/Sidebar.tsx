import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../../Assets/exp-logo.png";
import SidebarItem from "./SidebarItem";
import "./Sidebar.scss";

// Icons
import { AiFillHome } from "react-icons/ai";
import { TbLayoutNavbarExpand } from "react-icons/tb";
import { BsFileImage } from "react-icons/bs";
import { RiLayoutBottom2Fill } from "react-icons/ri";
import { IoIosCreate } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

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
  children?: React.ReactNode;
}

const navLink: Route[] = [
  {
    path: "/",
    name: "Dashboard",
    icon: <AiFillHome />,
  },
  // {
  //   path: "/master-data/",
  //   name: "Master Data",
  //   icon: <MdKeyboardArrowUp />,

  //   subNav: [
  //     "/master-data/navbar",
  //     "/master-data/banner",
  //     "/master-data/footer",
  //   ],
    
  //   subRoutes: [
  //   ],
  // },
  {
    path: "/master-data/navbar",
    name: "Navbar",
    icon: <TbLayoutNavbarExpand />,
  },
  {
    path: "/master-data/banner",
    name: "Banner",
    icon: <BsFileImage />,
  },
  {
    path: "/master-data/footer",
    name: "Footer",
    icon: <RiLayoutBottom2Fill />,
  },
  {
    path: "/create-website",
    name: "Create Website",
    icon: <IoIosCreate />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <IoSettings />,
  },
];

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
                {navLink.slice(0, 5).map((route, index) => {
                  if (route.subRoutes) {
                    return (
                      <SidebarItem
                        setOpen={setOpen}
                        menu={menu}
                        showAnimation={showAnimation}
                        isOpen={isOpen}
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

                {/* Display Settings and Change theme */}
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
                {navLink.slice(5).map((route, index) => (
                  <NavLink
                    to={route.path}
                    key={index}
                    className={`${
                      index + 5 === active
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
        >
          <ArrowBackIosNewOutlinedIcon onClick={toggle} />
        </motion.div>
        <main className="container" style={{margin: "12px !important"}}>
          <div className="topAdmin">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default Sidebar;
