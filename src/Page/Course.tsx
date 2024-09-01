import Card from '../Components/Card'
// import courses from '../data/web_courses.json'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function Course() {
	const navigate = useNavigate()

	const data = useSelector((state: any) => {
		const courses = state.course
		return courses
	})
	return (
		<div className='bg-slate-100/50 p-6'>
			<h1 className='text-center text-7xl font-bold font-serif text-violet-700/80 text-shadow'>
				Courses
			</h1>
			<p className='text-center text-2xl font-medium italic text-gray-800 p-6 bg-white shadow-md'>
				"Learning is not the attainment of knowledge, but the quest to
				understand, grow, and transform oneself."
			</p>{' '}
			<div className='p-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-items-center gap-7 '>
				{data.map((_: any, index: number) => (
					<Card
						handleClick={() => navigate(`/course/${_.id}`)}
						key={index}
						name={_.name}
						instructor={_.instructor}
						thumbnail={_.thumbnail}
						description={_.description}
					/>
				))}
			</div>
		</div>
	)
}
