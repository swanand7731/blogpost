import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Header from "./Header";
import CommentList from "./CommentList";
import { fetchPostUser } from "../actions";

class PostShow extends Component {
  componentDidMount() {
    this.props.fetchPostUser(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        <Header header={`Blog #${this.props.match.params.id}`} />
        <div className="col-md-10 m-auto">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{this.props.post.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                <i className="fa fa-user"></i>&nbsp;
                {this.props.user.name}
              </h6>
              <p className="card-text">{this.props.post.body}</p>
              <Link to="/posts" className="card-link">
                Back To Posts
              </Link>
            </div>
          </div>
          <CommentList post={this.props.post} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    post: state.post,
    user: state.user,
  };
};

export default connect(mapStateToProps, { fetchPostUser })(PostShow);
