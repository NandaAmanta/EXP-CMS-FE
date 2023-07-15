import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

interface Route {
  path: string;
  name: string;
  icon: JSX.Element;
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
  isOpen: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  setOpen,
  menu,
  showAnimation,
  isOpen,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="menu__container">
      <NavLink
        to={menu.path}
        className={`menu ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="icon">{menu.icon}</div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={showAnimation}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="menu_text"
            >
              {menu.name}
            </motion.div>
          )}
        </AnimatePresence>
      </NavLink>
    </div>
  );
};

export default SidebarItem;
