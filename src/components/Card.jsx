import { useState, useEffect } from "react";
import "./PostCard.css";
import likeIcon from "/public/images/like.png";
import send from "/public/images/send.png";
import comment from "/public/images/comment.png";
import Modal from "../pages/Modal";

const PostCard = ({ post }) => {
  const { id, user, content, image } = post;
  const [likes, setLikes] = useState(0);
  const [open, setOpen] =useState(false);

  useEffect(() => {
    const storedLikes = localStorage.getItem(`post-${id}-likes`);
    if (storedLikes) {
      setLikes(parseInt(storedLikes));
    }
  }, [id]);

  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem(`post-${id}-likes`, newLikes);
  };

  const handleOpen=()=>{
    setOpen(true);
  }
  const handleClose=()=>{
    setOpen(false);
  }

  return (
    <div className="post-card">
      <div className="user">
        <img src={user.profilePicture} alt="User" className="user-img" />
        <div>
          <h6>{user.name}</h6>
          <small>{user.jobTitle}</small>
          <small>2 hrs ago</small>
        </div>
      </div>
      <p>{content}</p>
      {image && <img className="post-image" src={image} alt="Post" />}
      <div className="post-actions">
        <button onClick={handleLike}>
          <img src={likeIcon} alt="Like" /> Like {likes}
        </button>
        <button onClick={handleOpen}><img src={comment}></img>Comment</button>
        <Modal isOpen={open} onClose={handleClose}/>
        <button><img src={send}></img>Send</button>
      </div>
    </div>
  );
};

export default PostCard;
