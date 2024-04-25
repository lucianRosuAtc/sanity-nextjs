import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa6";

const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  return (
    <div className="flex flex-col mt-8 bg-black/60 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 border-t-2 border-orange-500 pt-6 md:pt-0">
        <div className="flex justify-center items-center">
          <Link href="/">
            <h1 className="text-3xl md:text-5xl font-semibold">
              Luc<span className="text-primary">ian</span> D
              <span className="text-primary">ev</span>
            </h1>
          </Link>
        </div>

        <div className="flex flex-col justify-start items-center py-6 md:py-10">
          <div className="flex justify-center items-center text-orange-500">
            <Link
              href="https://twitter.com/LucianRosuATC"
              target="_blank"
              className="hover:text-orange-200"
            >
              <FaXTwitter className="h-8 w-8" />
            </Link>
            <a
              href="mailto:lucian.rosu.atc@gmail.com"
              target="_blank"
              className="px-3 hover:text-orange-200"
            >
              <TfiEmail className="h-8 w-8 mx-4" />
            </a>
            <Link
              href="https://www.linkedin.com/in/lucian-rosu-atc/"
              target="_blank"
              className="hover:text-orange-200"
            >
              <FaLinkedin className="h-8 w-8" />
            </Link>
          </div>
        </div>
      </div>

      {/* Date  */}
      <div className="flex justify-center px-4 text-white pt-3 pb-6">
        <p className="text-sm md:text-sm">
          <span className="pr-1">&copy;</span>{" "}
          {`${year} Lucian Dev, All rights reserved.`}{" "}
        </p>
      </div>
    </div>
  );
}
