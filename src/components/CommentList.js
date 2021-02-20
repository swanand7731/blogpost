import React, { Component } from "react";
import { connect } from "react-redux";
import CommentItem from "./CommentItem";

class CommentList extends Component {
  render() {
    return (
      <React.Fragment>
        <h4 className="mt-3">Comments</h4>
        <hr />
        <div className="list-group">
          {this.props.comments &&
            this.props.comments.map((comment) => (
              <CommentItem key={comment.id} {...comment} />
            ))}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};

export default connect(mapStateToProps)(CommentList);
