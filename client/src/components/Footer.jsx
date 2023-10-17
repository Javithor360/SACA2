import React from "react";

import { BsTwitter, BsFacebook, BsYoutube } from "react-icons/bs";

import WhiteLogo from "../assets/img/SACA_WHITE.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <aside className="items-center grid-flow-col">
        <img
          className="w-[4rem] h-[4rem]"
          src={WhiteLogo}
          alt="MediKids Logo"
        />
        <p>Copyright © 2023 - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link>
          <BsTwitter className="w-[1.5rem] h-[1.5rem]" />
        </Link>
        <Link>
          <BsYoutube className="w-[1.5rem] h-[1.5rem]" />
        </Link>
        <Link>
          <BsFacebook className="w-[1.5rem] h-[1.5rem]" />
        </Link>
      </nav>
    </footer>
  );
};
