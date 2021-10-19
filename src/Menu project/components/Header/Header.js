import React from "react";
import "./header.css";
import MenuCategories from "./MenuCategories";

export default function Header() {
  return (
    <main>
      <section className="menu-section">
        <header>
          <h1>Our Menu</h1>

          <MenuCategories />
        </header>
      </section>
    </main>
    // <MenuCategories />
  );
}
