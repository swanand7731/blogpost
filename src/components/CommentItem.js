import React from "react";

const CommentItem = (props) => {
  return (
    <div className="list-group-item list-group-item-action flex-column align-items-start">
      <div className="d-flex w-100 justify-content-between">
        <h6 className="mb-1">
          <i className="fa fa-envelope"></i>
          &nbsp;
          {props.email}
        </h6>
      </div>
      <p className="mb-1">
        <i className="fa fa-comments">&nbsp;</i>
        {props.body}
      </p>
    </div>
  );
};

export default CommentItem;
