/* eslint-disable react/self-closing-comp */
/* eslint-disable padding-line-between-statements */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import AuthModal from "./modal/AuthModal";
import NextLink from "next/link";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import { signOut } from "next-auth/react";
import { Link as ScrollLink } from "react-scroll"; // Import from react-scroll

const NavMenu = ({ item, user }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  console.log(user); // Check the user object in the console

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Single handler for all click actions
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default link behavior

    if (item.label === "Login" && !user) {
      console.log("Opening login modal");
      openModal(); // Show login modal if the user is not logged in
    } else if (user) {
      console.log("Logging out");
      signOut(); // Call signOut if the user is logged in
    } else if (!item.href.startsWith("#")) {
      console.log(`Navigating to ${item.href}`);
      window.location.href = item.href; // Navigate to external link
    }
  };

  return (
    <>
      {item.href.startsWith("#") ? (
        <ScrollLink
          to={item.href.replace("#", "")}
          smooth={true}
          duration={500}
          className={clsx(
            linkStyles({ color: "foreground" }),
            "relative group text-xl cursor-pointer"
          )}
        >
          {user ? (item.label === "Login" ? "Logout" : item.label) : item.label}
          <span
            className="absolute left-0 bottom-[-2px] h-[2px] bg-primary 
                      transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"
            style={{ width: "100%" }}
          ></span>
        </ScrollLink>
      ) : (
        <NextLink
          className={clsx(
            linkStyles({ color: "foreground" }),
            "relative group text-xl"
          )}
          color="foreground"
          href={item.href}
          onClick={handleClick}
        >
          {user ? (item.label === "Login" ? "Logout" : item.label) : item.label}
          <span
            className="absolute left-0 bottom-[-2px] h-[2px] bg-primary 
                      transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"
            style={{ width: "100%" }}
          ></span>
        </NextLink>
      )}

      {!user && item.label === "Login" && (
        <AuthModal isModalOpen={isModalOpen} closeModal={closeModal} />
      )}
    </>
  );
};

export default NavMenu;
