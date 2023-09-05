import React from 'react'
import Image from 'next/image'
import { classNames } from '../../utils/helpers'

interface IProps {
	corner: 'LEFT' | 'RIGHT'
	price: string
	title: string
	desc: string
	img: string
}
const Pricing = ({ corner = 'LEFT', price, title, desc, img }: IProps) => {
	return (
		<div className="relative h-full w-full">
			<div
				className={classNames(
					'aspect-h-2 aspect-w-5 mb-12 rounded-2xl',
					corner === 'LEFT' ? 'ml-12' : 'mr-12',
				)}
			>
				<img
					src={img}
					alt={`picture of ${title}`}
					className="rounded-2xl rounded-xl object-cover"
				/>
			</div>
			<div
				className={classNames(
					'absolute bottom-0 flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-indigo-600 p-8 sm:flex-row-reverse sm:items-end lg:flex-auto lg:flex-col lg:items-start',
					corner === 'LEFT' ? 'left-0' : 'right-0',
				)}
			>
				<p className="flex-none text-2xl font-bold tracking-tight text-white">
					{`$${price}`}
				</p>
				<div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
					<p className="text-3xl font-semibold tracking-tight text-white">
						{title}
					</p>
					<p className="mt-2 text-base leading-7 text-indigo-200">{desc}</p>
				</div>
			</div>
		</div>
	)
}

export default Pricing