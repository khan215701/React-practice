import Button from "./Button";

export function AddFriendButton({ onOpenForm, isOpenForm }) {
  return (
    <Button onClick={onOpenForm}>{isOpenForm ? "Close" : "Add Friend"}</Button>
  );
}
