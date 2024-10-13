"use client";
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

export default function Header() {
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
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr6tzwkSJr3mPy9yIuMQcpjV7AI-O7z8hXSA&s"
              alt="Logo"
              style={{ width: "40px", height: "40px" }}
            />
            <p className="hidden px-2 sm:block font-bold text-inherit">
              DevScripters
            </p>
          </Button>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-7">
          <NavbarItem className="list-none">
            <Link href="/" passHref>
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
                  <Link href="/webdevelopment" passHref>
                    Web Development
                  </Link>
                </DropdownItem>
                <DropdownItem key="usage_metrics" textValue="SEO">
                  <Link href="/seo" passHref>
                    SEO
                  </Link>
                </DropdownItem>
                <DropdownItem key="seo" textValue="Graphic Design">
                  <Link href="/graphicdesign" passHref>
                    Graphic Design
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
          <NavbarItem>
            <Link href="/blog" passHref>
              Blog
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/writeforus" passHref>
              Write For Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/about" passHref>
            About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/contact" passHref>
            Contact Us
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
    </Navbar>
  );
}
