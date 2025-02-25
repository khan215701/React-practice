import { FriendList } from "./FriendList";
import { AddFriendForm } from "./AddFriendForm";
import { AddFriendButton } from "./AddFriendButton";
import Button from "./Button";
import { useState } from "react";

export const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [isOpenForm, setOpenForm] = useState(false);
  const [friends, SetFriend] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleAddFriend(friend) {
    SetFriend((friends) => [...friends, friend]);
  }

  function handleOpenForm() {
    setOpenForm((isOpenForm) => !isOpenForm);
    setSelectedFriend(null);
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setOpenForm(false);
  }

  function handleBalanceUpdate(value) {
    SetFriend((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelectedFriend={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
        {isOpenForm && <AddFriendForm onAddFriend={handleAddFriend} />}
        <AddFriendButton onOpenForm={handleOpenForm} isOpenForm={isOpenForm} />
      </div>

      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onBalanceUpdate={handleBalanceUpdate}
        />
      )}
    </div>
  );
}

function FormSplitBill({ selectedFriend, onBalanceUpdate }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoPaidBill, setWhoPaidBill] = useState("");

  const paidByFriend = bill - paidByUser;

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onBalanceUpdate(whoPaidBill === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2> SPLIT A BILL WITH {selectedFriend.name}</h2>
      <label>💰Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>👦Your Expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            e.target.value > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label>{selectedFriend.name} Expense</label>
      <input type="text" value={paidByFriend} readOnly />

      <label>💴Who is paying the bill</label>
      <select
        value={whoPaidBill}
        onChange={(e) => setWhoPaidBill(e.target.value)}
      >
        <option value="user">User</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
