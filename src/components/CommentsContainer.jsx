import React from "react";

import user_image from "../assets/user.png"

const commentsData = [
  {
    name: "Rahul",
    text: "Hey everyone! What's your plan for the weekend?",
    replies: [
      {
        name: "Priya",
        text: "Hey Rahul! I'm thinking of going for a trek. How about you?",
        replies: [
          {
            name: "Rahul",
            text: "That sounds awesome! I was planning to watch a new movie, but a trek might be a better idea.",
            replies: [
              {
                name: "Amit",
                text: "Count me in for the trek! Where are you planning to go, Priya?",
                replies: [],
              },
              {
                name: "Priya",
                text: "I was thinking of the Sunrise Hills. It’s not too far and has great views.",
                replies: [],
              },
              {
                name: "Rahul",
                text: "Sunrise Hills it is then! Let's finalize the timing in the group chat.",
                replies: [],
              },
            ],
          },
          {
            name: "Amit",
            text: "Watching a movie sounds chill too. Which one were you planning to watch, Rahul?",
            replies: [],
          },
        ],
      },
      {
        name: "Amit",
        text: "I’m thinking of staying in and binge-watching some shows. Any recommendations?",
        replies: [],
      },
      {
        name: "Priya",
        text: "If you're into thrillers, you should check out 'The Silent Edge.' It’s intense!",
        replies: [],
      },
    ],
  },
  {
    name: "Nisha",
    text: "Hey guys, anyone good with graphic design? I need help with a project.",
    replies: [
      {
        name: "Amit",
        text: "I can help! What exactly do you need?",
        replies: [
          {
            name: "Nisha",
            text: "Thanks, Amit! I need a banner for my startup’s website. Something minimal and modern.",
            replies: [],
          },
        ],
      },
      {
        name: "Priya",
        text: "Oh, I love working on banners! Mind if I pitch in too?",
        replies: [],
      },
    ],
  },
  {
    name: "Rahul",
    text: "Quick poll: Tea or Coffee?",
    replies: [
      {
        name: "Amit",
        text: "Tea all the way! Can’t start my day without it.",
        replies: [],
      },
      {
        name: "Priya",
        text: "Coffee for me! It’s the fuel that keeps me going.",
        replies: [],
      },
    ],
  },
  {
    name: "Amit",
    text: "What’s the best book you’ve read recently?",
    replies: [
      {
        name: "Priya",
        text: "‘The Alchemist.’ It’s so inspiring!",
        replies: [],
      },
      {
        name: "Rahul",
        text: "‘Atomic Habits.’ It really helped me improve my daily routine.",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12 rounded-md"
        src={user_image}
        alt="user"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};



const CommentsLists = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment  data={comment} />
      <div className="pl-5 ml-5 border-l-black">
        <CommentsLists comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsLists comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
