const Google_Api_Key = "AIzaSyBkGJOxWX3eLd6nRUkjtgeV50zNuiwMOZA";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  Google_Api_Key;

export const YOUTUBE_SEARCH_API =
  "https://api.allorigins.win/get?url=" +
  encodeURIComponent(
    "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
  );

export const LIVE_CHAT_COUNT = 25;
