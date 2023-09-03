import React from 'react'
import {
	LifebuoyIcon,
	NewspaperIcon,
	PhoneIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

const supportLinks = [
	{
		name: 'Ecosystem Ponds',
		href: '#',
		description:
			'Ecosystem ponds bring all the elements together to create a beautiful work of art that changes personality everyday!',
		imageSrc: '/pictures/CC-Ecosystem.jpg',
		imageAlt: '',
	},
	{
		name: 'Recreational Ponds',
		href: '#',
		description:
			'Enjoy some fun in the sun! Our recreational ponds serve as an excellent alternative to a traditional swimming pool!',
		imageSrc: '/pictures/CC-Recreational.jpg',
		imageAlt: '',
	},
	{
		name: 'Fountainscapes',
		href: '#',
		description:
			'Fountainscapes can add those peaceful sights and sounds of running water to your landscape with less maintenance required!',
		imageSrc: '/pictures/CC-Fountain.jpg',
		imageAlt: '',
	},
	{
		name: 'Pondless Waterfalls',
		href: '#',
		description:
			'Experience the sights and sounds of a beautiful cascading waterfall without the added maintenance of a pond!',
		imageSrc: '/pictures/CC-Waterfall.jpg',
		imageAlt: '',
	},
]

const Services = () => {
	return (
		<div>
			<div className="z-20 mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
				<div className="relative bg-gray-800 pb-32">
					<div className="absolute inset-0">
						<Image
							fill
							quality={50}
							priority={false}
							className="h-full w-full object-cover"
							src="/pictures/CC-Team.png"
							alt=""
						/>
						<div
							className="absolute inset-0 bg-gray-700 mix-blend-multiply"
							aria-hidden="true"
						/>
					</div>
					<div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
						<h1 className="text-center text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
							Services
						</h1>
						<p className="mt-6 max-w-3xl text-center text-xl text-gray-300">
							Clearwater Creations is a complete landscaping company offering
							water features ranging from Small Decorative Features, to Large
							Recreational Koi Ponds and everything in between. Our work is
							award winning and highly sought after in all the Durham Regions,
							including Oshawa, Whitby, Ajax, and Pickering. As well as Cobourg
							& Port Hope and Peterborough & Kawarthas.
						</p>
					</div>
				</div>

				<div className="relative mt-16 flex flex-col items-center justify-center gap-16 px-10 py-16">
					<div className="absolute z-10 h-full w-full rounded-xl bg-[#687f9a] opacity-70"></div>
					{supportLinks.map((feature, featureIdx) => (
						<Link
							href={feature.href}
							key={feature.name}
							className="z-20 flex flex-col-reverse rounded-lg bg-white lg:grid lg:grid-cols-12 lg:items-center"
						>
							<div
								className={classNames(
									featureIdx % 2 === 0
										? 'lg:col-start-1'
										: 'lg:col-start-8 xl:col-start-9',
									'mt-6 px-5 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4',
								)}
							>
								<h3 className="text-lg font-medium text-gray-900">
									{feature.name}
								</h3>
								<p className="mt-2 text-sm text-gray-500">
									{feature.description}
								</p>
							</div>
							<div
								className={classNames(
									featureIdx % 2 === 0
										? 'lg:col-start-6 xl:col-start-5'
										: 'lg:col-start-1',
									'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8',
								)}
							>
								<div
									className={classNames(
										'aspect-h-2 aspect-w-5 overflow-hidden bg-gray-100',
										featureIdx % 2 === 0 ? 'rounded-r-lg' : 'rounded-l-lg',
									)}
								>
									<img
										src={feature.imageSrc}
										alt={feature.imageAlt}
										className="object-cover object-center"
									/>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default Services