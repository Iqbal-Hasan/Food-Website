import { Link, NavLink } from "react-router-dom";
import "./Components.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/UserContext";

const Navbar = () => {
  const [profileBox, setProfileBox] = useState(false);

  const { user, logOut } = useContext(AuthContext);
  const [hamburger, setHamburger] = useState(true);

  const [username, setUsername] = useState([]);
  const [photourl, setPhotourl] = useState([]);

  useEffect(() => {
    setUsername(JSON.parse(localStorage.getItem("Username")));
    setPhotourl(JSON.parse(localStorage.getItem("PhotoURL")));
  }, []);

  const handlelogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <header className="border-b-2 border-gray-700 bg-white">
      <div className="mx-3">
        {/*  --------------- mobile ------------------ */}
        <div className="mobile flex justify-between items-center py-2 xl:max-w-screen-xl xl:mx-auto">
          {/* Logo */}
          <div>
            <Link to={"/"}>
              <img
                className="w-[50px] min-[570px]:w-[70px]"
                src="https://cdn3.iconfinder.com/data/icons/street-food-and-food-trucker-1/64/pizza-fast-food-bake-bread-256.png"
                alt="logo"
              />
            </Link>
          </div>

          {/* hamburger */}
          <div
            className="text-xl z-50"
            onClick={() => setHamburger(!hamburger)}
          >
            {hamburger ? (
              <FontAwesomeIcon icon={faBars} />
            ) : (
              <FontAwesomeIcon className="text-white" icon={faXmark} />
            )}
          </div>

          {/* Navbar */}
          <nav
            onClick={() => setHamburger(true)}
            className={`flex gap-5 text-4xl justify-center items-center transition-all duration-500 bg-gray-800 z-40 text-white flex-col h-screen min-h-[600px] ${
              hamburger ? "-top-[1000px]" : "top-0"
            } right-0 w-full absolute`}
          >
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/allfooditems"}>All Food Items</NavLink>
            <NavLink to={"/blog"}>Blog</NavLink>

            {user ? (
              <div className="text-2xl flex items-center flex-col gap-5">
                <div className="w-[50px] h-[50px] border-2 border-white overflow-hidden rounded-full flex justify-center items-end">
                  <img
                    className={`${
                      user?.photoURL ? " " : "w-full"
                    } object-cover object-center`}
                    src={`${
                      user?.photoURL
                        ? user.photoURL
                        : photourl
                        ? photourl[0]
                        : "https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/27-man-256.png"
                    }`}
                    alt=""
                  />
                </div>
                <p>
                  Name :{" "}
                  {user?.displayName
                    ? user.displayName
                    : username
                    ? username[0]
                    : "(Please Refresh)"}
                </p>
                <p>
                  <Link to={"/userFoodItems"}>My Food Items</Link>
                </p>
                <p>
                  <Link to={"/addFoodItem"}>Add a Food Items</Link>
                </p>
                <p>
                  <Link to={"/myOrder"}>My Order</Link>
                </p>
                <Link
                  onClick={handlelogOut}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md"
                >
                  Log out
                </Link>
              </div>
            ) : (
              <div className="flex gap-5 text-xl">
                <Link
                  className="text-blue-500 bg-gray-300 py-2 px-4 rounded-md"
                  to={"/login"}
                >
                  Log in
                </Link>
                <Link
                  className="bg-blue-500 text-white py-2 px-4 rounded-md"
                  to={"/signup"}
                >
                  Sign up
                </Link>
              </div>
            )}
          </nav>
        </div>

        {/*  --------------- desktop ------------------ */}
        <div className="desktop justify-between items-center py-5 xl:max-w-screen-xl xl:mx-auto">
          {/* Logo */}
          <Link to={"/"}>
            <div className="flex gap-3 items-center">
              <img
                className="w-[75px]"
                src="https://cdn3.iconfinder.com/data/icons/street-food-and-food-trucker-1/64/pizza-fast-food-bake-bread-256.png"
                alt="logo"
              />
              <h1 className="text-3xl font-bold">Slice</h1>
            </div>
          </Link>

          {/* Navbar */}
          <nav className="flex gap-10 text-3xl ">
            <div>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "activeRouter" : ""
                }
              >
                Home
              </NavLink>
            </div>
            <div>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "activeRouter" : ""
                }
                to={"/allfooditems"}
              >
                All Food Items
              </NavLink>
            </div>

            <div>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "activeRouter" : ""
                }
                to={"/blog"}
              >
                Blog
              </NavLink>
            </div>
          </nav>

          {user ? (
            <div className="relative flex text-xl items-center gap-3 lg:gap-5">
              <Link
                onClick={handlelogOut}
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
              >
                Log out
              </Link>

              <div
                onClick={() => setProfileBox(!profileBox)}
                className="flex cursor-pointer gap-2 border-2 items-center rounded-[999px] p-1 border-gray-600"
              >
                <div className="relative w-[50px] h-[50px] border-2 border-slate-500 overflow-hidden rounded-full flex justify-center items-end">
                  <img
                    className={`${
                      user?.photoURL ? " " : "w-full"
                    } object-cover object-center `}
                    src={`${
                      user?.photoURL
                        ? user.photoURL
                        : photourl
                        ? photourl[0]
                        : "https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/27-man-256.png"
                    }`}
                    alt=""
                  />
                </div>
              </div>
              {/* profile box */}

              <div
                className={`absolute rounded-lg w-[400px] ${
                  profileBox ? "opacity-100 z-50" : "opacity-0 z-50 hidden"
                } bg-gray-300 top-[65px] right-0 p-6 text-center text-2xl duration-300 transition`}
              >
                <p className="py-3">
                  Name :{" "}
                  {user?.displayName
                    ? user.displayName
                    : username
                    ? username[0]
                    : "(Please Refresh)"}
                </p>
                <p className="hover:text-white hover:bg-red-300  duration-300 hover:rounded-md py-3">
                  <Link onClick={() => setProfileBox(false)} to={"/userFoodItems"}>
                    My Food Items
                  </Link>
                </p>
                <p className="hover:text-white hover:bg-red-300 duration-300 hover:rounded-md py-3">
                  <Link onClick={() => setProfileBox(false)} to={"/addFoodItem"}>
                    Add a Food Items
                  </Link>
                </p>
                <p className="hover:text-white hover:bg-red-300 duration-300 hover:rounded-md py-3">
                  <Link onClick={() => setProfileBox(false)} to={"/myOrder"}>
                    My Order
                  </Link>
                </p>
              </div>
            </div>
          ) : (
            <div className="flex gap-5 text-xl">
              <Link
                className="text-blue-500 bg-gray-300 py-2 px-4 rounded-md"
                to={"/login"}
              >
                Log in
              </Link>
              <Link
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
                to={"/signup"}
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
