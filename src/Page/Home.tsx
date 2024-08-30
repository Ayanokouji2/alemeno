import HeroSection from '../assets/herosection.svg'
import Card from '../Components/Card'
import course from '../data/web_courses.json'

export default function Home() {
	const data = course.courseData.slice(0, 7)

	return (
		<>
			<div className='flex md:flex-row flex-col justify-center items-center py-3 '>
				<div className='text-7xl font-bold text-purple-800'>
					Course Island
				</div>
				<div>
					<img src={HeroSection} alt='Banner' />
				</div>

				{/* Card */}
			</div>
			<div >
				<h1 className="text-center text-5xl font-bold text-slate-700">Courses</h1>
				<div className='p-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-items-center gap-7'>
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
		</>
	)
}
