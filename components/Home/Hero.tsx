'use client'

const Hero = () => {
	return (
		<div>
			<div className="item-center relative mx-auto flex h-screen max-w-2xl justify-center py-32 text-white sm:py-48 lg:py-56">
				<div className="absolute z-10 h-[500px] w-full rounded-xl bg-[#687f9a] opacity-70"></div>
				<div className="z-20 mb-44 flex flex-col items-center justify-center gap-3 text-center">
					<div className="w-full">
						<h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
							Make Life Beautiful
						</h1>
					</div>
					<p className="mt-6 text-lg leading-8">
						Using The Powers Of Water To Transform Outdoor Living Spaces
					</p>
					<div className="mt-10 flex items-center justify-center">
						<a
							href="#"
							className="rounded-md bg-indigo-500 px-5 py-4 text-lg font-bold font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
						>
							Get started
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero