import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios.js";
import { toast } from "react-hot-toast";
import { Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  // const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signUpMutation, isPending } = useMutation({
    mutationFn: async (data) => {
      const res = await axiosInstance.post("/users/register", data);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Account created successfully");
      // queryClient.invalidateQueries({ queryKey: ["authUser"] });
      navigate("/login");
    },
    onError: (err) => {
      toast.error(err.response.data.message || "Something went wrong");
    },
  });
  //Update phone number to start with +92
  const phone = "+92" + phoneNumber;

  const handleSignUp = (e) => {
    e.preventDefault();
    signUpMutation({ fullName, username, email, phone, password });
  };

  return (
    <form onSubmit={handleSignUp} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="input input-bordered w-full"
        required
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input input-bordered w-full"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input input-bordered w-full"
        required
      />
      <input
        type="phone"
        placeholder="Phone Ex: 3125649693"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="input input-bordered w-full"
        required
      />

      <input
        type="password"
        placeholder="Password (6+ characters)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input input-bordered w-full"
        required
      />

      <button
        type="submit"
        disabled={isPending}
        className="btn btn-primary w-full text-white"
      >
        {isPending ? (
          <Loader className="size-5 animate-spin" />
        ) : (
          "Agree & Join"
        )}
      </button>
    </form>
  );
};
export default SignUpForm;
