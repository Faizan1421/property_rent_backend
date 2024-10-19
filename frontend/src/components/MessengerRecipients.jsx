import Chat from "./Chat";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";


const MessengerRecipients = (data) => {


  const queryClient = useQueryClient();
  const { data: conversationIdState } = useQuery({
    queryKey: ["conversationIdState"],
    initialData: {
      conversationId: null,
    },
  });
  console.log("conversationIdState", conversationIdState);

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

  useEffect(() => {
    console.log("rendered again messenger receipt");
  }, [conversationIdState]);

  return (
    <>
      <div>
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
            <ul className="menu  min-h-full w-80 p-4 pt-40 bg-blue-600 text-white">
              {sortedLatestConversation?.map((conversation) => {
                return (
                  <li
                    onClick={() => {
                      queryClient.setQueryData(["conversationIdState"], () => {
                        return {
                          conversationId: conversation?._id,
                        };
                      });
                      //   queryClient.invalidateQueries({ queryKey: ["getSingleConversation"] });
                      //   navigate(`/messenger`);
                    }}
                    key={conversation._id}
                    className="rounded-xl  hover:bg-white hover:text-black"
                  >
                    <div className="avatar">
                      <div className="w-14 rounded-full">
                        <img
                          src={
                            conversation?.participants[0]?.avatar
                              ? conversation?.participants[0]?.avatar
                              : "/public/avatar.png"
                          }
                          alt="Profile Image"
                        />
                      </div>
                      <h1 className="text-xl ml-5">
                        {conversation?.participants[0]?.fullName}
                      </h1>
                    </div>
                  </li>
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
