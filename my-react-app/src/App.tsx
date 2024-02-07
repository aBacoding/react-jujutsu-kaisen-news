import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import NotFoundPage from './pages/404'
import HomePage from './pages/Home'

function App() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	return (
		<Router>
			<div className='App'>
				<Navbar
					isMobileMenuOpen={isMobileMenuOpen}
					setIsMobileMenuOpen={setIsMobileMenuOpen}
				/>
				<Routes>
					<Route
						path='/'
						element={<HomePage isMobileMenuOpen={isMobileMenuOpen} />}
					/>
					{/* other routes will be here */}
					<Route
						path='*'
						element={<NotFoundPage isMobileMenuOpen={isMobileMenuOpen} />}
					/>
				</Routes>
			</div>
		</Router>
	)
}

export default App
