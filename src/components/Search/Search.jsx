import React from 'react'
import PropTypes from 'prop-types'

import styles from './_styles.module.scss'

const Search = ({
	allImages,
	setFilteredImages
}) => {
	const handleFilterImages = (e) => {
		const filteredImages = allImages.filter((imageName) => {
			return imageName.includes(e.target.value)
		})

		setFilteredImages(filteredImages)
	}

	return (
		<div className={styles.search}>
			<input type="text" placeholder="Search Images" onChange={handleFilterImages} className={styles.searchBar} />
		</div>
	)
}

Search.propTypes = {
	allImages: PropTypes.array.isRequired,
	setFilteredImages: PropTypes.func.isRequired
}

export default Search
