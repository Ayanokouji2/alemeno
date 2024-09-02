import { useParams } from 'react-router-dom'
// import courses from '../data/web_courses.json'
import { enrollCourse } from '../redux/slice/course.slice'
import { useDispatch, useSelector } from 'react-redux'
import { Course } from '../types/courseType'
import { useState } from 'react';
import { toast } from 'react-toastify';




export default function CourseDetails() {

	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const handleToggle = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	const course = useSelector((state: any) => {
		const courses = state.course
		const { id } = useParams<{ id: string }>();
		const index = parseInt(id!);
		return courses[index - 1];
	})
	const dispatch = useDispatch()
	const handleEnroll = (index: number) => {
		index--;
		console.log(index)
		dispatch(enrollCourse(index))
		toast("Course Enrolled...")
	}
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
						className='w-full max-h-[30rem] object-contain'
					/>
					<div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75'></div>
					<div className='absolute bottom-0 left-0 p-6 text-white'>
						<h1 className='text-xl font-bold mb-2'>
							{course.name}
						</h1>
						<p className='text-sm font-medium '>
							{course.instructor}
						</p>
					</div>
				</div>
				<div className='p-3 md:p-8'>
					<p className='text-gray-800 text-base font-semibold mb-6'>
						{course.description}
					</p>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
						<p className='text-sm font-medium text-gray-600/70'>
							<span className='font-semibold text-slate-600'>
								Duration:
							</span>{' '}
							{course.duration}
						</p>
						<p className='text-sm font-medium text-gray-600/70'>
							<span className='font-semibold text-slate-600'>
								Schedule:
							</span>{' '}
							{course.schedule}
						</p>
						<p className='text-sm font-medium text-gray-600/70'>
							<span className='font-semibold text-slate-600'>
								Location:
							</span>{' '}
							{course.location}
						</p>
						<p className='text-sm font-medium text-gray-600/70'>
							<span className='font-semibold text-slate-600'>
								Prerequisites:
							</span>{' '}
							[ {course.prerequisites.join(', ')} ]
						</p>
					</div>

					<div className='mb-8'>
						<h2 className='text-base font-semibold mb-4'>Syllabus</h2>
						<div className='flex flex-col gap-3 max-w-xl '>
							{course.syllabus.map((item: Course, index: number) => (
								<div key={index} className='border-b'>
									<button
										className='w-full text-left py-2 px-4  text-xs md:text-sm bg-gray-100 text-slate-600 focus:outline-none'
										onClick={() => handleToggle(index)}
									>
										<strong>Week {item.week}: </strong>
										{item.topic}
									</button>
									{activeIndex === index && (
										<div className='p-4 text-sm text-slate-600'>
											{item.content}
										</div>
									)}
								</div>
							))}
						</div>
					</div>

					<div className='flex flex-col  gap-4 md:flex-row justify-between items-center'>
						<button
							disabled={course.enrollmentStatus !== 'Open'}
							onClick={() => handleEnroll(course.id)}
							className=' w-full md:w-fit disabled:bg-gray-400 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out'>
							Enroll Now
						</button>
						<span
							className={`text-sm  text-center md:w-fit font-semibold w-full ${getStatusClasses(
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
