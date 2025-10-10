"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="nav-bar">
      <div className="right-navbar">
        <Image
        src="/logo.png"
        alt="Logo"
        width={200}  
        height={180}
        unoptimized 
        />


      </div>

      <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>


      <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>
         <li onClick={toggleMenu}>
          <Link href="/">Guibela Lavandaria</Link>
        </li>
        <li onClick={toggleMenu}>Lavagem/Limpeza a Seco</li>
        <li onClick={toggleMenu}><Link href="/engomadoria">Engomadoria</Link></li>
        <li onClick={toggleMenu}>Costura</li>
        <li onClick={toggleMenu}>Normas</li>
      </ul>
    </div>
  );
}
