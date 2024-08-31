import {useParams} from 'react-router-dom'
import courses from '../data/web_courses.json'

export default function CourseDetails() {
	const {id} = useParams<{id: string}>()
	const course = courses.courseData.find(
		course => course.id === parseInt(id as string),
	)

	const getStatusClasses = (status: string) => {
		switch (status) {
			case 'Open':
				return 'text-green-500 bg-green-300/50 p-2 rounded-lg'
			case 'In Progress':
				return 'text-orange-500 bg-orange-300/50 p-2 rounded-lg'
			default:
				return 'text-red-500 bg-red-300/50 p-2 rounded-lg'
		}
	}
	if (!course) {
		return (
			<div className='text-center text-red-500 font-bold text-xl mt-20'>
				Course not found
			</div>
		)
	}

	return (
		<div className='container mx-auto p-6'>
			<div className='bg-white shadow-lg rounded-lg overflow-hidden'>
				<div className='relative'>
					<img
						src={course.thumbnail}
						alt={course.name}
						className='w-full h-[30rem] object-contain'
					/>
					<div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75'></div>
					<div className='absolute bottom-0 left-0 p-6 text-white'>
						<h1 className='text-5xl font-bold mb-2'>
							{course.name}
						</h1>
						<p className='text-lg font-medium '>
							{course.instructor}
						</p>
					</div>
				</div>
				<div className='p-8'>
					<p className='text-gray-800 text-2xl font-semibold mb-6'>
						{course.description}
					</p>
					<div className='grid grid-cols-2 gap-4 mb-6'>
						<p className='text-lg font-medium text-gray-600/70'>
							<span className='font-semibold text-slate-600'>
								Duration:
							</span>{' '}
							{course.duration}
						</p>
						<p className='text-lg font-medium text-gray-600/70'>
							<span className='font-semibold text-slate-600'>
								Schedule:
							</span>{' '}
							{course.schedule}
						</p>
						<p className='text-lg font-medium text-gray-600/70'>
							<span className='font-semibold text-slate-600'>
								Location:
							</span>{' '}
							{course.location}
						</p>
						<p className='text-lg font-medium text-gray-600/70'>
							<span className='font-semibold text-slate-600'>
								Prerequisites:
							</span>{' '}
							[ {course.prerequisites.join(', ')} ]
						</p>
					</div>

					<div className='mb-8'>
						<h2 className='text-2xl font-semibold mb-4'>
							Syllabus
						</h2>
						<ul className='list-disc list-inside text-gray-700 space-y-2'>
							{course.syllabus.map((item, index) => (
								<li key={index} className='text-base'>
									<strong>Week {item.week}: </strong>
									{item.topic} - {item.content}
								</li>
							))}
						</ul>
					</div>

					<div className='flex justify-between items-center'>
						<button
							disabled={course.enrollmentStatus !== 'Open'}
							className='disabled:bg-gray-400 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out'>
							Enroll Now
						</button>
						<span
							className={`text-sm font-semibold ${getStatusClasses(
								course.enrollmentStatus,
							)}`}>
							Status: {course.enrollmentStatus}
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
