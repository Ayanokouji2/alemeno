import {Link, NavLink} from 'react-router-dom'

export default function Navbar() {
	return (
		<nav className='flex justify-between items-center p-3 text-lg bg-purple-100'>
			{/* Nav Logo */}
			<div>
				<h1 className='font-semibold text-purple-600'>
					<Link to='/'>Course Island</Link>
				</h1>
			</div>
			{/* Nav Items */}
			<div className='flex gap-10 font-medium'>
				<NavLink
					to='courses'
					className={({isActive}) =>
						isActive ? 'text-purple-600' : 'text-gray-600'
					}>
					Courses
				</NavLink>
				<NavLink
					to='dashboard'
					className={({isActive}) =>
						isActive ? 'text-purple-600' : 'text-gray-600'
					}>
					Dashboard
				</NavLink>

				<div>
					{true ? <h3> Hey, Shivam </h3> : <button>Sign In </button>}
				</div>
			</div>
		</nav>
	)
}
