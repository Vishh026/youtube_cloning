const YOUTUBE_OWN_API = import.meta.env.VITE_YOUTUBE_OWN_API
console.log("key",YOUTUBE_OWN_API)
export const YOUTUBE_VIDEOAPI = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+ YOUTUBE_OWN_API;

export const YOUTUBE_SINGLE_VIDEO = (videoId)=>  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${YOUTUBE_OWN_API}`

export const YOUTUBE_SUGGESTION_API =
  "/api/suggestions/complete/search?client=firefox&ds=yt&q=";


export const YOUTUBE_SEARCH_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&key=" +
  YOUTUBE_OWN_API +
  "&q=";

export const Live_Chat = "https://www.googleapis.com/youtube/v3/liveChat/messages"

