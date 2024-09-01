"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Home, BookOpen, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  smoothScroll?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  icon,
  children,
  onClick,
  smoothScroll,
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = pathname === href;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (smoothScroll) {
      e.preventDefault();
      router.push(href);
    }
    if (onClick) onClick();
  };

  return (
    <Link href={href} passHref>
      <Button
        variant={isActive ? "secondary" : "ghost"}
        className="w-full justify-start"
        onClick={handleClick}
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

  useEffect(() => {
    const handleSmoothScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 0);
        }
      }
    };

    handleSmoothScroll();
    window.addEventListener("hashchange", handleSmoothScroll);

    return () => {
      window.removeEventListener("hashchange", handleSmoothScroll);
    };
  }, []);

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
        href="/#about"
        icon={<User className="h-4 w-4" />}
        onClick={closeSheet}
        smoothScroll
      >
        About
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
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <Link href="/" passHref>
          <Button variant="ghost" className="text-lg font-semibold">
            Evan Alvarez
          </Button>
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <NavContent />
        </div>
        <div className="flex items-center md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
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
    </nav>
  );
};

export default NavigationBar;
