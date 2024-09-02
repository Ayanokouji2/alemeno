import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Course } from "../types/courseType";
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import {FaWindowClose} from "react-icons/fa"

export default function Navbar() {
  const location = useLocation();
  const [active, setActive] = useState(false)
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);


  const courses = useSelector((state: any) => state.course);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);

  };

  const navigate = useNavigate()
  const delay = 1000;
  useEffect(() => {
    if (searchText == '') {
      setFilteredData([])
      return
    }
    const searchTimeout = setTimeout(() => {
      console.log("called")
      const filtered = courses.filter((item: any) =>
        item.name.toLowerCase().includes(searchText.toLowerCase()) == true
        || item.instructor.toLowerCase().includes(searchText.toLowerCase()) == true
      );
      setFilteredData(filtered);
    }, delay);

    return () => clearTimeout(searchTimeout);
  }, [searchText]);

  return (
    <nav className=" navbar flex justify-between items-center p-3 text-xs md:text-lg bg-purple-100 ">
      {/* Nav Logo */}
      <div>
        <h1 className="font-semibold text-purple-600">
          <Link to="/">Course Island</Link>
        </h1>
      </div>
      {/* Nav Items */}
      <div className="flex gap-10 font-medium flex-1 justify-end mr-2 ">
        {/* Search Bar */}
        {location.pathname === "/courses" && (
          <div className="relative w-48 md:w-80">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500" />
            <input
              type="search"
              value={searchText}
              onChange={handleSearch}
              placeholder="Search course, instructor "
              className="w-full pl-10 pr-4 py-2 text-sm peer font-normal border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            {filteredData.length > 0 && (
              <div className="absolute bg-white border   peer-focus:block border-gray-300 mt-2 rounded-lg shadow-lg w-full z-10">

                {filteredData.map((item: Course, index) => (
                  <div
                    key={index}
                    className="p-2 border-b last:border-none hover:bg-gray-100 hover:cursor-pointer"
                    onClick={() => navigate(`/course/${item.id}`)}>
                    {item?.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        
      </div>
      <div className={`nav-items  flex gap-8 ${active?"active":""}`}>
          <div onClick={()=>setActive(false)}
            className="md:hidden block  absolute top-2 right-2 text-2xl">
            <FaWindowClose/>
          </div>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive ? "text-purple-600" : "text-gray-600"
            }
          >
            Courses
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "text-purple-600" : "text-gray-600"
            }
          >
            Dashboard
          </NavLink>
        </div>
        <div className="md:hidden block"
          onClick={()=>setActive(true)}>
          <GiHamburgerMenu/>
        </div>
    </nav>
  );
}
