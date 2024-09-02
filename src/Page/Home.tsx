import {Link, useNavigate} from 'react-router-dom'
import HeroSection from '../assets/herosection.svg'
import Card from '../Components/Card'
// import course from '../data/web_courses.json'
import Typewriter from 'typewriter-effect'
import { useSelector } from 'react-redux'
import { Course } from '../types/courseType'
export default function Home() {
	const data = useSelector((state:any)=>{
		const courses=state.course
		return courses.slice(0,7)

	})
	const navigate=useNavigate()
	return (
		<main className='p-6'>
			<div className='flex md:flex-row flex-col justify-start md:justify-evenly md:items-center py-3 '>
				<div className='flex flex-col  items-start'>
					<h1 className='text-2xl sm:text-3xl md:text-7xl font-bold text-purple-800'>
						Course Island
					</h1>
					<div className="text-xl sm:w-fit md:w-[32rem] mt-7 text-slate-600/80 h-40 font-normal ">
						<Typewriter
							options={{
								strings: [
									'Learning is not the attainment of knowledge, but the quest to understand, grow, and transform oneself.',
								],
								autoStart: true,
								loop: true,
                                deleteSpeed: 50,
                                delay:80
							}}
						/>
					</div>
				</div>
				<div>
					<img src={HeroSection} alt='Banner' />
				</div>

				{/* Card */}
			</div>
			<div className='bg-slate-50/60'>
				<div>
					<h1 className='text-center text-5xl font-bold text-slate-700'>
						Courses
					</h1>
				</div>
				<div className='md:p-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-items-center gap-7 '>
					{data.map((_:Course, index:number) => (
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
			<div className='text-center my-10'>
				<Link
					to='courses'
					className='text-lg font-medium font-mono bg-purple-700 py-2 px-4 rounded-md text-white '>
					View All Courses
				</Link>
			</div>
		</main>
	)
}
