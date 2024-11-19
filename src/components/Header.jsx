import React, { useEffect, useState } from "react";
import hamburger from "../assets/3388823.png";
import youtubeicon from "../assets/Logo_youtube.jpg";
import usericon from "../assets/user.icon.jpg";
import { useDispatch, useSelector } from "react-redux";
import { toogleMenu } from "./utils/AppSlice";
import { YOUTUBE_SEARCH_API } from "./utils/Constants";
import { cacheResults } from "./utils/SearchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSeacrhSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSeacrhSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    const array = JSON.parse(json.contents);
    const newSuggestions = array?.[1] || [];
    setSuggestions(newSuggestions);

    dispatch(
      cacheResults({
        [searchQuery]: newSuggestions,
      })
    );
  };

  const toogleMenuHandler = () => {
    dispatch(toogleMenu());
  };
  return (
    <div>
      <div className=" grid grid-flow-col p-3 shadow-lg items-center">
        <div className="flex col-span-1 gap-2 justify-end">
          <img
            onClick={toogleMenuHandler}
            src={hamburger}
            alt="hamburger"
            className="w-8 h-8 cursor-pointer"
          />
          <img src={youtubeicon} alt="youtube icon" className="h-8" />
        </div>
        <div className=" col-span-10 w-3/4 mx-auto">
          <div className="flex w-[100%]">
            <input
              type="text"
              placeholder="Search here"
              className="w-[100%] py-2  px-4 text-xl rounded-tl-2xl rounded-bl-2xl border border-gray-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <button className="w-[10%] rounded-tr-2xl rounded-br-2xl border py-2 px-4 border-gray-400 bg-gray-100">
              🔍
            </button>
          </div>
          {showSuggestions && (
            <div className="fixed py-2 px-5 w-[51%] bg-white rounded-lg shadow-lg border-gray-100 mt-1">
              <ul>
                {suggestions.length > 0 &&
                  suggestions?.map((s) => (
                    <li
                      key={s}
                      className="py-2 px-3 shadow-sm hover:bg-gray-100"
                    >
                      🔍 {s}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
        <div className="col-span-1">
          <img src={usericon} alt="usericon" className="w-10" />
        </div>
      </div>
    </div>
  );
};

export default Header;
