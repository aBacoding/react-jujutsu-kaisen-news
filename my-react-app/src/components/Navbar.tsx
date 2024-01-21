import React, { useState } from 'react'

const Navbar: React.FC = () => {
	const [isAnimePopupOpen, setIsAnimePopupOpen] = useState(false)
	const [isMangaPopupOpen, setIsMangaPopupOpen] = useState(false)

	const toggleAnimePopup = () => setIsAnimePopupOpen(!isAnimePopupOpen)
	const toggleMangaPopup = () => setIsMangaPopupOpen(!isMangaPopupOpen)

	return (
		<header className='navbar'>
			<div className='container'>
				<a
					href='/'
					className='navbar__logo'
					onContextMenu={e => e.preventDefault()}
				>
					<img src='./images/logo.png' alt='Logo' draggable='false' />
				</a>
				<nav>
					<ul className='navbar__links'>
						<li>
							<a href='/' className='nav-link'>
								Home
							</a>
						</li>
						<li onClick={toggleAnimePopup}>
							<span className='nav-link'>
								Anime <i className='fa fa-caret-down'></i>
							</span>
							{isAnimePopupOpen && (
								<div
									className='popup'
									onMouseLeave={() => setIsAnimePopupOpen(false)}
								>
									<ul>
										<li>
											<a href='/' className='popup-link'>
												Episodes
											</a>
										</li>
										<li>
											<a href='/' className='popup-link'>
												Characters
											</a>
										</li>
									</ul>
								</div>
							)}
						</li>
						<li onClick={toggleMangaPopup}>
							<span className='nav-link'>
								Manga <i className='fa fa-caret-down'></i>
							</span>
							{isMangaPopupOpen && (
								<div
									className='popup'
									onMouseLeave={() => setIsMangaPopupOpen(false)}
								>
									<ul>
										<li>
											<a href='/' className='popup-link'>
												Chapters
											</a>
										</li>
										<li>
											<a href='/' className='popup-link'>
												Characters
											</a>
										</li>
									</ul>
								</div>
							)}
						</li>
						<li>
							<a href='/' className='nav-link'>
								Movie
							</a>
						</li>
						<li>
							<a href='/' className='nav-link'>
								News
							</a>
						</li>
						<li>
							<a href='/' className='nav-link'>
								Staff/Cast
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Navbar
