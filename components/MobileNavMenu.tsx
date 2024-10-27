/* eslint-disable padding-line-between-statements */
"use client";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import React, { useState } from "react";

const MobileNavMenu = ({ item, index }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <Link
        color={
          index === 2
            ? "primary"
            : index === siteConfig.navMenuItems.length - 1
              ? "danger"
              : "foreground"
        }
        href="#"
        onClick={item.label === "Login" ? openModal : undefined} // Open modal on 'Login' click
      >
        {item.label}
      </Link>
    </>
  );
};

export default MobileNavMenu;
