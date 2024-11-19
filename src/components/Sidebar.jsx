import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// subscribe to specfic part of store
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null; // early return
  return (
    <div className="w-[11rem] p-4 shadow-lg ">
      <h1 className="font-bold">{"You>"}</h1>
      <ul style={{ width: "inherit" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>History</li>
        <li>Playlists</li>
        <li>Your Videos</li>
        <li>Music</li>
      </ul>
      <div className="bg-gray-200 h-[0.05rem] w-[100%] my-2" />
      <h1>Libary</h1>
      <h1>History</h1>
      <h1>Watch Later</h1>
      <h1>Liked Videos</h1>
      <div className="bg-gray-200 h-[0.05rem] w-[100%] my-2" />
      <h1 className="font-bold">Subsciptions</h1>
      <ul>
        <li>Movies</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Music</li>
      </ul>
      <div className="bg-gray-200 h-[0.05rem] w-[100%] my-2" />
      <h1 className="font-bold">Explore</h1>
      <ul>
        <li>Films</li>
        <li>Trending</li>
        <li>Movies</li>
        <li>Music</li>
        <li>Gaming</li>
        <li>Sports</li>
      </ul>
    </div>
  );
};

export default Sidebar;
