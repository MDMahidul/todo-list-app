import React, { useContext, useEffect, useState } from "react";
import { RiMenuUnfoldLine, RiMenuFoldLine, RiListCheck } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { MdDoneAll, MdRemoveDone } from "react-icons/md";
import { FiMoon, FiSun } from "react-icons/fi";
import Button from "./Button";
import { Modal } from "./Modal";
import useTasks from "../hooks/useTasks";

const Sidebar = () => {
  const [isActive, setActive] = useState("false");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { tasks, countTasksByStatus } = useTasks();

  /* Sidebar Responsive Handler */
  const handleToggle = () => {
    setActive(!isActive);
  };

  /* theme toggle handler */
  const handleThemeToggle = () => {
    setTheme((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  /* change theme and store theme data to localStorage */
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  /* sidebar nav items list */
  const navItems = [
    {
      link: `/`,
      label: "All Todos",
      icons: <RiListCheck className="w-5 h-5" />,
      count: tasks.length,
    },
    {
      link: `/completed`,
      label: "Completed Lists",
      icons: <MdDoneAll className="w-5 h-5" />,
      count: countTasksByStatus("completed"),
    },
    {
      link: `/incomplete`,
      label: "Incomplete Lists",
      icons: <MdRemoveDone className="w-5 h-5" />,
      count: countTasksByStatus("incomplete"),
    },
  ];
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">TaskTrek</div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          {isActive ? (
            <RiMenuUnfoldLine className="h-5 w-5" />
          ) : (
            <RiMenuFoldLine className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* full screen sidebar */}
      <div className={`side-navbar ${isActive && "-translate-x-full"} `}>
        <div>
          <div className="w-full  md:flex py-2 justify-center flex-col items-center mx-auto text-center">
            <h3 className="text-3xl font-bold px-4 py-2 rounded-md text-white ">
              TaskTrek
            </h3>
            <p className="text-white -mt-2 text-sm">
              Embark on your task journey
            </p>
          </div>

          <div className="flex flex-col justify-between flex-1 mt-6">
            <Button onClick={() => setIsModalOpen(true)} lable={"Add Task"} />
            <Modal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            <nav>
              {navItems.map((navItem) => (
                <NavLink
                  key={navItem?.label}
                  to={navItem.link}
                  className={({ isActive }) =>
                    `sidebar ${
                      isActive
                        ? "sidebar-active"
                        : "text-gray-100 dark:text-white"
                    }`
                  }
                >
                  {navItem.icons}
                    <span className="mx-4 font-medium">{navItem.label}</span>
                    <span className="font-medium">{navItem.count}</span>
                </NavLink>
              ))}
            </nav>
          </div>

          {/* theme toggle button */}
          <div className="flex justify-center items-center mt-16">
            <button onClick={handleThemeToggle}>
              {theme == "light" ? (
                <FiMoon className="w-6 h-6 text-white" />
              ) : (
                <FiSun className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
