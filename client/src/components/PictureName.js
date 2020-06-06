import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../styles/PictureName.css"
// import { getPhoto, getPhotos } from "../actions/albums"
import { getAlbum } from "../actions/albums"
import {
	FaAngleDoubleRight,
	FaAngleDoubleLeft,
	FaHome,
	FaFolderOpen,
} from "react-icons/fa"

export default function (props) {
	const [album2, setAlbum1] = useState({})
	const [albumPics, setAlbumPics] = useState([])
	const carousel = []
	const backAlbum = []
	// let leftScroll = albumPics.id
	// let rightScroll = albumPics.id

	useEffect(() => {
		getAlbum(props.match.params.id).then((album) => {
			setAlbumPics(album.pictures2)
			console.log(albumPics)
			setAlbum1(album.album2)
		})
		// getPhoto(props.match.params.id).then((photo) => {
		// 	setPhoto(photo)
		// })
		// getPhotos().then((data) => setPhotos(data))
	}, [props.match.params])

	// for (var i = 0; i < albumPics.length; i++) {
	// 	carousel.push(albumPics[i].id)
	// }
	// backAlbum.push(albumPics.albumId)

	// if (leftScroll === 1) {
	// 	leftScroll = carousel.length - 1
	// } else {
	// 	leftScroll -= 1
	// }

	// if (rightScroll === carousel.length) {
	// 	rightScroll = 1
	// } else {
	// 	rightScroll += 1
	// }

	return (
		<div className="picNames">
			<Link to="/" className="homeButton">
				<FaHome />
			</Link>
			<h1>{albumPics.name}</h1>
			<Link to={"/album/" + album2.id} className="albumButton">
				<FaFolderOpen />
			</Link>
			<div className="display">
				{/* <Link to={"/album/picture/" + leftScroll}>
					<div className="arrow">
						<FaAngleDoubleLeft />
					</div>
				</Link> */}
				<div>
					<img src={albumPics.url} alt="car" />
				</div>
				{/* <Link to={"/album/picture/" + rightScroll}>
					<div className="arrow">
						<FaAngleDoubleRight />
					</div>
				</Link> */}
			</div>
		</div>
	)
}
