import React from "react";
import Header from "./components/Header";
import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Banner/>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-9">
            <PostList />
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default App;
