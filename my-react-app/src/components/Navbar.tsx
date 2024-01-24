import React, { useState, useEffect } from 'react'

const Navbar: React.FC = () => {
	const [isAnimePopupOpen, setIsAnimePopupOpen] = useState(false)
	const [isMangaPopupOpen, setIsMangaPopupOpen] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	const toggleAnimePopup = () => setIsAnimePopupOpen(!isAnimePopupOpen)
	const toggleMangaPopup = () => setIsMangaPopupOpen(!isMangaPopupOpen)
	const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 1024) {
				setIsMobileMenuOpen(false)
				setIsAnimePopupOpen(false)
				setIsMangaPopupOpen(false)
			}
		}

		window.addEventListener('resize', handleResize)

		handleResize()

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<header
			className={`navbar ${isMobileMenuOpen ? 'navbar--fullscreen' : ''}`}
		>
			<div className='container'>
				{!isMobileMenuOpen && (
					<a
						href='/'
						className='navbar__logo'
						onContextMenu={e => e.preventDefault()}
					>
						<img src='./images/logo.png' alt='Logo' draggable='false' />
					</a>
				)}
				<nav className={`${isMobileMenuOpen ? 'mobile-nav' : ''}`}>
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
										<li>
											<a href='/' className='popup-link'>
												Openings
											</a>
										</li>
										<li>
											<a href='/' className='popup-link'>
												Endings
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
				<div
					className={`hamburger ${isMobileMenuOpen ? 'is-active' : ''}`}
					onClick={toggleMobileMenu}
				>
					{isMobileMenuOpen ? (
						<i className='fa fa-times'></i>
					) : (
						<i className='fa fa-bars'></i>
					)}
				</div>
			</div>
		</header>
	)
}

export default Navbar
