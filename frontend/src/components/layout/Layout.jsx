import Navbar from "./Navbar";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
	return (
		<div className='min-h-screen bg-base-100'>
			<Navbar />
			<main>{children}</main>
			{/* className='max-w-7xl mx-auto px-4 py-6' */}
		</div>
	);
};
export default Layout;