import React from 'react'
import { useParams } from 'react-router-dom'

function VideoListPage() {
  const { role, genre } = useParams();

  return (
    <div>
      <h2>Video List Page</h2>
      <p>Role: {role}</p>
      <p>Genre: {genre}</p>
      {/* Display your videos here */}
    </div>
  )
}

export default VideoListPage