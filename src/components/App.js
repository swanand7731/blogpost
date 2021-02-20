import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import PostsList from "./PostsList";
import PostShow from "./PostShow";

import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="container-fullwidth">
      <BrowserRouter>
        <Navbar />
        <Route path="/posts" exact component={PostsList} />
        <Route path="/posts/:id" component={PostShow} />
      </BrowserRouter>
    </div>
  );
};

export default App;
