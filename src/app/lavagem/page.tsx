"use client";
import { useState } from "react";
import Navbar from "../components/navbar";
import "./lavagem.css";
import Table from "../components/table";
import Footer from "../components/footer";

export default function Lavagem() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="hero-background">
        <Navbar />
        <div className="hero-content">
          <h1>Lavagem / Limpeza a seco</h1>
        </div>
      </div>

      <div className="title">
        <h1>Lavagem / Limpeza a seco</h1>
      </div>

      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Pesquisar peça..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div>
        <Table tableName="Lavagem" search={searchTerm} />
      </div>

      <Footer />
    </>
  );
}