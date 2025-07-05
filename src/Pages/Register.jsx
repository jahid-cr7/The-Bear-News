import React, { use } from "react";
import { TbHandClick } from "react-icons/tb";
import { Link } from "react-router";
import { AuthContext } from "../Auth/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
    const {CreateUser} = use(AuthContext);
    const handleRegister = (e) =>{
          e.preventDefault();
          const email = e.target.email.value;
          const password = e.target.password.value;
          const name = e.target.name.value;
          const photoUrl = e.target.photoUrl.value;
          console.log(name, email, photoUrl, password);

        

          CreateUser(email,password).then((result) => {
            console.log(result.user);
            if (result.user) {
              e.target.reset();
              Swal.fire({
                title: "Registration Successful",
                text: "You have successfully registered!",
                icon: "success",
                confirmButtonText: "OK",
              });
            }

          })
    }


  return (
    <div className="flex items-center justify-center min-h-screen inter">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pt-8 px-2">
        <h1 className="text-3xl mx-auto font-bold">Create Your Account</h1>
        <div className="card-body w-full">
          <form onSubmit={handleRegister} className="fieldset">
            <label className="label">Name</label>
            <input type="text" name="name" className="input" placeholder="Name" />

            <label className="label">Photo URL</label>
            <input type="text" name="photoUrl" className="input" placeholder="Photo URL" />

            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">Sign Up Now <TbHandClick size={20}></TbHandClick> </button>
            <p className="mt-2">
              Already have an account?
              <Link
                className="text-blue-600 underline ml-2 font-bold"
                to={"/auth/login"}
              >
                Login Now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
