import {Routes, Route} from 'react-router-dom'
import Home from './Page/Home'
import Navbar from './Components/Navbar'
import Course from './Page/Course'
import Dashboard from './Page/Dashboard'
import CourseDetails from './Page/CourseDetails'
import { ToastContainer,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
	return (
		<>	
			<ToastContainer/>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/courses' element={<Course />} />
                <Route path="/course/:id" element={<CourseDetails />} />
				<Route path='/dashboard' element={<Dashboard />} />
			</Routes>
		</>
	)
}

export default App
