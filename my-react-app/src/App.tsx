import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import NotFoundPage from './pages/404'
import HomePage from './pages/Home'

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Routes>
					<Route path='/' element={<HomePage />} />
					{/* other routes will be here */}
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
