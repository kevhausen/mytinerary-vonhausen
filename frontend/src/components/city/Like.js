import { useState } from "react";
import Like from "../../assets/like.png";
import { useEffect } from "react";
import { connect } from "react-redux";
import interactionActions from "../../redux/actions/interactionActions";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Link } from "react-router-dom";

function LikeComponent(props) {
  const [isLiked, setLiked] = useState(false);
  const { likes, user } = props;
  const [likeQuantity, setLikeQuantity] = useState(0)

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header className="popover-header" as="h3">
        Logged-in Users Only
      </Popover.Header>
      <Popover.Body>
        Please{" "} 
        <Link className="body-link" to="/signin">
           SIGN IN{" "} 
        </Link>
        or{" "} 
        <Link className="body-link" to="/signup">
          SIGN UP{" "} 
        </Link>
        to <strong>MyTinerary</strong> to be able to hit like on itineraries!
      </Popover.Body>
    </Popover>
  );

  useEffect(() => {
    setLikeQuantity(likes.length)
    if (user) {
      if (likes.includes(user._id) && isLiked === false) {
        setLiked(true);
      }
    }
    if (!user) {
      setLiked(false);
    }
  }, [user, likes]);

  const likesHandle = () => {
    if (props.user) {
      if (likes.includes(user._id)) {
        props.setLike(props.user._id, props.itineraryId, false);
        setLiked(false);
        setLikeQuantity(likeQuantity)
        
      } else {
        props.setLike(props.user._id, props.itineraryId, true);
        setLiked(true);
        setLikeQuantity(likeQuantity+1)
      }
    }
  };
  return (
    <>
      <p className="m-0 text-warning text-shadow fw-bold liked-container">
        {isLiked ? "Liked!" : ""}
      </p>
      {!props.user ? (
        <OverlayTrigger trigger="click" placement="auto" overlay={popover}>
          <img
            onClick={likesHandle}
            className={isLiked ? "like-black" : "like"}
            src={Like}
            alt="like icon"
          />
        </OverlayTrigger>
      ) : (
        <img
          onClick={likesHandle}
          className={isLiked ? "like-black" : "like"}
          src={Like}
          alt="like icon"
        />
      )}

      <p className="text-light display-6">{likeQuantity}</p>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.authReducer.response,
  };
};

const mapDispatchToProps = {
  setLike: interactionActions.setLike,
};

export default connect(mapStateToProps, mapDispatchToProps)(LikeComponent);
