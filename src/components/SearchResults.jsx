import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../Constant";
import { Link, useSearchParams } from "react-router-dom";
import VerticalCart from "./VerticalCart";

const SearchResults = () => {
  const [videos, setVideos] = useState([]);
  // const {id} =videos
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query") || "";

  useEffect(() => {
    if (!query) return;
    const ShowSearchResults = async () => {
      const data = await fetch(YOUTUBE_SEARCH_API + query);
      const json = await data.json();

      setVideos(json.items || []);
    };
    ShowSearchResults();
  }, [query]);

  return (
    <div>
      {videos.map((video) => (
        <Link
          key={video.id.videoId || video.id}
          to={"/watch?v=" + video.id.videoId || video.id}
        >
          <VerticalCart video={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
