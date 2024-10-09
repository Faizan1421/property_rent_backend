import {  useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { axiosInstance } from "../../lib/axios";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";
import { useParams } from'react-router-dom';
const ResetPasswordForm = () => {
	const [password, setPassword] = useState("");
	// const queryClient = useQueryClient();

	const {token} =useParams()
	
	// const history = useHistory();
	const { mutate: resetPassword, isLoading } = useMutation({

		mutationFn: (pass) => axiosInstance.post(`/users/reset-password/${token}`,pass),
		onSuccess: () => {
			// queryClient.invalidateQueries({ queryKey: ["authUser"] });
            toast.success("Token is Valid");
			
		},
		onError: (err) => {
			toast.error(err.response.data.message || "Something went wrong");
		},
	});
	const { data:checkToken  } = useQuery({
		queryKey: ["checkResetPassToken"],
		queryFn: async () => {
		  try {
			  const res = await axiosInstance.get(`/users/reset-password/${token}`);
			  toast.success("Token is Valid");
			 if(res.data.success == true){
				console.log("true")
				
			 }
			return res.data;
		  } catch (err) {
			if (err.response && err.response.status === 401) {
			  return null;
			}
			toast.error(err.response.data.message || "Something went wrong");
		  }
		},
		
	  }, 
	);
	// return (
	// 	<h1>
	// 	{	checkToken?.success == true ? "Token is Valid" : "Token is Expired"}
	// 	</h1>
	// )
	 
     
	
    
	const handleSubmit = (e) => {
		e.preventDefault();
		resetPassword({ password });
	};
   
	return (
		<form onSubmit={handleSubmit} className='space-y-4 w-full max-w-md'>
			<input
				type='password'
				placeholder='Enter New Password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				className='input input-bordered w-full'
				required
			/>
		
			<button type='submit' className='btn btn-primary w-full'>
				{isLoading ? <Loader className='size-5 animate-spin' /> : "Submit"}
			</button>
		</form>
	);
};
export default ResetPasswordForm;