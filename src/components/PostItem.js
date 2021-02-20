import React from "react";
import { Link } from "react-router-dom";

const PostItem = (props) => {
  return (
    <Link
      to={`/posts/${props.id}`}
      className="list-group-item list-group-item-action flex-column align-items-start"
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{props.title}</h5>
      </div>
      <p className="mb-1">{props.body}</p>
      <small>
        <i className="fa fa-user"></i>&nbsp; {props.user && props.user.name}
      </small>
    </Link>
  );
};

export default PostItem;
