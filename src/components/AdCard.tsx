import React from 'react'
import { ExternalLink } from 'lucide-react'

const AdCard = ({ ad }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={ad.imageUrl} alt={ad.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{ad.title}</h3>
        <p className="text-gray-600 mb-4">{ad.description}</p>
        <a
          href={ad.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-purple-600 hover:text-purple-800"
        >
          Learn More
          <ExternalLink className="ml-1" size={16} />
        </a>
      </div>
    </div>
  )
}

export default AdCard