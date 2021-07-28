import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './_styles.module.scss'

const Picture = ({
	fileName,
	lazyLoad
}) => {
	const [hasLoaded, setHasLoaded] = useState(false)

	const imageAttributes = {
		src: `/uploads/${fileName}`,
		alt: fileName,
		onLoad: () => setHasLoaded(true),
		className: styles.picture
	}

	if (lazyLoad) {
		imageAttributes.loading = 'lazy'
	}

	const classes = classNames(styles.container, {
		[styles['container--is-visible']]: hasLoaded
	})

	return (
		<div className={classes}>
			<img {...imageAttributes} />
			<div className={styles.caption}>{fileName}</div>
		</div>
	)
}

Picture.propTypes = {
	fileName: PropTypes.string.isRequired,
	lazyLoad: PropTypes.bool
}

export default Picture
