import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { auth } from './utils/auth'
import Header from './components/Header'
import Footer from './components/Footer'
import Feed from './components/Feed'
import Upload from './components/Upload'
import Profile from './components/Profile'
import UserVideos from './components/UserVideos'
import SignIn from './components/Auth/SignIn'

function App() {
  const [user, setUser] = useState(auth.getCurrentUser())

  useEffect(() => {
    const checkAuth = () => {
      setUser(auth.getCurrentUser())
    }
    window.addEventListener('storage', checkAuth)
    return () => window.removeEventListener('storage', checkAuth)
  }, [])

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header user={user} />
        <main className="flex-grow">
          <Routes>
            <Route path="/signin" element={user ? <Navigate to="/" /> : <SignIn />} />
            <Route path="/" element={user ? <Feed /> : <Navigate to="/signin" />} />
            <Route path="/upload" element={user ? <Upload /> : <Navigate to="/signin" />} />
            <Route path="/profile" element={user ? <Profile user={user} /> : <Navigate to="/signin" />} />
            <Route path="/user/:username" element={user ? <UserVideos /> : <Navigate to="/signin" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App