import React from "react";
import { NavLink } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <div className="bg-white py-6 mt-0 sm:py-8 lg:py-12 mb-10">
        <div className="mx-auto  px-4 md:px-8">
          <div className="flex flex-col items-center">
            <img
              src="/images/404.png"
              className="h-[400px] mr-2"
              alt=" error"
            />
            <h1 className="mb-2 text-center text-2xl font-extrabold text-gray-800 md:text-3xl">
              OOPS ! Page Not Found
            </h1>
            <p className="mb-12 max-w-screen-md text-center text-gray-500 md:text-lg">
              The page you’re looking for doesn’t Exist.
            </p>
            <div
              className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4
                     focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm
                      px-5 py-2.5 text-center inline-flex items-center 
                        mr-2 mb-2"
            >
              <NavLink to="/"> ← Go Home</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
