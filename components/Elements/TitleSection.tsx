import React from 'react'
import Image from 'next/image'

interface IProps {
	features: Array<string>
	image: string
	alt: string
}

const TitleSection = ({ features, image, alt }: IProps) => {
	return (
		<div className="relative bg-gray-800">
			<div className="absolute inset-0">
				<Image
					fill
					quality={50}
					priority={false}
					className="h-full w-full object-cover"
					src={image}
					alt={alt}
				/>
				<div
					className="absolute inset-0 bg-gray-700 mix-blend-multiply"
					aria-hidden="true"
				/>
			</div>
			<div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-12 lg:px-8">
				<h1 className="text-center text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
					Ecosystem Ponds
				</h1>
				<p className="mt-6 max-w-3xl text-center text-xl text-gray-300">
					All Ecosystem package ponds come complete with:
				</p>
				<dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-2 gap-y-4 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{features.map((feature) => (
						<div key={feature}>
							<dt className="font-semibold text-white">{feature}</dt>
						</div>
					))}
				</dl>
			</div>
		</div>
	)
}

export default TitleSection