import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <nav className="w-full py-5 bg-black/20 ">
      <div className="mx-auto flex justify-between items-center max-w-3xl">
        <Link href="/">
          <h1 className="text-3xl md:text-6xl font-semibold">Logo <span className="text-primary">Here</span></h1>
        </Link>
      <ModeToggle />
      </div>
    </nav>
  );
}
