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

	console.log(leftScroll)

	useEffect(() => {
		getPhoto(props.match.params.albId, props.match.params.picId).then(
			(pics) => {
				setAlbumPics(pics.pictures2)
				setAlbum1(pics.album2[0])
				setPicture(pics.picture[0])
			}
		)
	}, [props.match.params])

	if (leftScroll === 1) {
		leftScroll = albumPics.length - 1
	} else {
		leftScroll -= 1
	}

	if (rightScroll === albumPics.length) {
		rightScroll = 1
	} else {
		rightScroll += 1
	}

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
				<Link to={"/album/" + album2.id + "/picture/" + leftScroll}>
					<div className="arrow">
						<FaAngleDoubleLeft />
					</div>
				</Link>
				<div>
					<img src={picture && picture.url} alt="car" />
				</div>
				<Link to={"/album/" + album2.id + "/picture/" + rightScroll}>
					<div className="arrow">
						<FaAngleDoubleRight />
					</div>
				</Link>
			</div>
		</div>
	)
}
