import React from 'react'
import './globals.css'
import Navbar from '../components/Layout/Navbar'
import Image from 'next/image'
import Footer from '../components/Layout/Footer'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<div
					className="relative min-h-screen overflow-auto"
					style={{
						backgroundImage: `url('/pictures/CC-Hero.jpg')`,
						backgroundSize: 'cover',
						backgroundAttachment: 'fixed',
					}}
				>
					<Navbar />
					<div className="z-10">{children}</div>
					<Footer />
				</div>
			</body>
		</html>
	)
}