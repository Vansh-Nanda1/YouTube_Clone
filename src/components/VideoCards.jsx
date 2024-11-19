import React from "react";

const VideoCards = ({ info }) => {
  if (!info) return null;
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-lg ">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <div>
        <p className="font-bold py-2">{title}</p>
        <p>{channelTitle}</p>
        <p>{statistics.viewCount} Views</p>
      </div>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-600">
      <VideoCards info={info} />
    </div>
  );
};
export default VideoCards;
