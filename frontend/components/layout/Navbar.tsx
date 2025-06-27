"use client"
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";

import { Link } from "@heroui/link";
import { Button } from "@heroui/button";



export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden w-full px-4 flex items-center justify-between">
        {/* Left */}
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />

        {/* Center (brand always centered) */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <NavbarBrand className="flex flex-col items-start">
            <div className="bg-gradient-to-r from-blue-300 to-blue-800 w-20 h-1 rounded-sm" />
            <p className="font-black text-2xl text-inherit">thazhath</p>
          </NavbarBrand>
        </div>

        {/* Right placeholder to balance layout */}
        <div className="w-6" />
      </NavbarContent>


      <NavbarContent className="hidden sm:flex gap-16" justify="center">
        <NavbarBrand className="md:mr-28 xl:mr-40 flex flex-col justify-start items-start">
          <div className="bg-gradient-to-r from-blue-300 to-blue-800 w-16 h-1 rounded-md"></div>
          <p className="font-black text-xl text-inherit">thazhath</p>
        </NavbarBrand>
        <NavbarItem>
          <Link className="font-bold" color="foreground" href="#">
            Certifications
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="font-bold" color="foreground" href="#">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="font-bold" color="foreground" href="#">
            Research
          </Link>
        </NavbarItem>
      </NavbarContent>


      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

