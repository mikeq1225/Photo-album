import React from "react"
import { Link } from "react-router-dom"
import "../styles/AlbumName.css"

export default function(props) {
  return (
    <div className="picContainer">
      <h1>album name</h1>
      <div className="flex">
        <div className="flexDiv">
          <p>album 1</p>
          <p>album 2</p>
          <p>album 3</p>
          <p>album 4</p>
          <p>album 5</p>
          <p>album 6</p>
        </div>
        <div className="albumNames">
          <div>
            <img src="http://placehold.it/150" />
            <p>picture name </p>
          </div>
          <div>
            <img src="http://placehold.it/150" />
            <p>picture name </p>
          </div>
          <div>
            <img src="http://placehold.it/150" />
            <p>picture name </p>
          </div>
          <div>
            <img src="http://placehold.it/150" />
            <p>picture name </p>
          </div>
          <div>
            <img src="http://placehold.it/150" />
            <p>picture name </p>
          </div>
          <div>
            <img src="http://placehold.it/150" />
            <p>picture name </p>
          </div>
        </div>
      </div>
    </div>
  )
}
