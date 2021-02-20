import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchPostsUsers } from "../actions";
import PostItem from "./PostItem";
import Header from "./Header";

class PostsList extends Component {
  componentDidMount() {
    this.props.fetchPostsUsers();
  }

  renderPostItem = () => {
    if (!this.props.posts && !this.props.users) return null;
    return this.props.posts.map((item, index) => {
      return (
        <PostItem
          {...item}
          key={index}
          user={this.props.users.find((user) => user.id === item.userId)}
        />
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header header={"Blogs"} />
        <div className="row mt-1">
          <div className="col-10 mx-auto">
            <div className="list-group">{this.renderPostItem()}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    users: state.users,
  };
};

export default connect(mapStateToProps, { fetchPostsUsers })(PostsList);
