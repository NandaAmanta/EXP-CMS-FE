import { AiFillHome } from "react-icons/ai";
import { TbLayoutNavbarExpand } from "react-icons/tb";
import { BsFileImage } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import { RiLayoutBottom2Fill } from "react-icons/ri";
import { IoIosCreate,  } from "react-icons/io";
import { IoSettings} from "react-icons/io5";


interface Route {
    path: string;
    name: string;
    icon: JSX.Element;
    subNav?: string[];
    subRoutes?: Route[];
  }

export const navLink: Route[] = [
    {
      path: "/",
      name: "Dashboard",
      icon: <AiFillHome />,
    },
    {
      path: "/master-data/",
      name: "Master Data",
      icon: <FaTools />,
      subRoutes: [
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
      ],
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