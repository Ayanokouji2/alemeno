import {Routes, Route} from 'react-router-dom'
import Home from './Page/Home'
import Navbar from './Components/Navbar'
import Course from './Page/Course'
import Dashboard from './Page/Dashboard'

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/courses' element={<Course />} />
				<Route path='/dashboard' element={<Dashboard />} />
			</Routes>
		</>
	)
}

export default App
