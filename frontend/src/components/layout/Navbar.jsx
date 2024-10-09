
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";
import { Link } from "react-router-dom";
import {  Home, LogOut, User } from "lucide-react";

const Navbar = () => {
	const { data: authUser } = useQuery({ queryKey: ["authUser"] });
	const queryClient = useQueryClient();

	// const { data: notifications } = useQuery({
	// 	queryKey: ["notifications"],
	// 	queryFn: async () => axiosInstance.get("/notifications"),
	// 	enabled: !!authUser,
	// });

	// const { data: connectionRequests } = useQuery({
	// 	queryKey: ["connectionRequests"],
	// 	queryFn: async () => axiosInstance.get("/connections/requests"),
	// 	enabled: !!authUser,
	// });

	const { mutate: logout } = useMutation({
		mutationFn: () => axiosInstance.post("/users/logout"),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["authUser"] });
		},
	});

	// const unreadNotificationCount = notifications?.data.filter((notif) => !notif.read).length;
	// const unreadConnectionRequestsCount = connectionRequests?.data?.length;

	return (
		<nav className='bg-white shadow-md sticky top-0 z-10'>
			<div className='max-w-7xl mx-auto px-4'>
				<div className='flex justify-between items-center py-3'>
					<div className='flex items-center space-x-4'>
						<Link to='/'>
							<img className='h-8 rounded' src='/small-logo.png' alt='Rent Property' />
						</Link>
					</div>
					<div className='flex items-center gap-2 md:gap-6'>
						{authUser ? (
							<>
								<Link to={"/"} className=' text-gray-600 hover:text-gray-800 flex flex-col items-center'>
									<Home size={20} />
									<span className='text-xs hidden md:block'>Home</span>
								</Link>
								<Link
									to={`/profile/${authUser.data.username}`}
									className=' text-gray-600 hover:text-gray-800 flex flex-col items-center'
								>
									<User size={20} />
									<span className='text-xs hidden md:block'>Me</span>
								</Link>
								<button
									className='flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-800'
									onClick={() => logout()}
								>
									<LogOut size={20} />
									<span className='hidden md:inline'>Logout</span>
								</button>
							</>
						) : (
							<>
								<Link to='/login' className='btn btn-ghost'>
									Sign In
								</Link>
								<Link to='/signup' className='btn btn-primary'>
									Join now
								</Link>
							</>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;