import React, { useState, useEffect } from "react"
import "../styles/PictureName.css"
import { getPhoto } from "../actions/albums"

export default function(props) {
  const [photo, setPhoto] = useState({})
  useEffect(() => {
    getPhoto(props.match.params.id).then(photo => {
      setPhoto(photo)
    })
  }, [props.match.params])

  return (
    <div className="picNames">
      <h1>{photo.name}</h1>
      <div>
        <img src={photo.url} alt="car" />
      </div>
    </div>
  )
}
