import { useState } from "react";
import Like from "../../assets/like.png";
import { useEffect } from "react";

function LikeComponent(props) {
  const [isLiked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    setLikes(props.likes)
  }, []);

  const likesHandle = () => {
    if (isLiked) {
      setLiked(false);
      setLikes((props.likes));
    } else {
      setLiked(true);
      setLikes((props.likes) + 1);
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
