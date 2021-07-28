import React from 'react'
import ReactDOM from 'react-dom'

import './scss/main.scss'

require.context('./img', true, /\.(jpe?g|png|gif|svg|webp)$/)

const App = () => {
	return (
		<div>Hello World!</div>
	)
}

ReactDOM.render(<App />, document.getElementById('app'))
