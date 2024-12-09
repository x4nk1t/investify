"use client";
import { usePathname } from "next/navigation";
import Button from "@/components/Button";
import Image from "next/image";
import Logo from "@/assets/investify-logo.png";
import Link from "next/link";
import SearchIcon from "@/components/icons/SearchIcon";

export default function NavBar() {
  const currentPath = usePathname();
  const isPageActive = (path: string) => currentPath === path;
  const navLinks = [
    ["Watchlist", "/watchlist"],
    ["Stocks", "/stocks"],
    ["Market", "/market"],
    ["Portfolio", "/portfolio"],
  ];

  return (
    <nav className="flex justify-between items-center py-7">
      <Link href={"/"}>
        <Image src={Logo} alt="Investify Logo" />
      </Link>
      <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-gray-100">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent text-gray-400 text-sm focus:outline-none w-80"
        />
      </div>
      <ul className="flex flex-row gap-8">
        {navLinks.map(([title, url]) => {
          return (
            <li key={title}>
              <Link
                href={url}
                className={`text-base font-medium hover:text-primary transition ${
                  isPageActive(url) ? "text-primary" : "text-gray-900"
                }`}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="flex gap-4">
        <Button>Signup</Button>
        <Button buttonType="secondary">Login</Button>
      </div>
    </nav>
  );
}
