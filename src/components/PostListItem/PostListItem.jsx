import { useState } from "react";
import "./PostListItem.css";

const PostListItem = ({
  label,
  onDelete,
  id,
  onToggleLiked,
  onToggleImportant,
  important,
  like,
}) => {
  let classNames =
    "app-list-item d-flex justify-content-between list-group-item";

  if (important) {
    classNames += " important";
  }

  if (like) {
    classNames += " like";
  }

  return (
    <li className={classNames}>
      <span className="app-list-item-label" onClick={() => onToggleLiked(id)}>
        {label}
      </span>
      <div className="d-flex justify-content-center align-items-center">
        <button
          onClick={() => onToggleImportant(id)}
          type="button"
          className="btn-star btn-sm"
        >
          <i className="fa fa-star"></i>
        </button>
        <button
          onClick={() => onDelete(id)}
          type="button"
          className="btn-trash btn-sm"
        >
          <i className="fa fa-trash-o"></i>
        </button>
        <i className="fa fa-heart"></i>
      </div>
    </li>
  );
};

export default PostListItem;
