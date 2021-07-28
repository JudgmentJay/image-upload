import React from 'react'
import PropTypes from 'prop-types'

import styles from './_styles.module.scss'

const Container = ({ children }) => {
	return (
		<div className={styles.container}>
			{children}
		</div>
	)
}

Container.propTypes = {
	children: PropTypes.node.isRequired
}

export default Container
