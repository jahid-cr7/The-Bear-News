import React, { use } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Auth/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const { signInUser } = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);

        if (result.user) {
          e.target.reset();
          Swal.fire({
            title: "Login Successful",
            text: "You have successfully logged in!",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.error("Login Error:", error);
        Swal.fire({
          title: "Login Failed",
          text: "Wrong Email or Password",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen inter">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pt-8 px-2">
        <h1 className="text-3xl mx-auto font-bold">Login to Your Account</h1>
        <div className="card-body w-full">
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">
              Login <IoMdLogIn size={20}></IoMdLogIn>
            </button>
            <p className="mt-2">
              Don't have an account?
              <Link
                className="text-blue-600 underline ml-2"
                to={"/auth/register"}
              >
                Register Now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
