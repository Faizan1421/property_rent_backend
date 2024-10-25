import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { axiosInstance } from "../../lib/axios";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ResetPasswordForm = () => {
  const [invalidToken, setInvalidToken] = useState(false);
  const [password, setPassword] = useState("");
  // const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { token } = useParams();

  const { mutate: resetPassword, isPending } = useMutation({
    mutationFn: (pass) =>
      axiosInstance.post(`/users/reset-password/${token}`, pass),
    onSuccess: () => {
      toast.success("Password Changed Successfully");
      navigate("/login");
    },
    onError: (err) => {
      if (err.response && err.response.status === 415) {
        setInvalidToken(true);
      }
      toast.error(err.response.data.message || "Something went wrong");
    },
  });
  useQuery({
    queryKey: ["checkResetPassToken"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get(`/users/reset-password/${token}`);
        toast.success("Token is Valid");

        if (res.data.success == true) {
          ("true");
        }
        return res.data;
      } catch (err) {
        ("here");
        if (err.response && err.response.status === 415) {
          setInvalidToken(true);
        }
        toast.error(err.response.data.message || "Something went wrong");
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    resetPassword({ password });
  };

  return (
    <>
      {invalidToken ? (
        <h1 className=" text-1xl font-bold flex justify-center items-center text-3x">
          Token is Invalid or Expired
        </h1>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
            <input
              type="password"
              placeholder="Enter New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full"
              disabled={isPending}
              required
            />

            <button type="submit" className="btn btn-primary w-full">
              {isPending ? (
                <Loader className="size-5 animate-spin" />
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </>
      )}
    </>
  );
};
export default ResetPasswordForm;
