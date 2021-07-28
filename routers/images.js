const path = require('path')
const fs = require('fs')
const express = require('express')
const multer = require('multer')

const imagesRouter = express.Router()

const storage = multer.diskStorage({
	destination: (req, file, cb) => cb(null, 'uploads'),
	filename: (req, file, cb) => cb(null, file.originalname.replace(' ', '-').toLowerCase()),
})

const fileFilter = (req, file, cb) => {
	const validMimeTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/webp']

	if (validMimeTypes.includes(file.mimetype)) {
		cb(null, true)
	} else {
		cb(null, false)
	}
}

const limits = {
	fileSize: 10000000
}

const upload = multer({ storage, fileFilter, limits })

const getImages = (res) => {
	fs.mkdir(path.resolve(__dirname, '../uploads'), (error) => {
		if (error && error.code !== 'EEXIST') {
			res.status(500).send('Error creating uploads directory')
		}
	})

	fs.readdir(path.resolve(__dirname, '../uploads'), (error, files) => {
		if (error) {
			res.status(500).send('Error retrieving images')
		} else {
			res.send(files)
		}
	})
}

imagesRouter.get('/all', (req, res) => {
	getImages(res)
})

imagesRouter.post('/upload', upload.single('image'), (req, res) => {
	getImages(res)
})

module.exports = imagesRouter
