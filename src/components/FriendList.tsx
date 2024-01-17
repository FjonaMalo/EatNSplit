import Friend from "./Friend";
import { FriendTypes } from "../types";

interface FriendListProps {
  friends: FriendTypes[];
  onSelection: (friend: FriendTypes) => void;
  selectedFriend: FriendTypes | null;
}

const FriendList = ({
  friends,
  onSelection,
  selectedFriend,
}: FriendListProps) => {
  return (
    <div>
      <ul>
        {friends.map((friend: FriendTypes) => (
          <Friend
            friend={friend}
            key={friend.id}
            onSelection={onSelection}
            selectedFriend={selectedFriend}
          />
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
