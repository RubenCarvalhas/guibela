"use client";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./engomadoria.css";
import Table from "../components/table";

export default function Engomadoria() {
  return (
    <> 
    <div className="hero-background">
  <Navbar />
  <div className="hero-content">
    <h1>Engomadoria</h1>
  </div>
</div>

<div className="title">
    <h1>Engomadoria</h1>
</div>

<section className="table-section">
        <Table />
</section>

<section>

</section>

</>

  );
}
