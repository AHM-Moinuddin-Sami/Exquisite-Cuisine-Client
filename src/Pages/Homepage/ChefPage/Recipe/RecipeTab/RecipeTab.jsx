import React from 'react';

const RecipeTab = ({ name, active, handleClick }) => {
  return (
    <button
      className={`${active
          ? "border-b-4 border-blue-500 text-blue-500"
          : "text-gray-500"
        } mx-2 focus:outline-none text-4xl`}
      onClick={handleClick}
    >
      {name}
    </button>
  );


};

export default RecipeTab;