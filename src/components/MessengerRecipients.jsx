import Chat from "./Chat";
import { useQueryClient } from "@tanstack/react-query";
import { CircleArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
// import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MessengerRecipients = (data) => {
  const [isScrollAtEnd, setIsScrollAtEnd] = useState(false);
  const params = useParams();
  "params", params;
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.body.offsetHeight;
      if (scrollPosition >= documentHeight) {
        setIsScrollAtEnd(true);
      } else {
        setIsScrollAtEnd(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  //!Note:
  // const { data: conversationIdState } = useQuery({
  //   queryKey: ["conversationIdState"],
  //   initialData: {
  //     conversationId: null,
  //   },
  // });
  // ("conversationIdState", conversationIdState);

  //Method for Sorting conversation by using method of latest chat in conversation
  const sortedLatestConversation = data?.filteredConversations?.sort((a, b) => {
    const latestChatA = a.chats.sort(
      (x, y) => new Date(y.createdAt) - new Date(x.createdAt)
    )[0];
    const latestChatB = b.chats.sort(
      (x, y) => new Date(y.createdAt) - new Date(x.createdAt)
    )[0];
    return (
      new Date(latestChatB?.createdAt || a.createdAt) -
      new Date(latestChatA?.createdAt || b.createdAt)
    );
  });
  //!Note:
  // useEffect(() => {
  //   ("rendered again messenger receipt");
  // }, [conversationIdState]);

  return (
    <>
      <div className="">
        <CircleArrowDown
          className={`fixed bottom-24 right-1 lg:bottom-10 lg:right-10 z-50 cursor-pointer w-8 h-8 lg:w-10 lg:h-10 text-blue-600 opacity-40 hover:opacity-100 animate-bounce hover:animate-none scroll-down-button  ${isScrollAtEnd ? "hidden" : ""}`}
          onClick={scrollToBottom}
        />

        <label
          htmlFor="my-drawer-2"
          className="btn w-screen drawer-button lg:hidden fixed z-40 bg-base-100 text-black  text-lg rounded-none "
        >
          Conversations
        </label>

        <div className="drawer lg:drawer-open scroll-smooth ">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
          <div className="drawer-content items-center justify-center">
            <Chat />
          </div>
          <div className="drawer-side ">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay  "
            ></label>

            <ul className="menu  min-h-full w-80 p-4 pt-40 lg:pt-20 bg-blue-600 text-white">
              <div className="flex justify-center items-center mb-10">
                <img src="/logo.svg" alt="logo" className="h-20 w-20" />
              </div>
              {sortedLatestConversation?.map((conversation) => {
                return (
                  <div key={conversation._id} className="">
                    <li
                      onClick={() => {
                        //!Note:
                        // queryClient.setQueryData(["conversationIdState"], () => {
                        //   return {
                        //     conversationId: conversation?._id,
                        //   };
                        // });
                        queryClient.invalidateQueries({
                          queryKey: ["getSingleConversation"],
                        });
                        navigate(`/messenger/${conversation?._id}`);
                        document.getElementById("my-drawer-2").click(); // Close the drawer
                      }}
                      className={`rounded-xl  hover:bg-white hover:text-black  ${params?.id === conversation?._id && "bg-blue-800 text-white"}`}
                    >
                      <div className="avatar">
                        <div className="w-14 rounded-full  ">
                          <img
                            src={
                              conversation?.participants[0]?.avatar
                                ? conversation?.participants[0]?.avatar
                                : "/avatar.png"
                            }
                            alt="Profile Image"
                          />
                        </div>
                        <h1
                          className={`text-md ml-5 ${params?.id === conversation?._id && "text-xl font-semiboldS "}`}
                        >
                          {conversation?.participants[0]?.fullName}
                        </h1>
                      </div>
                    </li>
                    <div className="divider mb-0 mt-0  bg-white h-[0.1px] w-[90%]  opacity-20 mx-auto"></div>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessengerRecipients;
