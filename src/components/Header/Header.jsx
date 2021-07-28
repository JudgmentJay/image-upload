import React from 'react'
import PropTypes from 'prop-types'

import styles from './_styles.module.scss'

const Header = ({ children }) => {
	return (
		<header className={styles.header}>
			{children}
		</header>
	)
}

Header.propTypes = {
	children: PropTypes.node.isRequired
}

export default Header
