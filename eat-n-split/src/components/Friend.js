import Button from "./Button";

export function Friend({ friend, selectedFriend, onSelectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance > 0 ? (
        <p className="green">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      ) : friend.balance < 0 ? (
        <p className="red">
          {friend.name} owes you {Math.abs(friend.balance)}$
        </p>
      ) : (
        <p className="black">You're all settled up with {friend.name}!</p>
      )}
      <Button onClick={() => onSelectedFriend(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
