import Button from "./Button";
import { useState } from "react";

export function AddFriendForm({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=118836");
  function handleSumbit(e) {
    e.preventDefault();
    const id = crypto.randomUUID();
    const newFriend = { id, name, image: `${image}${id}`, balance: 0 };

    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48?u=118836");
  }
  return (
    <form className="form-add-friend" onSubmit={handleSumbit}>
      <label>friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Image Url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}
