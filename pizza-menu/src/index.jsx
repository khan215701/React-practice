import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { pizzaData } from "./data/pizzaData";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizza = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our Menu </h2>
      {pizza > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're working on Your Menu</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <ul>
      <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <div>
          <h3>{pizzaObj.name}</h3>
          <p>{pizzaObj.ingredients}</p>
          <span>{pizzaObj.soldOut ? "Sold Out" : `$${pizzaObj.price}.00`}</span>
        </div>
      </li>
    </ul>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isShopOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isShopOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're Closed Now Please Come between {openHour}:00 to {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're working from {openHour}:00 to {closeHour}:00 Come visit us or
        Order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
