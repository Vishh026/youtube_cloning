import React, { useEffect, useState } from 'react'
import { YOUTUBE_SEARCH_API } from '../Constant'
import { useSearchParams } from 'react-router-dom'
import VerticalCart from './VerticalCart'

const SearchResults = () => {
  const [videos,setVideos] = useState([])
  const {id} =videos
  const [searchParams] = useSearchParams()
  const query = searchParams.get("search_query") || ""

  useEffect(()=> {
    if(!query) return;
    ShowSearchResults()
  },[query])

  const ShowSearchResults = async() => {
    const data = await fetch(YOUTUBE_SEARCH_API+ query)
    const json = await data.json()
    
    setVideos(json.items || [])
  }
  
  return (
   <div>
    {videos.map(video => (
      
      <VerticalCart video = {video} key = {video.id}/>
    ))}
   </div>
  )
}

export default SearchResults
