const express = require('express')

const imagesRouter = require('./routers/images')

const server = express()

server.use('/images', imagesRouter)

const port = 3000

server.listen(port, () => {
	console.log(`Running API server on port ${port}`)
})
