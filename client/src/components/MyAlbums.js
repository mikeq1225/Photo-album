import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
// import axios from "axios"
import "../styles/MyAlbums.css"
import { getAlbums } from "../actions/albums.js"

export default function(props) {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    getAlbums().then(data => setAlbums(data))
  }, [])

  return (
    <div className="albumContainer">
      <h1>mustangs</h1>
      <div className="albumCover">
        {albums.map(album => (
          <Link to={"/album/" + album.id} key={"album" + album.id}>
            <div>
              <img src={album.coverPhoto} alt="car" />
              <p>{album.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
