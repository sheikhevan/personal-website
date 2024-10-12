"use client";

import React, { useState } from "react";
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
}

const NavLink: React.FC<NavLinkProps> = ({
                                             href,
                                             icon,
                                             children,
                                             onClick,
                                         }) => {
    const pathname = usePathname();
    const router = useRouter();
    const isActive = pathname === href;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (href.startsWith('#')) {
            if (pathname === '/') {
                // On home page, use smooth scroll
                const targetId = href.replace("#", "");
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                } else {
                    console.error(`Element with id "${targetId}" not found`);
                }
            } else {
                // Not on home page, navigate to home page with anchor
                router.push(`/${href}`);
            }
        } else {
            // Regular navigation for non-anchor links
            router.push(href);
        }
        if (onClick) onClick();
    };

    return (
        <Button
            variant={isActive ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={handleClick}
        >
            {icon}
            <span className="ml-2">{children}</span>
        </Button>
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
                href="#about"
                icon={<User className="h-4 w-4" />}
                onClick={closeSheet}
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
                    <Button
                        variant="ghost"
                        className="text-3xl hover:bg-white hover:text-hunter text-hunter font-bold"
                    >
                        EA
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