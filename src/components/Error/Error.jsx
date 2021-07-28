import React from 'react'
import PropTypes from 'prop-types'

import styles from './_styles.module.scss'

const Error = ({ message }) => {
	return (
		<p className={styles.errorMessage}>
			{message}
		</p>
	)
}

Error.propTypes = {
	message: PropTypes.string.isRequired
}

export default Error
