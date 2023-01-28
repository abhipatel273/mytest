import React, { useState } from "react";
import Menu from "./RestaurantMenu.js";
import MenuData from "./MenuData.js";

const UniqList = [
  ...new Set(
    Menu.map((curelem) => {
      return curelem.category;
    })
  ),
  "All",
];

export default function Restaurant() {
  const [menuData, setMenuData] = useState(Menu);
  const [menulist] = useState(UniqList);

  const filtervalue = (item) => {
    if (item === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curelem) => {
      return curelem.category === item;
    });
    setMenuData(updatedList);
  };

  return (
    <>
      <nav className="navbar-menu d-flex justify-content-center mt-5">
        {menulist.map((curelem) => {
          return (
            <>
              <button
                className="btn-group btn"
                onClick={() => filtervalue(curelem)}
              >
                {curelem}
              </button>
            </>
          );
        })}
      </nav>
      <MenuData menudatacard={menuData} />
    </>
  );
}
