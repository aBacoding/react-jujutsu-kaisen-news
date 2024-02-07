import React from 'react'

const Home: React.FC<{ isMobileMenuOpen: boolean }> = ({
	isMobileMenuOpen,
}) => {
	if (isMobileMenuOpen) {
		return null
	}

	return (
		<div className='container home-container'>
			<div className='home'>
				<h1>Welcome to the Homepage</h1>
				<p>This is a basic homepage component.</p>
			</div>
		</div>
	)
}

export default Home
