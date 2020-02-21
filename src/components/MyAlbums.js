import React from "react"
import { Link } from "react-router-dom"
import "../styles/MyAlbums.css"

export default function(props) {
  return (
    <div className="albumContainer">
      <h1>my albums</h1>
      <div className="albumCover">
        <div>
          <img src="http://placehold.it/250" />
          <p>Album Name</p>
        </div>
        <div>
          <img src="http://placehold.it/250" />
          <p>Album Name</p>
        </div>
        <div>
          <img src="http://placehold.it/250" />
          <p>Album Name</p>
        </div>
        <div>
          <img src="http://placehold.it/250" />
          <p>Album Name</p>
        </div>
        <div>
          <img src="http://placehold.it/250" />
          <p>Album Name</p>
        </div>
        <div>
          <img src="http://placehold.it/250" />
          <p>Album Name</p>
        </div>
      </div>
    </div>
  )
}
