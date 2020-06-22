import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../styles/PictureName.css"
import { getPhoto } from "../actions/albums"
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
	let leftScroll = picture.id
	let rightScroll = picture.id

	useEffect(() => {
		getPhoto(props.match.params.albId, props.match.params.picId).then(
			(pics) => {
				setAlbumPics(pics.pictures2)
				setAlbum1(pics.album2[0])
				setPicture(pics.picture[0])
			}
		)
	}, [props.match.params])

	albumPics.forEach((photo, i) => {
		if (photo.id === picture.id) {
			if (i === albumPics.length - 1) {
				rightScroll = albumPics[0].id
				leftScroll = albumPics[i - 1].id
			} else if (i === 0) {
				rightScroll = albumPics[i + 1].id
				leftScroll = albumPics[albumPics.length - 1].id
			} else {
				rightScroll = albumPics[i + 1].id
				leftScroll = albumPics[i - 1].id
			}
		}
	})

	return (
		<div className="picNames">
			<div className="header2">
				<Link to="/" className="homeButton">
					<FaHome />
				</Link>
				<h1>{album2.name}</h1>
				<Link to={"/album/" + album2.id} className="albumButton">
					<FaFolderOpen />
				</Link>
			</div>
			<div className="display">
				<Link
					className="arrow"
					to={"/album/" + album2.id + "/picture/" + leftScroll}
				>
					<FaAngleDoubleLeft />
				</Link>
				<div>
					<img src={picture && picture.url} alt="car" />
				</div>
				<Link
					className="arrow"
					to={"/album/" + album2.id + "/picture/" + rightScroll}
				>
					<FaAngleDoubleRight />
				</Link>
			</div>
		</div>
	)
}
