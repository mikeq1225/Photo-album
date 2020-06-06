import axios from "axios"

export function getAlbums() {
	return new Promise((resolve, reject) => {
		axios
			// .get("https://mikeq1225.github.io/PhotoAlbumData/photoAlbumData.json")
			.get("/albums")
			// .get("https://api.jsonbin.io/b/5ec44c2f18c8475bf16c68b2")
			.then((resp) => {
				resolve(resp.data)
			})
			.catch((e) => {
				reject()
			})
	})
}

export function getAlbum(id) {
	return new Promise((resolve, reject) => {
		axios
			.get(`/albums/${id}?_embed=pictures`)
			// .get("https://api.jsonbin.io/b/5ec44c2f18c8475bf16c68b2")
			.then((resp) => {
				resolve(resp.data)
			})
			.catch((e) => {
				reject()
			})
	})
}

export function getPhoto(id) {
	return new Promise((resolve, reject) => {
		axios
			.get(`/pictures/${id}`)
			.then((resp) => {
				resolve(resp.data)
			})
			.catch((e) => {
				reject()
			})
	})
}

export function getPhotos() {
	return new Promise((resolve, reject) => {
		axios
			.get("/pictures")
			.then((resp) => {
				resolve(resp.data)
			})
			.catch((e) => {
				reject()
			})
	})
}
