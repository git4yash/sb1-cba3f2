import React from 'react'
import { User, Settings } from 'lucide-react'

const Profile = ({ user }) => {
  // For demo purposes, we'll use a dummy user
  const dummyUser = {
    username: 'johndoe',
    followers: 1000,
    following: 500,
    videos: 20,
  }

  const profileUser = user || dummyUser

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          <div className="bg-purple-600 text-white rounded-full p-3 mr-4">
            <User size={48} />
          </div>
          <div>
            <h1 className="text-2xl font-bold">@{profileUser.username}</h1>
            <p className="text-gray-600">Boom Creator</p>
          </div>
        </div>
        <div className="flex justify-between mb-6">
          <div className="text-center">
            <p className="font-bold text-xl">{profileUser.followers}</p>
            <p className="text-gray-600">Followers</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-xl">{profileUser.following}</p>
            <p className="text-gray-600">Following</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-xl">{profileUser.videos}</p>
            <p className="text-gray-600">Videos</p>
          </div>
        </div>
        <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
          <Settings className="inline-block mr-2" size={20} />
          Edit Profile
        </button>
      </div>
    </div>
  )
}

export default Profile