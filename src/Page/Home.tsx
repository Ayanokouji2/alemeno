import {Link} from 'react-router-dom'
import HeroSection from '../assets/herosection.svg'
import Card from '../Components/Card'
import course from '../data/web_courses.json'
import Typewriter from 'typewriter-effect'
export default function Home() {
	const data = course.courseData.slice(0, 7)

	return (
		<main className='p-6'>
			<div className='flex md:flex-row flex-col justify-center items-center py-3 '>
				<div>
					<h1 className='text-7xl font-bold text-purple-800'>
						Course Island
					</h1>
					<div className="text-3xl w-[30rem] mt-7 text-slate-600/80 h-40 font-normal ">
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
				<div className='p-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-items-center gap-7 '>
					{data.map((_, index) => (
						<Card
							key={index}
							name={_.name}
							instructor={_.instructor}
							thumbnail={_.thumbnail}
							description={_.description}
						/>
					))}
				</div>
			</div>
			<div className='text-center'>
				<Link
					to='courses'
					className='text-lg font-medium font-mono bg-purple-700 py-2 px-4 rounded-md text-white '>
					View All Courses
				</Link>
			</div>
		</main>
	)
}
