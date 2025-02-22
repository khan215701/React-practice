export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list </em>
      </p>
    );
  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const packedPercent = Math.round((numPacked / numItem) * 100);
  return (
    <footer className="stats">
      <em>
        {packedPercent === 100
          ? "You got everything! Ready to go"
          : `You have ${numItem} items in your list, you already packed ${numPacked}(
        ${packedPercent}%)`}
      </em>
    </footer>
  );
}
