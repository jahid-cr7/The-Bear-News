import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/HomeLayout/LeftAside";
import RightAside from "../Components/HomeLayout/RightAside";
import { AuthContext } from "../Auth/AuthContext";

const HomeLayout = () => {
  const navigation = useNavigation();
  return (
    <div>
      <header>
        <Header />
        <section className="w-11/12 mx-auto">
          <LatestNews />
        </section>
        <nav className="w-11/12 mx-auto">
          <Navbar />
        </nav>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-4 my-4">
        <aside className="col-span-3 sticky top-0 h-screen">
          <LeftAside />
        </aside>
        <section className="main col-span-6">
          {navigation.state == "loading" ? (
            <div className="flex justify-center items-center min-h-screen">
              <span className="loading loading-ring loading-7xl size-25"></span>
            </div>
          ) : (
            <Outlet />
          )}
        </section>
        <aside className="col-span-3 sticky top-0 h-screen">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
