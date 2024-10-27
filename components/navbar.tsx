"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import NavMenu from "./NavMenu";
import MobileNavMenu from "./MobileNavMenu";
import { getUser } from "@/others/utils/userInfo"; // Assuming you have this function

export const Navbar = () => {
  const [user, setUser] = useState<{
    name?: string | null;
    email?: string | null;
    image?: string | null;
  } | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser();
        console.log("Fetched user data:", userData);

        // Ensure compatibility with user being null or undefined
        setUser(userData || null);

        // If user is logged in and email exists, call the external registration function
        if (userData?.email) {
          console.log("User data available, calling handleUserRegistration...");
          await handleUserRegistration(userData || null); // Call the separate function for user registration
          console.log("User registered successfully.");
        } else {
          console.log("User email is missing, skipping user registration.");
        }
      } catch (error) {
        console.error("Error fetching or registering user:", error);
      }
    };

    fetchUser();
  }, []);

  const handleUserRegistration = async (userData: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }) => {
    try {
      console.log("Sending POST request to register user:", userData);

      const response = await fetch(
        "http://localhost:5000/api/v1/user/create-user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: userData.name,
            email: userData.email,
            image: userData.image, // Send the user image if available
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to register user");
      }

      const data = await response.json();
      console.log("User registered successfully, response data:", data);

      return data;
    } catch (error) {
      console.error("Error registering user:", error);
      throw error;
    }
  };

  return (
    <>
      <NextUINavbar
        maxWidth="xl"
        position="sticky"
        className="bg-white dark:bg-darkBg"
      >
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              <p className="font-bold text-2xl text-inherit">
                <span className="text-primary text-2xl font-bold">{`<`}</span>
                Mahfuj
                <span className="text-primary text-2xl font-bold">{`/>`}</span>
              </p>
            </NextLink>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <div className="hidden lg:flex gap-8 justify-start ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NavMenu item={item} user={user} />
              </NavbarItem>
            ))}
          </div>
          <NavbarItem className="hidden sm:flex gap-2">
            <ThemeSwitch />
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu>
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <MobileNavMenu index={index} item={item} />
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </NextUINavbar>
    </>
  );
};
