import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios";
import { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import moment from "moment";
import { animateScroll } from "react-scroll";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const options = {
  // Your options here, for example:
  duration: 500,
  smooth: true,
};
const Chat = () => {
  const [createMessage, setCreateMessage] = useState("");

  const queryClient = useQueryClient();

  const { data: authUser } = useQuery({ queryKey: ["authUser"] });
  //   (authUser?.data?._id, "authUser");
  //!Note:
  // const { data: conversationIdState } = useQuery({
  //   queryKey: ["conversationIdState"],
  // });
  // ("conversationIdState", conversationIdState);

  const { id: conversationId } = useParams();
  //!Note:
  const [conversationIdChange, setconversationIdChange] = useState(false);
  //Grab conversation id from params and use it to fetch conversation data
  const {
    data: getSingleConversation,
    isPending,
    isLoading,
  } = useQuery({
    queryKey: ["getSingleConversation"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get(
          `/conversations/${conversationId ? conversationId : "all"}`
        );
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

  useEffect(() => {
    ("rendered use effect single conversation");
    setconversationIdChange(true);
    // animateScroll.scrollToBottom(options);

    // Cleanup function
    // return () => {
    //   setconversationIdChange(false);
    // };
    // return;
  }, [conversationId]);

  if (conversationIdChange) {
    queryClient.invalidateQueries({ queryKey: ["getSingleConversation"] });
    setconversationIdChange(false);
    animateScroll.scrollToBottom(options);
  }
  "conversationIdChange", conversationIdChange;

  // mutation for sending msg

  const { mutate: sendMsg, isPending: isSendingMsg } = useMutation({
    mutationFn: (userData) =>
      axiosInstance.post(`/chat/${conversationId}`, userData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getSingleConversation"] });

      setCreateMessage("");

      animateScroll.scrollToBottom(options); // scroll to bottom

      // toast.success("Message sent successfully");
    },
    onError: () => {
      // toast.error(err.response.data.message || "Something went wrong");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMsg({ message: createMessage });
  };

  return (
    <>
      {isPending || isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Loader className="size-10 animate-spin text-blue-700" />
        </div>
      ) : (
        <div className="mb-40 mt-24 px-10">
          {/* <div>{getSingleConversation?.data[0]?.chats[0]?.message}</div> */}
          {getSingleConversation?.data[0]?.chats.length ? (
            getSingleConversation?.data[0]?.chats
              ?.slice()
              .reverse()
              .map((chat, index) => {
                // Date format set
                const bsonDate = chat?.createdAt;
                const date = moment(bsonDate).toDate();
                const formattedDate = moment(date).fromNow();
                return (
                  // <div key={chat._id}>
                  //   <div>{chat?.message}</div>
                  // </div>
                  <div key={index} className="w-full mb-4  lg:px-32 mt-12">
                    <div
                      className={`chat ${chat?.sender[0]?._id == authUser?.data?._id ? "chat-end" : "chat-start"}`}
                    >
                      <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                          <img
                            alt="Tailwind CSS chat bubble component"
                            src={`${chat?.sender[0]?.avatar ? chat?.sender[0]?.avatar : "/avatar.png"} `}
                          />
                        </div>
                      </div>
                      <div className="chat-header text-md font-semibold mb-2">
                        {chat?.sender[0]?.fullName}

                        <time className="text-xs opacity-50 ml-4">
                          {formattedDate}
                        </time>
                      </div>
                      <div className="chat-bubble bg-base-200 text-black ">
                        {chat?.message}
                      </div>
                    </div>
                  </div>
                );
              })
          ) : (
            <div>
              <h1>No chats yet</h1>
            </div>
          )}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="fixed flex bottom-10 left-[50%] right-[50%] lg:left-0 lg:right-0 justify-center gap-4 lg:ml-40 "
      >
        <input
          type="text"
          placeholder="Write a Message"
          value={createMessage}
          onChange={(e) => {
            e.preventDefault();
            setCreateMessage(e.target.value);
          }}
          className="input input-bordered lg:w-1/2 focus:outline-blue-600 "
          // disabled={isPending}
          required
          disabled={isSendingMsg && "disabled"}
        />
        <button type="submit" className="btn btn-primary w-14">
          Send
        </button>
      </form>
    </>
  );
};

export default Chat;
