import React from 'react'

interface IProps {
	title: string
	desc: string
}
const Header = ({ title, desc }: IProps) => {
	return (
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#0099ff"
					fillOpacity="1"
					d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,42.7C672,32,768,32,864,48C960,64,1056,96,1152,96C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
				></path>
			</svg>
			<div className="absolute inset-0 z-20 h-[320px] px-6 py-24 text-white sm:py-32 lg:px-8">
				<div className="mx-auto flex max-w-2xl flex-col justify-between text-center">
					<h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">
						{title}
					</h2>
					<p className="mt-6 text-lg leading-8">{desc}</p>
				</div>
			</div>
		</div>
	)
}

export default Header