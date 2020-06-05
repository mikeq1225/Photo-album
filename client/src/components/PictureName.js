import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../styles/PictureName.css"
import { getPhoto, getPhotos } from "../actions/albums"
import {
	FaAngleDoubleRight,
	FaAngleDoubleLeft,
	FaHome,
	FaFolderOpen,
} from "react-icons/fa"

export default function (props) {
	const [photo, setPhoto] = useState({})
	const [photos, setPhotos] = useState([])
	const carousel = []
	const backAlbum = []
	let leftScroll = photo.id
	let rightScroll = photo.id

	useEffect(() => {
		getPhoto(props.match.params.id).then((photo) => {
			setPhoto(photo)
		})
		getPhotos().then((data) => setPhotos(data))
	}, [props.match.params])

	for (var i = 0; i < photos.length; i++) {
		carousel.push(photos[i].id)
	}
	backAlbum.push(photo.albumId)

	if (leftScroll === 1) {
		leftScroll = carousel.length - 1
	} else {
		leftScroll -= 1
	}

	if (rightScroll === carousel.length) {
		rightScroll = 1
	} else {
		rightScroll += 1
	}

	return (
		<div className="picNames">
			<Link to="/" className="homeButton">
				<FaHome />
			</Link>
			<h1>{photo.name}</h1>
			<Link to={"/album/" + backAlbum} className="albumButton">
				<FaFolderOpen />
			</Link>
			<div className="display">
				<Link to={"/album/picture/" + leftScroll}>
					<div className="arrow">
						<FaAngleDoubleLeft />
					</div>
				</Link>
				<div>
					<img src={photo.url} alt="car" />
				</div>
				<Link to={"/album/picture/" + rightScroll}>
					<div className="arrow">
						<FaAngleDoubleRight />
					</div>
				</Link>
			</div>
		</div>
	)
}
