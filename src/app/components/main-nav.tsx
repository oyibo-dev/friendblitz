"use client";
import clsx from "clsx";
import React, { useState } from "react";

function MainNav() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <div className="mx-auto w-full bg-lila-500 2xl:border-2 justify-center sticky top-0 z-20 2xl:max-w-7xl border-y-2 border-black">
      <div className="mx-auto w-full flex flex-col lg:flex-row py-6 md:py-0 lg:items-center lg:justify-between 2xl:max-w-7xl px-8 md:px-0">
        <div className="text-black items-center flex justify-between flex-row">
          <a
            className="items-center font-bold gap-3 inline-flex text-lg tracking-tighter md:hidden"
            title=""
            aria-label="friend blitz"
            href="/"
          >
            Friend Blitz
          </a>
          <button
            className="focus:outline-none focus:shadow-outline md:hidden ml-auto border-2 border-black bg-red-500"
            onClick={toggleMenu}
          >
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                className={clsx({ hidden: open, "inline-flex": !open })}
                d="M4 6h16M4 12h16M4 18h16"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
              <path
                className={clsx({ hidden: !open, "inline-flex": open })}
                d="M6 18L18 6M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </button>
        </div>
        <nav
          className={clsx(
            "flex-col items-center flex-grow md:flex text-black text-lg font-medium tracking-wide md:flex-row md:justify-start md:mt-0 gap-4 lg:p-0 py-2 md:py-0 md:px-0 md:pb-0 px-5",
            { flex: open, hidden: !open }
          )}
        >
          <a
            className="duration-300 focus:text-orange/90 hover:text-lila-900 px-4 py-2 transform transition md:ml-8 lg:ml-16 2xl:ml-0"
            title=""
            aria-label="free points"
            href="/free-points"
          >
            Free Points
          </a>
          <a
            className="duration-300 focus:text-orange/90 hover:text-lila-900 px-4 py-2 transform transition"
            title=""
            aria-label="leader board"
            href="/leaderboard"
          >
            Leaderboard
          </a>
          <a
            className="duration-300 focus:text-orange/90 hover:text-lila-900 px-4 py-2 transform transition"
            title=""
            aria-label="community"
            href="/community"
          >
            Community
          </a>
          <a
            className="duration-300 focus:text-orange/90 hover:text-lila-900 px-4 py-2 transform transition"
            title=""
            aria-label="support"
            href="/support"
          >
            Support
          </a>

          <a
            className="text-white md:ml-auto bg-black border-l-2 border-black duration-500 ease-in-out focus:outline-none ring-inset ring-offset-black focus:ring-2 focus:ring-black focus:ring-offset-2 h-12 lg:h-20 hover:bg-white hover:text-black inline-flex tracking-wide items-center justify-center px-6 text-center transform transition py-2 md:py-4"
            title=""
            aria-label="follow us on facebook"
            href="https://facebook.com"
          >
            <span>Follow us on Facebook</span>
          </a>
        </nav>
      </div>
    </div>
  );
}

export default MainNav;
