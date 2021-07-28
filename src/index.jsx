import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import './scss/main.scss'

import {
	AddImageButton,
	Container,
	Error,
	Header,
	ImageGrid,
	Search
} from './components'

const App = () => {
	const [allImages, setAllImages] = useState([])
	const [filteredImages, setFilteredImages] = useState([])
	const [error, setError] = useState(null)

	useEffect(() => {
		axios.get('/images/all')
			.then((response) => {
				if (response.data.length > 0) {
					setAllImages(response.data)
					setFilteredImages(response.data)
				} else {
					setError('You haven\'t uploaded any images yet!')
				}
			})
			.catch((error) => setError(`${error.response.data} :(`))
	}, [])

	useEffect(() => {
		if (filteredImages.length > 0 && error) {
			setError(null)
		} else if (allImages.length > 0 && filteredImages.length === 0) {
			setError('No matches found.')
		}
	}, [allImages.length, filteredImages.length, error])

	return (
		<Container>
			<Header>
				<Search
					allImages={allImages}
					setFilteredImages={setFilteredImages} />
				<AddImageButton
					setAllImages={setAllImages}
					setFilteredImages={setFilteredImages} />
			</Header>

			{ Boolean(filteredImages.length > 0) &&
				<ImageGrid images={filteredImages} />
			}

			{ Boolean(filteredImages.length === 0 && error) &&
				<Error message={error} />
			}
		</Container>
	)
}

ReactDOM.render(<App />, document.getElementById('app'))
