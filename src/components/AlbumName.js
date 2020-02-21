import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../styles/AlbumName.css"
import { getAlbum, getAlbums } from "../actions/albums.js"

export default function(props) {
  const [album, setAlbum] = useState({})
  const [pictures, setPictures] = useState([])
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    getAlbum(props.match.params.id).then(album => {
      setPictures(album.pictures)
      setAlbum(album)
    })
    getAlbums().then(albums => setAlbums(albums))
  }, [props.match.params])

  return (
    <div className="picContainer">
      <h1>{album.name}</h1>
      <div className="flex">
        <div className="flexDiv">
          {albums.map(album => (
            <div key={"album" + album.id}>
              <Link to={"/album/" + album.id}>
                <p>{album.name}</p>
              </Link>
            </div>
          ))}
        </div>
        <div className="albumNames">
          {pictures.map(picture => (
            <Link
              to={"/album/picture/" + picture.id}
              key={"picture" + picture.id}
            >
              <div>
                <img src={picture.url} alt="car" />
                <p>{picture.name} </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
