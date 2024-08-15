import React from 'react';

const Sidebar = () => {
  // Dummy categories
  const categories = ['Technology', 'Health', 'Lifestyle', 'Business'];

  return (
    <aside className="col-md-3 sidebar">
      <div className="card">
        <div className="card-header">
          Categories
        </div>
        <ul className="list-group list-group-flush">
          {categories.map((category, index) => (
            <li className="list-group-item" key={index}>{category}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
