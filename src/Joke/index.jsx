import React, { useState } from 'react';
import './style.css';

export const Joke = (props) => {
  const { userAvatar, userName, text, likes, dislikes } = props;

  const [like, setLike] = useState(likes);
  const [disslike, setDisslike] = useState(dislikes);

  const handleClickLike = () => {
    setLike(like + 1);
  };

  const handleClickDisslike = () => {
    setDisslike(disslike + 1);
  };

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} alt="User Avatar" />
          <p className="user-name">{userName}</p>
        </div>
        <p className="joke__text">{text}</p>
      </div>
      <div className="joke__likes">
        <button
          onClick={handleClickLike}
          id="btn-up"
          className="btn-like btn-like--up"
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {like}
        </span>
        <button
          onClick={handleClickDisslike}
          id="btn-down"
          className="btn-like btn-like--down"
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {disslike}
        </span>
      </div>
    </div>
  );
};
