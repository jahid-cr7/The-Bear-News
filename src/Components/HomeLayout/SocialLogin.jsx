import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";
import { AuthContext } from "../../Auth/AuthContext";
import { Link } from "react-router";

const SocialLogin = () => {
  const { signInWithGoogle } = use(AuthContext);
  const googleLogin = () => {
    signInWithGoogle();
  };

  return (
    <div className="">
      <h2 className="font-bold mb-4">Login With</h2>
      <div className="">
        <button
          onClick={googleLogin}
          className="flex items-center btn w-full mb-2 bg-white  border-gray-300 hover:bg-green-500 hover:text-white hover:border-0"
        >
          <FcGoogle size={20}></FcGoogle>
          Login With Google
        </button>
        <Link
          to={"/auth/login"}
          className="flex items-center btn w-full bg-white border border-gray-300 hover:bg-blue-500 hover:text-white hover:border-0 hover:duration-300"
        >
          <MdOutlineEmail size={20}></MdOutlineEmail> Login With Email
        </Link>
      </div>
    </div>
  );
};

export default SocialLogin;
