'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Badge } from "@nextui-org/react";
import { ShoppingBasket, X } from "lucide-react";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function Header() {
  const products = useSelector((state: any) => state.addProductReducer)

  return (
    <Navbar id="navBar">
      <NavbarBrand>
        Logo
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <NavbarItem >
          <Link href="/products" aria-current="page" color="secondary">
            محصولات
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="/">
            خانه
          </Link>
        </NavbarItem>


      </NavbarContent>

      <NavbarContent as="div" justify="end">

        <Link href={'/basket'}>
          <Badge content={products.length > 0 ? products.length : 0} color="danger">
            <ShoppingBasket size={32} className="cursor-pointer" />
          </Badge>
        </Link>

      </NavbarContent>
    </Navbar>
  )
}
