import React from 'react';
import Header from './components/Header';
import PostList from './components/PostList';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <PostList />
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default App;
