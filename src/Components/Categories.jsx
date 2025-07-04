import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  const categories = use(categoryPromise);
  console.log(categories);
  return (
    <div>
      <h1 className="font-bold">All Categories ({categories.length})</h1>

      <div className="grid grid-cols-1 gap-4 mt-4 w-full">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            className="font-semibold btn p-3 border text-start bg-white shadow-none hover:bg-gray-300"
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;