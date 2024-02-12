import React from 'react'

const Home: React.FC<{ isMobileMenuOpen: boolean }> = ({
	isMobileMenuOpen,
}) => {
	if (isMobileMenuOpen) {
		return null
	}

	return (
		<div className='container home-container'>
			<div className='home__content'>
				<h1>Jujutsu Kaisen</h1>
				<p>
					Yuji Itadori, a teenager who joins a secret organization of Jujutsu
					Sorcerers to battle malevolent curses after ingesting a cursed object
					and becoming host to Sukuna, a powerful curse. As he delves into a
					world of supernatural threats and dark powers, Yuji must navigate
					deadly battles and moral complexities. The series combines action,
					horror, and fantasy, showcasing thrilling combat, deep character
					development, and exploration of themes like courage and the essence of
					evil.
				</p>
			</div>
			<div className='image__container'>
				<img src='./images/sukuna.png' className='sukuna__img' alt='Sukuna' />
			</div>
		</div>
	)
}

export default Home
