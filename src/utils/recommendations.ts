import axios from 'axios'

const API_URL = 'https://api.example.com' // Replace with your actual API URL

export const getRecommendedVideos = async (useLLM: boolean) => {
  try {
    const response = await axios.get(`${API_URL}/recommendations`, {
      params: { useLLM },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching recommendations:', error)
    return []
  }
}

// Mock implementation for demonstration purposes
export const getMockRecommendedVideos = (useLLM: boolean) => {
  const videos = [
    { id: 1, url: 'https://example.com/video1.mp4', likes: 1000, user: 'user1' },
    { id: 2, url: 'https://example.com/video2.mp4', likes: 2000, user: 'user2' },
    { id: 3, url: 'https://example.com/video3.mp4', likes: 1500, user: 'user3' },
  ]

  const ads = [
    {
      id: 'ad1',
      type: 'ad',
      title: 'Amazing Product',
      description: 'Check out this incredible offer!',
      imageUrl: 'https://example.com/ad1.jpg',
      link: 'https://example.com/product1',
    },
  ]

  // Insert an ad after every 5 videos
  const combinedContent = []
  videos.forEach((video, index) => {
    combinedContent.push(video)
    if ((index + 1) % 5 === 0) {
      combinedContent.push(ads[0])
    }
  })

  if (useLLM) {
    // Simulate LLM-based sorting (in reality, this would be done on the server)
    return combinedContent.sort(() => Math.random() - 0.5)
  }

  return combinedContent
}