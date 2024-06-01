import React from "react"
import Header from "./headerComponents/Header"
import Footer from "./Footer"

type GeneralLayoutProps = {
	children: React.ReactNode
}

const GeneralLayout : React.FC<GeneralLayoutProps>= ({ children }) => {
	return (
		<div className="p-1 max-w-6xl mx-auto">
			<Header />
			<section>
				{children}
			</section>
			<Footer />
		</div>
	)
}

export default GeneralLayout