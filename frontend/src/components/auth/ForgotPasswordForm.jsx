import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { axiosInstance } from "../../lib/axios";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";

const ForgotPasswordForm = () => {
	const [email, setEmail] = useState("");
	// const queryClient = useQueryClient();

	const { mutate: forgotPasswordMutation, isLoading } = useMutation({
		mutationFn: (userData) => axiosInstance.post("/users/forgot-password", userData),
		onSuccess: () => {
			// queryClient.invalidateQueries({ queryKey: ["authUser"] });
            toast.success("Password Recovery Email Sent successfully");
		},
		onError: (err) => {
			toast.error(err.response.data.message || "Something went wrong");
		},
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		forgotPasswordMutation({ email });
	};

	return (
		<form onSubmit={handleSubmit} className='space-y-4 w-full max-w-md'>
			<input
				type='text'
				placeholder='Email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				className='input input-bordered w-full'
				required
			/>
		
			<button type='submit' className='btn btn-primary w-full'>
				{isLoading ? <Loader className='size-5 animate-spin' /> : "Submit"}
			</button>
		</form>
	);
};
export default ForgotPasswordForm;