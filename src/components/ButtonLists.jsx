import React from "react";
import Button from "./Button";
const lists = [
  "All",
  "Gaming",
  "Music",
  "News",
  "Films",
  "Cricket",
  "Movies",
  "Sports",
  "Valentines",
  "Cooking",
  "Live",
];
const ButtonLists = () => {
  return (
    <div>
      <div className="flex ">
        {lists?.map((list, id) => (
          <Button key={id} name={list} />
        ))}
      </div>
    </div>
  );
};

export default ButtonLists;
