"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, icon, children, onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} passHref>
      <Button
        variant={isActive ? "secondary" : "ghost"}
        className="w-full justify-start"
        onClick={onClick}
      >
        {icon}
        <span className="ml-2">{children}</span>
      </Button>
    </Link>
  );
};

const NavigationBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => setIsOpen(false);

  const NavContent: React.FC = () => (
    <>
      <NavLink
        href="/"
        icon={<Home className="h-4 w-4" />}
        onClick={closeSheet}
      >
        Home
      </NavLink>
      <NavLink
        href="/blog"
        icon={<BookOpen className="h-4 w-4" />}
        onClick={closeSheet}
      >
        Blog
      </NavLink>
    </>
  );

  return (
    <nav className="backdrop-blur border-b-2 border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end h-16">
          <div className="hidden md:flex items-center space-x-4">
            <NavContent />
          </div>
          <div className="flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[200px] sm:w-[300px]">
                <nav className="flex flex-col space-y-4 mt-4">
                  <NavContent />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
