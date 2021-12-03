import { useState } from "react";
import Like from "../../assets/like.png";

function LikeComponent() {
  const [isLiked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const likesHandle = () => {
    if (isLiked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };
  return (
    <>
      <p className="m-0 text-light liked-container">
        {isLiked ? "Liked!" : ""}
      </p>
      <img
        onClick={likesHandle}
        className={isLiked ? "like-black" : "like"}
        src={Like}
        alt="like icon"
      />
      <p className="text-light">{likes}</p>
    </>
  );
}
export default LikeComponent;
