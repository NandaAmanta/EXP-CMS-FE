// SidebarItem.tsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
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
  isSubmenuOpen: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  setOpen,
  menu,
  showAnimation,
  subRoutes,
  isOpen,
  isSubmenuOpen,
}) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setSubmenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    if (isSubmenuOpen) {
      toggleSubmenu();
      setOpen(false);
    }
  };
  
  return (
    <>
      <NavLink
        to={menu.path}
        className={`${isSubmenuOpen ? "routes__link active" : "routes__link "}`}
        style={{
          justifyContent: isOpen ? "" : "center",
          paddingLeft: isOpen ? "30px" : "0",
          paddingRight: isOpen ? "30px" : "0",
        }}
        onClick={toggleSubmenu}
      >
        <div className="icon" style={{ padding: "3px 0" }}>
          {menu.icon}
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={showAnimation}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="link_text"
            >
              {menu.name}
            </motion.div>
          )}
        </AnimatePresence>
        {subRoutes && (
          <span className="subroutes">
            {submenuOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </span>
        )}
      </NavLink>

      {subRoutes && (
        <motion.div
          variants={showAnimation}
          initial="hidden"
          animate={submenuOpen ? "show" : "hidden"}
          exit="hidden"
          style={{
            marginTop: submenuOpen ? "-14px" : "-13px", // Set marginTop to 0 when submenuOpen, else -20px
            paddingLeft: isOpen ? "27px" : "0",
          }}
        >
          {subRoutes.map((subRoute, subIndex) => (
            <motion.div key={subIndex}>
              <NavLink
                style={{
                  display: submenuOpen ? "flex" : "none",
                  justifyContent: isOpen ? "" : "center",
                  paddingLeft: isOpen ? "32px" : "0",
                }}
                to={subRoute.path}
                className={`${
                  isSubmenuOpen ? "routes__link active" : "routes__link"
                }`}
                onClick={handleLinkClick}
              >
                <div className="icon" style={{ padding: "3px 0" }}>
                  {subRoute.icon}
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text"
                    >
                      {subRoute.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default SidebarItem;
