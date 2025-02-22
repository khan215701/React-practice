import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
//   { id: 4, description: "Laptop", quantity: 1, packed: false },
// ];

export default function App() {
  const [items, setItem] = useState([]);

  function handlerAddItem(item) {
    setItem((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItem() {
    const confirm = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (confirm) setItem([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handlerAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onTaggleItem={handleToggleItem}
        onClearItem={handleClearItem}
      />
      <Stats items={items} />
    </div>
  );
}
