import React from 'react'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

const Contact = () => {
	return (
		<div id="contact">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="relative bg-white shadow-xl">
					<h2 className="sr-only">Contact us</h2>

					<div className="grid grid-cols-1 lg:grid-cols-3">
						{/* Contact information */}
						<div className="relative overflow-hidden bg-indigo-700 px-6 py-10 sm:px-10 xl:p-12">
							<div
								className="pointer-events-none absolute inset-0 sm:hidden"
								aria-hidden="true"
							>
								<svg
									className="absolute inset-0 h-full w-full"
									width={343}
									height={388}
									viewBox="0 0 343 388"
									fill="none"
									preserveAspectRatio="xMidYMid slice"
								>
									<path
										d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
										fill="url(#linear1)"
										fillOpacity=".1"
									/>
									<defs>
										<linearGradient
											id="linear1"
											x1="254.553"
											y1="107.554"
											x2="961.66"
											y2="814.66"
											gradientUnits="userSpaceOnUse"
										>
											<stop stopColor="#fff" />
											<stop offset={1} stopColor="#fff" stopOpacity={0} />
										</linearGradient>
									</defs>
								</svg>
							</div>
							<div
								className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-1/2 sm:block lg:hidden"
								aria-hidden="true"
							>
								<svg
									className="absolute inset-0 h-full w-full"
									width={359}
									height={339}
									viewBox="0 0 359 339"
									fill="none"
									preserveAspectRatio="xMidYMid slice"
								>
									<path
										d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
										fill="url(#linear2)"
										fillOpacity=".1"
									/>
									<defs>
										<linearGradient
											id="linear2"
											x1="192.553"
											y1="28.553"
											x2="899.66"
											y2="735.66"
											gradientUnits="userSpaceOnUse"
										>
											<stop stopColor="#fff" />
											<stop offset={1} stopColor="#fff" stopOpacity={0} />
										</linearGradient>
									</defs>
								</svg>
							</div>
							<div
								className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-1/2 lg:block"
								aria-hidden="true"
							>
								<svg
									className="absolute inset-0 h-full w-full"
									width={160}
									height={678}
									viewBox="0 0 160 678"
									fill="none"
									preserveAspectRatio="xMidYMid slice"
								>
									<path
										d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
										fill="url(#linear3)"
										fillOpacity=".1"
									/>
									<defs>
										<linearGradient
											id="linear3"
											x1="192.553"
											y1="325.553"
											x2="899.66"
											y2="1032.66"
											gradientUnits="userSpaceOnUse"
										>
											<stop stopColor="#fff" />
											<stop offset={1} stopColor="#fff" stopOpacity={0} />
										</linearGradient>
									</defs>
								</svg>
							</div>
							<h3 className="text-lg font-medium text-white">
								Consultation Request
							</h3>
							<p className="mt-6 max-w-3xl text-base text-indigo-50">
								Speak to an expert to determine the optimal location for the
								pond on your property for aesthetics, functionality and ease of
								maintenance.
							</p>
							<dl className="mt-8 space-y-6">
								<dt>
									<span className="sr-only">Phone number</span>
								</dt>
								<dd className="flex text-base text-indigo-50">
									<PhoneIcon
										className="h-6 w-6 flex-shrink-0 text-indigo-200"
										aria-hidden="true"
									/>
									<span className="ml-3">1 289 691 POND</span>
								</dd>
								<dt>
									<span className="sr-only">Email</span>
								</dt>
								<dd className="flex text-base text-indigo-50">
									<EnvelopeIcon
										className="h-6 w-6 flex-shrink-0 text-indigo-200"
										aria-hidden="true"
									/>
									<span className="ml-3">clearwatercreations@outlook.com</span>
								</dd>
							</dl>
							<ul role="list" className="mt-8 flex space-x-12">
								<li>
									<a className="text-indigo-200 hover:text-indigo-100" href="#">
										<span className="sr-only">Facebook</span>
										<svg
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											className="h-6 w-6"
											aria-hidden="true"
										>
											<path
												d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1"
												fill="currentColor"
											/>
										</svg>
									</a>
								</li>
								<li>
									<a className="text-indigo-200 hover:text-indigo-100" href="#">
										<span className="sr-only">Youtube</span>
										<svg
											fill="currentColor"
											viewBox="0 0 24 24"
											width={24}
											height={24}
											className="h-6 w-6"
											aria-hidden="true"
										>
											<path
												fillRule="evenodd"
												d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
												clipRule="evenodd"
											/>
										</svg>
									</a>
								</li>
								<li>
									<a className="text-indigo-200 hover:text-indigo-100" href="#">
										<span className="sr-only">Instagram</span>
										<svg
											fill="currentColor"
											viewBox="0 0 24 24"
											width={24}
											height={24}
											className="h-6 w-6"
											aria-hidden="true"
										>
											<path
												fillRule="evenodd"
												d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
												clipRule="evenodd"
											/>
										</svg>
									</a>
								</li>
							</ul>
						</div>

						{/* Contact form */}
						<div className="px-6 py-10 sm:px-10 lg:col-span-2 xl:p-12">
							<h3 className="text-lg font-medium text-gray-900">
								Send us a message
							</h3>
							<form
								action="#"
								method="POST"
								className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
							>
								<div>
									<label
										htmlFor="first-name"
										className="block text-sm font-medium text-gray-900"
									>
										First name
									</label>
									<div className="mt-1">
										<input
											type="text"
											name="first-name"
											id="first-name"
											required
											autoComplete="given-name"
											className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor="last-name"
										className="block text-sm font-medium text-gray-900"
									>
										Last name
									</label>
									<div className="mt-1">
										<input
											type="text"
											name="last-name"
											required
											id="last-name"
											autoComplete="family-name"
											className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-900"
									>
										Email
									</label>
									<div className="mt-1">
										<input
											id="email"
											required
											name="email"
											type="email"
											autoComplete="email"
											className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
										/>
									</div>
								</div>
								<div>
									<div className="flex justify-between">
										<label
											htmlFor="phone"
											className="block text-sm font-medium text-gray-900"
										>
											Phone
										</label>
										<span id="phone-optional" className="text-sm text-gray-500">
											Optional
										</span>
									</div>
									<div className="mt-1">
										<input
											type="text"
											name="phone"
											id="phone"
											required
											autoComplete="tel"
											className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
											aria-describedby="phone-optional"
										/>
									</div>
								</div>
								<div className="sm:col-span-2">
									<label
										htmlFor="subject"
										className="block text-sm font-medium text-gray-900"
									>
										Subject
									</label>
									<div className="mt-1">
										<input
											type="text"
											required
											name="subject"
											id="subject"
											className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
										/>
									</div>
								</div>
								<div className="sm:col-span-2">
									<div className="flex justify-between">
										<label
											htmlFor="message"
											className="block text-sm font-medium text-gray-900"
										>
											Message
										</label>
										<span id="message-max" className="text-sm text-gray-500">
											Max. 500 characters
										</span>
									</div>
									<div className="mt-1">
										<textarea
											id="message"
											name="message"
											rows={4}
											className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
											aria-describedby="message-max"
											defaultValue={''}
											required
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor="location"
										className="block text-sm font-medium text-gray-900"
									>
										Location
									</label>
									<select
										id="location"
										name="location"
										className="mt-1 block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
										defaultValue="Canada"
									>
										<option>United States</option>
										<option>Canada</option>
										<option>Mexico</option>
									</select>
								</div>
								<div>
									<label
										htmlFor="service"
										className="block text-sm font-medium text-gray-900"
									>
										Service
									</label>
									<select
										id="location"
										name="location"
										className="mt-1 block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
										defaultValue="Canada"
									>
										<option>United States</option>
										<option>Canada</option>
										<option>Mexico</option>
									</select>
								</div>
								<div className="sm:col-span-2 sm:flex sm:justify-end">
									<button
										type="submit"
										className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
									>
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact