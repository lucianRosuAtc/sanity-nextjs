import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <nav className="w-full py-5 bg-black/50 mx-auto">
      <div className="mx-auto flex justify-between items-center max-w-4xl px-8">
        <Link href="/">
          <h1 className="text-3xl md:text-5xl font-semibold">Luc<span className="text-primary">ian</span>  D<span className="text-primary">ev</span></h1>
        </Link>
      <ModeToggle />
      </div>
    </nav>
  );
}
