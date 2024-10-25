import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const params = useParams();
  const { data: userProfile } = useQuery({
    queryKey: ["userProfile"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get(`/users/u/${params?.username}`);
        return res.data;
      } catch (err) {
        if (err.response && err.response.status === 401) {
          return null;
        }
        toast.error(err.response.data.message || "Something went wrong");
      }
    },
    refetchOnWindowFocus: false, //refetchOnMount: false, for coming back on tab it will not refetch the data
  });

  "user profile", userProfile;

  return <div> ProfilePage</div>;
};

export default ProfilePage;
