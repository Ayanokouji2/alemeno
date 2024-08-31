interface CardProps {
	name: string
	instructor: string
	description: string
	thumbnail: string
	handleClick?: () => void
}

export default function Card({
	name,
	instructor,
	description,
	thumbnail,
	handleClick,
}: CardProps) {
	return (
		<div
			onClick={handleClick}
			className='max-w-sm p-3 h-[24rem] rounded-xl shadow-lg bg-white cursor-pointer hover:shadow-slate-950 hover:shadow-2xl transition duration-300 ease-in-out'>
			<img
				src={thumbnail}
				alt={`${name} Thumbnail`}
				className='w-full h-48 object-fit'
			/>
			<div className='px-6 py-4'>
				<h2 className='font-bold text-lg mb-2 '>{name}</h2>
				<p className='text-gray-700 text-base font-medium'>
					Instructor: {instructor}
				</p>
				<p className='text-gray-700 text-sm mt-2 font-mono'>{description}</p>
			</div>
		</div>
	)
}
