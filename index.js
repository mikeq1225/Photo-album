const express = require("express")
const path = require("path")

const app = express()

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")))

const albums = [
	{
		name: "2000 Mustang GT",
		coverPhoto: "https://i.ebayimg.com/images/g/9t0AAOSw-W9bGo7W/s-l1600.jpg",
		id: 1,
	},
	{
		name: "1966 Mustang GT Fastback",
		coverPhoto:
			"https://www.autopartsdb.net/assets/images/ProductImg/8/8213B.JPG",
		id: 2,
	},
	{
		name: "1993 Mustang GT",
		coverPhoto:
			"https://turn5.scene7.com/is/image/Turn5/383831?wid=810&hei=608&op_usm=0.8,1,10,0",
		id: 3,
	},
	{
		name: "2020 Mustang GT",
		coverPhoto:
			"https://www.cjponyparts.com/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/g/o/go20_1.162_1.jpg",
		id: 4,
	},
	{
		name: "2020 Shelby Mustang GT",
		coverPhoto: "https://i.ebayimg.com/images/g/KhAAAOSw6DxeNkKD/s-l400.jpg",
		id: 5,
	},
	{
		name: "Eleanor",
		coverPhoto:
			"https://www.brandnewmusclecar.com/assets/GONE_IN_60_SECONDS_Logo-Met36326.png",
		id: 6,
	},
]

const pictures = [
	{
		name: "Front",
		url:
			"https://www.insidehook.com/wp-content/uploads/2019/11/eleanor_hero.jpg?fit=1500%2C1000",
		albumId: 6,
		id: 1,
	},
	{
		name: "Passenger Side",
		url:
			"https://cdn1.mecum.com/auctions/fl0120/fl0120-397289/images/02-1566496969861@2x.jpg?1578666406000",
		albumId: 6,
		id: 2,
	},
	{
		name: "Driver Side",
		url:
			"https://postmediadriving.files.wordpress.com/2019/11/eleanor-ford-mustang-gone-in-60-seconds.jpg?quality=80",
		albumId: 6,
		id: 3,
	},
	{
		name: "Driver Front Quarter",
		url:
			"https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2020/01/640/320/gone6.jpg?ve=1&tl=1",
		albumId: 6,
		id: 4,
	},
	{
		name: "Passenger Front Quarter",
		url:
			"https://i.auto-bild.de/ir_img/2/4/4/8/0/6/5/Ford-Mustang-Shelby-GT500-Eleanor-Original-474x316-572c3d16416b5a60.jpg",
		albumId: 6,
		id: 5,
	},
	{
		name: "Passenger Rear Quarter",
		url:
			"https://cdn1.mecum.com/auctions/fl0120/fl0120-397289/images/03-1566496970662@2x.jpg?1578666406000",
		albumId: 6,
		id: 6,
	},
	{
		name: "Driver Rear Quarter",
		url:
			"https://www.carscoops.com/wp-content/uploads/2019/11/1967-Ford-Mustang-Eleanor-13.jpg",
		albumId: 6,
		id: 7,
	},
	{
		name: "Front",
		url:
			"https://assets.tapkat.org/drawings/npo-1/drawing-110/prizes/prize-1/slide-1.jpg",
		albumId: 5,
		id: 8,
	},
	{
		name: "Rear",
		url:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoMh9RhvAZxM-EbnYR87UYim-KGx2RJFhDpjrzLPkbv4jZcWIO",
		albumId: 5,
		id: 9,
	},
	{
		name: "Driver Front Quarter",
		url:
			"https://specials-images.forbesimg.com/imageserve/5db5adee64b49a0007e9e51a/960x0.jpg?fit=scale",
		albumId: 5,
		id: 10,
	},
	{
		name: "Passenger Front Quarter",
		url:
			"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-ford-mustang-shelby-gt500-drive-214-1572321993.jpg?crop=0.891xw:1.00xh;0.0897xw,0&resize=640:*",
		albumId: 5,
		id: 11,
	},
	{
		name: "Front",
		url:
			"https://postmediadriving.files.wordpress.com/2019/08/dsc00017.jpg?quality=80&strip=all&w=412&h=268&crop=1",
		albumId: 4,
		id: 12,
	},
	{
		name: "Rear",
		url:
			"https://www.autoguide.com/blog/wp-content/gallery/2020-ford-mustang-gt-review/2020-Ford-Mustang-GT-Review-17.JPG",
		albumId: 4,
		id: 13,
	},
	{
		name: "Driver Side",
		url:
			"https://www.autoguide.com/blog/wp-content/gallery/2020-ford-mustang-gt-review/2020-Ford-Mustang-GT-Review-9.JPG",
		albumId: 4,
		id: 14,
	},
	{
		name: "Passenger Side",
		url:
			"https://postmediadriving.files.wordpress.com/2019/08/dsc00015.jpg?quality=80&strip=all&w=412&h=268&crop=1",
		albumId: 4,
		id: 15,
	},
	{
		name: "Passenger Side",
		url: "https://www.mustangattitude.com/mustang/1993/1993_00024_05.jpg",
		albumId: 3,
		id: 16,
	},
	{
		name: "Passenger Front Quarter",
		url: "https://mustangattitude.com/mustang/1993/1993_00024_01.jpg",
		albumId: 3,
		id: 17,
	},
	{
		name: "Rear",
		url:
			"https://carclassifiedscheapads.com/car-photo6/1993-Ford-Mustang-Red-0844212.jpg",
		albumId: 3,
		id: 18,
	},
	{
		name: "Driver Front Quarter",
		url:
			"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/photos-ford-mustang-1993-1-1507818903.jpg",
		albumId: 3,
		id: 19,
	},
	{
		name: "Driver Rear Quarter",
		url:
			"https://oldcarraffle.com/wp-content/uploads/2012/09/C.A.P.E.-2012-1966-Mustang-550x2521.jpg",
		albumId: 2,
		id: 20,
	},
	{
		name: "Driver Front Quarter",
		url:
			"https://i.pinimg.com/originals/8d/0a/75/8d0a75aedf9ecb54690d86fb4354c41a.jpg",
		albumId: 2,
		id: 21,
	},
	{
		name: "Passenger Rear Quarter",
		url:
			"https://barrettjacksoncdn.azureedge.net/staging/carlist/items/Fullsize/Cars/112797/112797_Rear_3-4_Web.JPG",
		albumId: 2,
		id: 22,
	},
	{
		name: "Passenger Front Quarter",
		url:
			"https://barrettjacksoncdn.azureedge.net/staging/carlist/items/Fullsize/Cars/43459/43459_Front_3-4_Web.jpg",
		albumId: 2,
		id: 23,
	},
	{
		name: "Passenger Front Quarter",
		url:
			"https://d2uf4zk8t94n2d.cloudfront.net/56104A/data/t59NZrfiOyXVTdf-600x400.jpg",
		albumId: 1,
		id: 24,
	},
	{
		name: "Rear",
		url: "https://i.ytimg.com/vi/k1k3e-lPK1k/hqdefault.jpg",
		albumId: 1,
		id: 25,
	},
	{
		name: "Driver Side",
		url:
			"https://static.cargurus.com/images/site/2010/02/18/15/46/2000_ford_mustang_gt-pic-258598129398411455-640x480.jpeg",
		albumId: 1,
		id: 26,
	},
	{
		name: "Driver Front Quarter",
		url:
			"https://www.allfordmustangs.com/forums/attachments/4-6l-tech/13516d1137593473-2000-gt-brake-conversion-cobra-blownstang.jpg",
		albumId: 1,
		id: 27,
	},
]

// Put all API endpoints under '/api'
app.get("/api/albums", (req, res) => {
	res.json(albums)
})

app.get("/api/albums/:id", function (req, res, next) {
	const id = Number(req.params.id)
	const album = albums.find((album) => album.id === id)
	const id2 = Number(album.id)
	const pictures1 = []
	pictures.map((pics) => {
		pictures1.push(pics.albumId === id2)
	})
	console.log(album)
	console.log(pictures1)
})

app.get("/api/pictures", (req, res) => {
	res.json(pictures)
})

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname + "/client/build/index.html"))
})

const port = process.env.PORT || 3002
app.listen(port, () => {
	console.log(`LISTENING ON PORT ${port}`)
})
