import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full  py-5 bg-black/20 ">
      <div className="mx-auto flex justify-between items-center max-w-2xl">
        <Link href="/">
          <h1>LogoHere</h1>
        </Link>
      <h2>Hi</h2>
      </div>
    </nav>
  );
}
