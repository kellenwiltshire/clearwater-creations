import React from 'react'
import Image from 'next/image'

const Pricing = () => {
	return (
		<div className="relative h-full w-full">
			<div className="aspect-h-2 aspect-w-5 mb-12 ml-12">
				<img
					src="/pictures/CC-Hero.jpg"
					alt=""
					className="rounded-xl object-cover"
				/>
			</div>
			<div className="absolute -bottom-20 left-0 flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-indigo-600 p-8 sm:flex-row-reverse sm:items-end lg:flex-auto lg:flex-col lg:items-start">
				<p className="flex-none text-2xl font-bold tracking-tight text-white">
					$14,995
				</p>
				<div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
					<p className="text-3xl font-semibold tracking-tight text-white">
						Homestay Pond Package
					</p>
					<p className="mt-2 text-base leading-7 text-indigo-200">
						A 7’ x 10’ Ecosystem Pond with 18" inch high waterfall
					</p>
				</div>
			</div>
		</div>
	)
}

export default Pricing