import React from 'react'
import PropTypes from 'prop-types'

import { Picture } from '../../components'

import styles from './_styles.module.scss'

const ImageGrid = ({ images }) => {
	return (
		<React.Fragment>
			<h1 className={styles.header}>{images.length} {images.length > 1 ? 'images' : 'image'}</h1>
			<div className={styles.grid}>
				{
					images.map((image, i) => {
						return (
							<Picture
								fileName={image}
								lazyLoad={i > 9}
								key={`image-${i}`} />
						)
					})
				}
			</div>
		</React.Fragment>
	)
}

ImageGrid.propTypes = {
	images: PropTypes.array.isRequired
}

export default ImageGrid
