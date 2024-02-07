import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const NotFoundPage: React.FC<{ isMobileMenuOpen: boolean }> = ({
	isMobileMenuOpen,
}) => {
	useEffect(() => {
		document.body.classList.add('not-found-body')

		return () => {
			document.body.classList.remove('not-found-body')
		}
	}, [])

	if (isMobileMenuOpen) {
		return null
	}

	return (
		<div className='container not-found-container'>
			<div className='page__404'>
				<h1>404</h1>
				<h2>Page Not Found</h2>
				<p>The page you are looking for does not exist</p>
				<Link
					to='/'
					className='return-home-btn'
					onContextMenu={e => e.preventDefault()}
				>
					<FontAwesomeIcon icon={faHome} /> Return to Homepage
				</Link>
			</div>
		</div>
	)
}

export default NotFoundPage
