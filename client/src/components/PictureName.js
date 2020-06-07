import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../styles/PictureName.css"
import { getPhoto, getPhotos } from "../actions/albums"
// import { getAlbum } from "../actions/albums"
import {
	FaAngleDoubleRight,
	FaAngleDoubleLeft,
	FaHome,
	FaFolderOpen,
} from "react-icons/fa"

export default function (props) {
	const [album2, setAlbum1] = useState({})
	const [albumPics, setAlbumPics] = useState([])
	const [picture, setPicture] = useState({})
	const carousel = []
	// const backAlbum = []
	// let leftScroll = albumPics.id
	// let rightScroll = albumPics.id

	console.log(picture)

	useEffect(() => {
		getPhoto(props.match.params.albId, props.match.params.picId).then(
			(pics) => {
				setAlbumPics(pics.pictures2)
				setAlbum1(pics.album2[0])
				setPicture(pics.picture[0])
			}
		)
	}, [props.match.params])

	// albumPics.map((pic) => {
	// 	carousel.push(pic)
	// })

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
			<h1>{album2.name}</h1>
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
					<img src={picture && picture.url} alt="car" />
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
