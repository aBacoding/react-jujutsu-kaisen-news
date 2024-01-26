import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
					<Link
						to='/'
						className='navbar__logo'
						onContextMenu={e => e.preventDefault()}
					>
						<img src='./images/logo.png' alt='Logo' draggable='false' />
					</Link>
				)}
				<nav className={`${isMobileMenuOpen ? 'mobile-nav' : ''}`}>
					<ul className='navbar__links'>
						<li>
							<Link to='/' className='nav-link'>
								Home
							</Link>
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
											<Link to='/episodes' className='popup-link'>
												Episodes
											</Link>
										</li>
										<li>
											<Link to='/anime-characters' className='popup-link'>
												Characters
											</Link>
										</li>
										<li>
											<Link to='/openings' className='popup-link'>
												Openings
											</Link>
										</li>
										<li>
											<Link to='/endings' className='popup-link'>
												Endings
											</Link>
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
											<Link to='/chapters' className='popup-link'>
												Chapters
											</Link>
										</li>
										<li>
											<Link to='/manga-characters' className='popup-link'>
												Characters
											</Link>
										</li>
									</ul>
								</div>
							)}
						</li>
						<li>
							<Link to='/movies' className='nav-link'>
								Movies
							</Link>
						</li>
						<li>
							<Link to='/news' className='nav-link'>
								News
							</Link>
						</li>
						<li>
							<Link to='/staff' className='nav-link'>
								Staff/Cast
							</Link>
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
