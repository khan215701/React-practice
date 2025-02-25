import { Friend } from "./Friend";

export function FriendList({
  friends,
  onShowSpiltBills,
  onSelectedFriend,
  selectedFriend,
}) {
  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <Friend
            key={friend.id}
            friend={friend}
            selectedFriend={selectedFriend}
            onSelectedFriend={onSelectedFriend}
          />
        ))}
      </ul>
    </div>
  );
}
