"use client";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Link from 'next/link';
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  return (
    <Navbar isBordered className="text-balance text-center bg-slate-50 z-10" position="sticky">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Button
            auto
            color="inherit"
            aria-label="menu"
            className="flex items-center"
          >
            <Image
              src="/Images/images"
              alt="Logo"
              width= "50"
              height= "40"
            />
            <p className="hidden px-2 sm:block font-bold text-inherit">
              DevScripters
            </p>
          </Button>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-7">
          <NavbarItem className="list-none">
            <Link className={`link ${pathname === "/" ? "active" : ''}`} href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  radius="sm"
                  variant="light"
                >
                  Our Services
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="devscripters"
                className="custom-dropdown-menu w-[180px]"
              >
                <DropdownItem key="webdevelopment" textValue="Web Development">
                  <Link className={`link ${pathname === "/pages/webdevelopment" ? "active" : ''}`} href="/pages/webdevelopment">
                    Web Development
                  </Link>
                </DropdownItem>
                <DropdownItem key="usage_metrics" textValue="SEO">
                  <Link className={`link ${pathname === "/pages/seo" ? "active" : ''}`} href="/pages/seo">
                    SEO
                  </Link>
                </DropdownItem>
                <DropdownItem key="seo" textValue="Graphic Design">
                  <Link className={`link ${pathname === "/pages/graphicdesign" ? "active" : ''}`} href="/pages/graphicdesign">
                    Graphic Design
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
          <NavbarItem>
            <Link className={`link ${pathname === "/pages/blog" ? "active" : ''}`} href="/pages/blog">
              Blog
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className={`link ${pathname === "/pages/writeforus" ? "active" : ''}`} href="/pages/writeforus">
              Write For Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className={`link ${pathname === "/pages/about" ? "active" : ''}`} href="/pages/about">
            About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className={`link ${pathname === "/pages/contact" ? "active" : ''}`} href="/pages/contact">
            Contact Us
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
    </Navbar>
  );
}
