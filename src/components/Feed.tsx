import React, { useState, useEffect } from 'react'
import VideoCard from './VideoCard'
import AdCard from './AdCard'
import { getRecommendedVideos } from '../utils/recommendations'

const Feed = () => {
  const [videos, setVideos] = useState([])
  const [useLLM, setUseLLM] = useState(false)

  useEffect(() => {
    // Fetch videos from an API
    const fetchVideos = async () => {
      const fetchedVideos = await getRecommendedVideos(useLLM)
      setVideos(fetchedVideos)
    }
    fetchVideos()
  }, [useLLM])

  const renderItem = (item, index) => {
    if (item.type === 'ad') {
      return <AdCard key={item.id} ad={item} />
    }
    return <VideoCard key={item.id} video={item} />
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recommended for you</h1>
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox"
            checked={useLLM}
            onChange={() => setUseLLM(!useLLM)}
          />
          <span className="ml-2">Use LLM for recommendations</span>
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((item, index) => renderItem(item, index))}
      </div>
    </div>
  )
}

export default Feed