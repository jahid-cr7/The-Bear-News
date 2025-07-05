import React, { use } from "react";
import { Link, NavLink } from "react-router";
import user1 from "../assets/user.png";
import { AuthContext } from "../Auth/AuthContext";
import Swal from "sweetalert2";
const Navbar = () => {
  const { user, signout } = use(AuthContext);
  const signoutNow = () => {
    signout().then(() => {
      Swal.fire({
        title: "Sign Out Successful",
        text: "You have been signed out successfully.",
        icon: "success",
        confirmButtonText: "OK",
      }).catch((error) => {
        console.error("Sign Out Error:", error);
        Swal.fire({
          title: "Sign Out Failed",
          text: error.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
    });
  };
  return (
    <div className="flex inter justify-between mt-6 items-center">
      <div></div>
      <div className="">
        <ol className="flex gap-8 text-base text-[#706F6F]  font-normal inter font-">
          <NavLink to={"/"}>
            <li>Home</li>
          </NavLink>
          <NavLink to={"/"}>
            <li>About</li>
          </NavLink>
          <NavLink to={"/"}>
            <li>Career</li>
          </NavLink>
        </ol>
      </div>
      <div className="login_button flex items-center gap-5">
        {user && <span className="text-sm text-gray-700">{user.email}</span>}

        <img className="w-[30px]" src={user1} alt="" />

        {user ? (
          <button
            className="bg-gray-500 text-white px-4 inter font-bold py-1 rounded-xl"
            onClick={signoutNow}
          >
            Sign Out
          </button>
        ) : (
          <Link
            className="bg-gray-500 text-white px-4 inter font-bold py-1 rounded-xl"
            to={"/auth/login"}
          >
            Login Now
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
