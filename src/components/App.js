import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "../styles/App.css"
import MyAlbums from "./MyAlbums"
import AlbumName from "./AlbumName"
import PictureName from "./PictureName"

export default function() {
  return (
    <Router>
      <div className="container">
        <Route exact path="/" component={MyAlbums} />
        <Route exact path="/album/:id" component={AlbumName} />
        <Route path="/album/picture/:id" component={PictureName} />
      </div>
    </Router>
  )
}
