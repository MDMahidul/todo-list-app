import React, { useState } from "react";
import { RiMenuUnfoldLine, RiMenuFoldLine, RiListCheck } from "react-icons/ri";
import { HiUser, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { MdDoneAll, MdRemoveDone,MdFormatListBulletedAdd  } from "react-icons/md";


const Sidebar = () => {
  const [isActive, setActive] = useState("false");
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  const navItems = [
    {
      link: `/`,
      label: "All Todos",
      icons: <RiListCheck className="w-5 h-5" />,
    },
    {
      link: `/completed`,
      label: "Completed Lists",
      icons: <MdDoneAll className="w-5 h-5" />,
    },
    {
      link: `/incomplete`,
      label: "Incomplete Lists",
      icons: <MdRemoveDone className="w-5 h-5" />,
    },
  ];
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">TODO</div>
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
          <div className="w-full hidden md:flex py-2 justify-center items-center mx-auto">
            <h3 className="text-2xl font-bold bg-slate-100 px-4 py-2 rounded-md text-red-500">
              Todo List
            </h3>
          </div>

          <div className="flex flex-col justify-between flex-1 mt-6">
            <button className="btn btn-sm w-1/2 mx-auto btn-warning my-4">
              Add Todo <MdFormatListBulletedAdd className="h-5 w-5" />
            </button>
            <nav>
              {navItems.map((navItem) => (
                <NavLink
                  key={navItem?.label}
                  to={navItem.link}
                  className={({ isActive }) =>
                    `sidebar ${
                      isActive
                        ? "sidebar-active"
                        : "text-gray-600 dark:text-white"
                    }`
                  }
                >
                  {navItem.icons}
                  <span className="mx-4 font-medium">{navItem.label}</span>
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
