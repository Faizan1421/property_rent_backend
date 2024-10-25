import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { axiosInstance } from "../../lib/axios";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  // const queryClient = useQueryClient();

  const { mutate: forgotPasswordMutation, isPending } = useMutation({
    mutationFn: (userData) =>
      axiosInstance.post("/users/forgot-password", userData),
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ["authUser"] });
      setEmailSent(true);
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
    <>
      {emailSent ? (
        <h1 className="text-1xl font-bold flex justify-center items-center text-3x">
          {" "}
          Email Sent Successfully
        </h1>
      ) : (
        <>
          {" "}
          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
export default ForgotPasswordForm;
