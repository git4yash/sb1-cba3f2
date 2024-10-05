import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import VideoCard from './VideoCard'
import { ArrowLeft } from 'lucide-react'

const UserVideos = () => {
  const { username } = useParams()
  const [videos, setVideos] = useState([])

  useEffect(() => {
    // Fetch user's videos from an API
    // For now, we'll use dummy data
    setVideos([
      { id: 1, url: 'https://example.com/video1.mp4', likes: 1000, user: username },
      { id: 2, url: 'https://example.com/video2.mp4', likes: 2000, user: username },
      { id: 3, url: 'https://example.com/video3.mp4', likes: 1500, user: username },
    ])
  }, [username])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Videos by @{username}</h1>
        <Link 
          to="/" 
          className="flex items-center text-purple-600 hover:text-purple-800"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Recommended
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  )
}

export default UserVideos