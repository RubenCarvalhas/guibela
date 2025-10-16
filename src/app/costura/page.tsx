"use client";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Table from "../components/table";
import "./costura.css";

export default function Costura() {
  return (
    <>
      <div className="hero-background">
        <Navbar />
        <div className="hero-content">
          <h1>Costura</h1>
        </div>
      </div>

      <div className="title">
        <h1>Costura</h1>
      </div>

    <div className="row-table">
        <Table tableName="Calcas_Saias" title="Calças / Saias"/>
        <Table tableName="Vestidos" title="Vestidos" />
    </div>

    <div className="row-table">
        <Table tableName="Camisas_Blusas" title="Camisas / Blusas"/>
        <Table tableName="Casacos" title="Casacos"/>
    </div>

    <div className="row-table">
        <Table tableName="Cortinados" title="Cortinados (Preço por Metro)"/>
    </div>

      <Footer />
    </>
  );
}
