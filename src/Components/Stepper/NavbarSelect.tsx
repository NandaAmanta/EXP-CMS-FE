import React from "react"

const NavbarSelect = () => {
  const size:number = 5;

  return (
    <>
      <div className="navbarSelect">
        <label
          htmlFor="years"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        ></label>

        <select
          id="years"
          size={size}
          className="text-sm rounded-lg block w-full p-2.5 bg-transparent border-transparent	"
        >
          <option>
            <div className="navbarSelect___list_navbar">banner</div>
          </option>
        </select>
      </div>
    </>
  );
}
export default NavbarSelect;
