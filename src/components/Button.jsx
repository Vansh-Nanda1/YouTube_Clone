import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <p className="m-4 bg-gray-400 px-4 py-2 text-lg font-semibold">{name}</p>
    </div>
  );
};

export default Button;
