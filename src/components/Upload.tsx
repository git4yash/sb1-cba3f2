import React, { useState } from 'react'
import { Upload as UploadIcon } from 'lucide-react'

const Upload = () => {
  const [file, setFile] = useState(null)

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Upload the file to the server
    console.log('Uploading file:', file)
    // Reset the form
    setFile(null)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Upload a Video</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="video" className="block text-gray-700 font-bold mb-2">
            Choose a video
          </label>
          <input
            type="file"
            id="video"
            accept="video/*"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
        >
          <UploadIcon className="inline-block mr-2" size={20} />
          Upload Video
        </button>
      </form>
    </div>
  )
}

export default Upload