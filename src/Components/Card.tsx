export default function Card({
	name,
	instructor,
	description,
	thumbnail,
}: {
	name: string
	instructor: string
	description: string
	thumbnail: string
}) {
	return (
		<div className='max-w-sm rounded overflow-hidden shadow-lg bg-white'>
			<img
				src={thumbnail}
				alt={`${name} Thumbnail`}
				className='w-full h-48 object-cover'
			/>
			<div className='px-6 py-4'>
				<h2 className='font-bold text-xl mb-2'>{name}</h2>
				<p className='text-gray-700 text-base'>
					Instructor: {instructor}
				</p>
				<p className='text-gray-700 text-base mt-2'>{description}</p>
			</div>
		</div>
	)
}
