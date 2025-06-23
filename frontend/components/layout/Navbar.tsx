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
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand className="mr-10 flex flex-col justify-start items-start">
          <div className="bg-gradient-to-r from-blue-500 to-pink-500 w-20 h-1 rounded-sm"></div>          
          <p className="font-black text-2xl text-inherit">certpal</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-16" justify="center">
        <NavbarBrand className="mr-40 flex flex-col justify-start items-start">
          <div className="bg-gradient-to-r from-blue-500 to-pink-500 w-16 h-1 rounded-md"></div>
          <p className="font-black text-xl text-inherit">certpal</p>
        </NavbarBrand>
        <NavbarItem>
          <Link className="font-bold" color="foreground" href="#">
            Compare
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="font-bold" color="foreground" href="#">
            Discuss
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="font-bold" color="foreground" href="#">
            Certify
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="default" href="#" variant="flat">
            Sign Up
          </Button>
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

