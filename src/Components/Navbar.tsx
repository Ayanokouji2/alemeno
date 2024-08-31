import {useEffect, useState} from 'react'
import {Link, NavLink, useLocation} from 'react-router-dom'
import {FiSearch} from 'react-icons/fi'

export default function Navbar() {
	const location = useLocation()

	const [searchText, setSearchText] = useState('')

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchText(e.target.value)
	}

	useEffect(() => {
		const delay = 3000
		const searchTimeout = setTimeout(() => {
			console.log('Search for:', searchText)
		}, delay)
		return () => clearTimeout(searchTimeout)
	}, [searchText])

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
				{/* Search Bar */}
				{location.pathname === '/courses' && (
					<div className='relative w-80'>
						<FiSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500' />
						<input
							type='search'
							value={searchText}
							onChange={handleSearch}
							placeholder='Search course, instructor'
							className='w-full pl-10 pr-4 py-2 text-sm font-normal border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
						/>
					</div>
				)}
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
