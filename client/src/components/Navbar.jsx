import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
        <Link to="/" className="flex items-center space-x-1">
          <h1 className="font-bold text-xl flex flex-wrap items-center">
            <span className="text-indigo-600">Lost &</span>
            <span className="text-indigo-800">Found</span>
          </h1>
        </Link>
        <form className="bg-gray-100 p-2 rounded-lg flex items-center shadow-inner">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none w-24 sm:w-64 px-2"
          />
          <button type="submit" className="text-gray-600">
            <FaSearch />
          </button>
        </form>
        <ul className="flex gap-4 items-center">
          <Link to="/">
            <li className="text-gray-700 hover:text-indigo-600 transition duration-200">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="text-gray-700 hover:text-indigo-600 transition duration-200">
              About
            </li>
          </Link>
          <Link to="/profile" className="flex items-center space-x-2">
            {currentUser ? (
              <img
                className="rounded-full h-8 w-8 object-cover border-2 border-indigo-600"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className="text-gray-700 hover:text-indigo-600 transition duration-200">
                Sign in
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
