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

export function getLinks(id) {
	return new Promise((resolve, reject) => {
		axios.get(`/api/projects`).then((resp) => {
			const photos = resp.data
			let left = 0
			let right = 0
			let length = photos.length

			photos.forEach((proj, i) => {
				if (proj.id == id) {
					if (i === photos.length - 1) {
						right = photos[0].id
						left = photos[i - 1].id
					} else if (i === 0) {
						right = photos[i + 1].id
						left = photos[length - 1].id
					} else {
						right = photos[i + 1].id
						left = photos[i - 1].id
					}
				}
			})
			resolve({
				left: left,
				right: right,
			})
		})
	})
}

// export function getPhotos() {
// 	return new Promise((resolve, reject) => {
// 		axios
// 			.get("/pictures")
// 			.then((resp) => {
// 				resolve(resp.data)
// 			})
// 			.catch((e) => {
// 				reject()
// 			})
// 	})
// }
