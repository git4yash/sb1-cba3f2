import React from 'react'
import { Link } from 'react-router-dom'
import { Video, Upload, User, LogOut } from 'lucide-react'
import { auth } from '../utils/auth'

const Header = ({ user }) => {
  const handleSignOut = () => {
    auth.signOut()
    window.location.href = '/signin'
  }

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-purple-600 flex items-center">
          <Video className="mr-2" />
          Buz
        </Link>
        <nav>
          {user ? (
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-gray-600 hover:text-purple-600">
                  <Video className="inline-block mr-1" size={20} />
                  Feed
                </Link>
              </li>
              <li>
                <Link to="/upload" className="text-gray-600 hover:text-purple-600">
                  <Upload className="inline-block mr-1" size={20} />
                  Upload
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-600 hover:text-purple-600">
                  <User className="inline-block mr-1" size={20} />
                  Profile
                </Link>
              </li>
              <li>
                <button onClick={handleSignOut} className="text-gray-600 hover:text-purple-600">
                  <LogOut className="inline-block mr-1" size={20} />
                  Sign Out
                </button>
              </li>
            </ul>
          ) : (
            <Link to="/signin" className="text-gray-600 hover:text-purple-600">
              Sign In
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header