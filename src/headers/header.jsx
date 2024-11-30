import React, { useState } from "react";
import ThemeToggleButton from "./ThemeToggleButton";
import { IoMdContacts } from "react-icons/io";
import "../index.css";
import { RiMenu2Line } from "react-icons/ri";
import { GoHome } from "react-icons/go";
import { FiFileText } from "react-icons/fi";
import { HiOutlineBriefcase } from "react-icons/hi";
import { FaServicestack } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa6";
import { X } from "lucide-react";
import Logo from "../assests/logo.png";

const navbar = [
  {
    name: "Home",
    path: "#",
    icons: <GoHome className="size-5" />,
  },
  {
    name: "About",
    path: "#about",
    icons: <FiFileText className=" size-5" />,
  },
  {
    name: "Skills",
    path: "#skills",
    icons: <HiOutlineBriefcase className="size-5" />,
  },
  {
    name: "Services",
    path: "#services",
    icons: <FaServicestack className="size-5 " />,
  },
  {
    name: "Profile",
    path: "#profile",
    icons: <FaPaperPlane className="size-5 " />,
  },
  {
    name: "Contact",
    path: "#contact",
    icons: <IoMdContacts className="size-5" />,
  },
];

const NavbarContainer = ({ closeModal }) => {
  const [activeNav, setActiveNav] = React.useState();
  return (
    <ul className=" flex lg:flex-row flex-col items-center justify-center gap-16 lg:gap-10 ">
      {navbar?.map((nav) => (
        <li
          onClick={() => {
            setActiveNav(nav.path);
            closeModal();
          }}
          className="w-full text-[var(--primary-text)] hover:text-[var(--primary-color)] "
        >
          <a
            href={nav.path}
            className={` flex  gap-7 items-center justify-start pl-10 ${
              activeNav === nav.path ? "text-[var(--primary-color)] " : ""
            } `}
          >
            <div className="flex lg:hidden">{nav.icons}</div>
            <p className=" text-sm  ">{nav.name}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const modalRef = React.useRef(null);

  React.useEffect(() => {
    const closeModal = (event) => {
      if (modalRef.current && !modalRef.current.contains(event?.target)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    document.addEventListener("mousedown", closeModal);
  }, [showMenu]);

  return (
    <div
      className={` w-full  fixed px-5 z-[100] top-0 left-0 right-0 bg-[var(--body-background)] flex items-center justify-center `}
    >
      <nav className="w-full py-5 flex items-center justify-between gap-5 ">
        <div className="  flex flex-row-reverse items-center justify-start gap-4 ">
          <a href="index.html" className=" text-[var(--primary-text)] ">
            SAROJ GT
          </a>
          <RiMenu2Line
            onClick={() => setShowMenu(!showMenu)}
            className=" cursor-pointer text-[var(--primary-text)] size-6 "
          />
          <div
            className={`fixed duration-150 ${
              showMenu ? "left-0 opacity-[100] " : "left-[-1000px] opacity-0 "
            } justify-start flex gap-10  flex-col h-screen left-0  top-0 w-screen backdrop-blur-sm `}
          >
            <div
              ref={modalRef}
              className="flex w-[250px] bg-[var(--body-foreground)]  gap-7 h-screen flex-col items-start justify-start "
            >
              <div className="w-full flex flex-col items-center justify-center">
                <button onClick={()=>setShowMenu(false)} className="  text-end w-full flex justify-end py-7 px-5 text-[var(--primary-text)] ">
                  <X />
                </button>
                <div className="w-full border-b-[1px] border-[var(--border-color)] pb-5 tracking-wide text-[var(--primary-text)] flex flex-col gap-0.5 items-center justify-center">
                  <img src={Logo} className="w-24 h-full " alt="" />
                  <p className=" text-xs ">Saroj GT</p>
                  <span className=" text-sm text-[var(--secondary-text)] ">
                    Full Stack Developer{" "}
                  </span>
                </div>
              </div>
              <NavbarContainer closeModal={() => setShowMenu(false)} />
            </div>
          </div>
        </div>
        <div className="lg:flex hidden bg-[var(--body_background)] py-3 ">
          <NavbarContainer />
        </div>
        <div className={`button-v1 `}>
          <ThemeToggleButton />
        </div>
      </nav>
    </div>
  );
};

export default Header;
