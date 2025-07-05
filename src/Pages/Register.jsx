import React, { use } from "react";
import { TbHandClick } from "react-icons/tb";
import { Link } from "react-router";
import { AuthContext } from "../Auth/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
  const { CreateUser, updateUser, setUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    console.log(name, email, photoUrl, password);

    CreateUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            setUser({ ...user, isplayName: name, photoURL: photoUrl });
          })
          .catch((error) => {
            console.log(error.message);
            setUser(user);
          });
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
      .catch((error) => {
        console.error("Registration Error:", error);
        Swal.fire({
          title: "Registration Failed",
          text: error.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen inter">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pt-8 px-2">
        <h1 className="text-3xl mx-auto font-bold">Create Your Account</h1>
        <div className="card-body w-full">
          <form onSubmit={handleRegister} className="fieldset">
            <label className="label text-black">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
            />

            <label className="label text-black">Photo URL</label>
            <input
              type="text"
              name="photoUrl"
              className="input"
              placeholder="Photo URL"
            />

            <label className="label text-black">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label text-black">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Sign Up Now <TbHandClick size={20}></TbHandClick>{" "}
            </button>
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
