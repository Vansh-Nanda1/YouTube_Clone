import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./utils/ChatSlice";
import { generateRandomName, generateRandomString } from "./utils/Helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  let dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomString(20) + "🚀",
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="w-full h-[600px] mx-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full p-2 ml-2 "
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: generateRandomString(10),
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="px-2 py-1 w-[15rem] border border-black"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="mx-4 px-5 py-1 bg-green-500 rounded-lg text-xl text-white">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
