import axios from "axios"

export function getAlbums() {
	return new Promise((resolve, reject) => {
		axios
			.get("/api/albums")
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
			.get(`/api/album/${id}`)
			.then((resp) => {
				resolve(resp.data)
			})
			.catch((e) => {
				reject()
			})
	})
}

export function getPhoto(albId, picId) {
	return new Promise((resolve, reject) => {
		axios
			.get(`/api/album/${albId}/picture/${picId}`)
			.then((resp) => {
				resolve(resp.data)
			})
			.catch((e) => {
				reject()
			})
	})
}
