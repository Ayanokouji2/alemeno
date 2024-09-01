import {useDispatch, useSelector} from 'react-redux'
import {Course} from '../types/courseType'
import {markAsComplete} from '../redux/slice/course.slice'
import {toast} from 'react-toastify'

export default function Dashboard() {
	const dispatch = useDispatch()
	const {enrolled, completed} = useSelector((state: any) => {
		const courses = state.course
		const enrolled = courses.filter(
			(item: Course) => item.enrollmentStatus === 'In Progress',
		)
		const completed = courses.filter(
			(item: Course) => item.enrollmentStatus === 'Closed',
		)
		return {enrolled, completed}
	})

	const handleComplete = (index: number) => {
		index--
		dispatch(markAsComplete(index))
		toast.success('Course successfully completed!!')
	}

	return (
		<div className='p-10'>
			{/* Enrolled Courses Section */}
			<h2 className='text-2xl font-bold mb-4'>Enrolled Courses</h2>
			<div className='grid grid-cols-4 gap-10'>
				{enrolled && enrolled.length > 0 ? (
					enrolled.map((item: Course, index: number) => (
						<div
							key={index}
							className='shadow rounded p-3 flex flex-col justify-start gap-2 relative group'>
							<img
								src={item.thumbnail}
								className='h-40 w-full rounded-md'
								alt={item.name}
							/>
							<p className='font-semibold'>{item.name}</p>
							<div className='flex justify-between text-xs'>
								<p className='p-1 rounded w-fit text-green-800 bg-green-100'>
									{item.enrollmentStatus}
								</p>

								<button
									className='text-slate-600 bg-slate-100 p-1 rounded opacity-0 transition-opacity group-hover:opacity-100'
									onClick={() => handleComplete(item.id)}>
									Mark as Completed
								</button>
							</div>
						</div>
					))
				) : (
					<p>No courses enrolled.</p>
				)}
			</div>

			{/* Completed Courses Section */}
			<h2 className='text-2xl font-bold mt-10 mb-4'>Completed Courses</h2>
			<div className='grid grid-cols-4 gap-10'>
				{completed && completed.length > 0 ? (
					completed.map((item: Course, index: number) => (
						<div
							key={index}
							className='shadow rounded p-3 flex flex-col gap-2'>
							<img
								src={item.thumbnail}
								className='h-40 w-full rounded-md'
								alt={item.name}
							/>
							<p className='font-semibold'>{item.name}</p>
							<p>{item.duration}</p>
						</div>
					))
				) : (
					<p>No courses completed.</p>
				)}
			</div>
		</div>
	)
}
