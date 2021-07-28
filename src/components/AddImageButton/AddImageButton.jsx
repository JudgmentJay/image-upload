import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

import styles from './_styles.module.scss'

const AddImageButton = ({
	setAllImages,
	setFilteredImages
}) => {
	const handleUploadImage = (e) => {
		const formData = new FormData()
		formData.append('image', e.target.files[0])

		const options = {
			url: '/images/upload',
			method: 'post',
			data: formData
		}

		axios(options)
			.then((response) => {
				setAllImages(response.data)
				setFilteredImages(response.data)
			})
			.catch((error) => alert(error.response.data))
	}

	return (
		<React.Fragment>
			<button className={styles.button}>
				<label htmlFor="add-image" className={styles.label}>Add New</label>
			</button>

			<input type="file" id="add-image" className={styles.hiddenField} onChange={handleUploadImage} />
		</React.Fragment>
	)
}

AddImageButton.propTypes = {
	setAllImages: PropTypes.func.isRequired,
	setFilteredImages: PropTypes.func.isRequired
}

export default AddImageButton
