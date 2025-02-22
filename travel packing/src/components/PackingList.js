import { useState } from "react";
import { Item } from "./Item";

export function PackingList({
  items,
  onDeleteItem,
  onTaggleItem,
  onClearItem,
}) {
  let sortedItems;
  const [sorted, setSorted] = useState("input");

  if (sorted === "input") sortedItems = items;
  if (sorted === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sorted === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul style={{ overflow: "hidden" }}>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onTaggleItem={onTaggleItem}
          />
        ))}
      </ul>
      <select
        className="actions"
        value={sorted}
        onChange={(e) => setSorted(e.target.value)}
      >
        <option value="input">Sort by Input</option>
        <option value="description">Sort by Description</option>
        <option value="packed">Sort by Packed</option>
      </select>
      <button onClick={() => onClearItem()}>Clean All</button>
    </div>
  );
}
