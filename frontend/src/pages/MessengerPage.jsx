import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import MessengerRecipients from "../components/MessengerRecipients";

const MessengerPage = () => {
  const { data: authUser } = useQuery({ queryKey: ["authUser"] });
  // (authUser?.data?._id, "authUser");

  const { data: conversationsData } = useQuery({
    queryKey: ["conversations"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/conversations/all");
        return res?.data;
      } catch (err) {
        if (err.response && err.response.status === 401) {
          return null;
        }
        toast.error(err.response.data.message || "Something went wrong");
      }
    },
    refetchOnWindowFocus: false, //refetchOnMount: false, for coming back on tab it will not refetch the data
  });
  conversationsData;
  /* This code snippet is filtering out the conversations based on the current authenticated user. */
  const filteredConversations = conversationsData?.data?.map((conversation) => {
    return {
      ...conversation,
      participants: conversation?.participants?.filter(
        (participant) => participant?._id !== authUser?.data?._id
      ),
    };
  });

  filteredConversations;

  return (
    <div>
      <MessengerRecipients filteredConversations={filteredConversations} />
    </div>
  );
};

export default MessengerPage;
