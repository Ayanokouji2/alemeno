import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Course } from "../types/courseType";

export default function Navbar() {
  const location = useLocation();

  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const courses = useSelector((state: any) => state.course);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
	
  };
  
  const navigate=useNavigate()
  useEffect(() => {
    const delay = 1000; 
	if(searchText==''){
		setFilteredData([])
		return
	}
    const searchTimeout = setTimeout(() => {
		console.log("called")
      const filtered = courses.filter((item: any) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())==true
	  	|| item.instructor.toLowerCase().includes(searchText.toLowerCase())==true
      );
      setFilteredData(filtered);
    }, delay);

    return () => clearTimeout(searchTimeout);
  }, [searchText]); 

  return (
    <nav className="flex justify-between items-center p-3 text-lg bg-purple-100">
      {/* Nav Logo */}
      <div>
        <h1 className="font-semibold text-purple-600">
          <Link to="/">Course Island</Link>
        </h1>
      </div>
      {/* Nav Items */}
      <div className="flex gap-10 font-medium">
        {/* Search Bar */}
        {location.pathname === "/courses" && (
          <div className="relative w-80">
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

                {filteredData.map((item:Course, index) => (
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

        <div>{true ? <h3>Hey, Shivam</h3> : <button>Sign In</button>}</div>
      </div>
    </nav>
  );
}
