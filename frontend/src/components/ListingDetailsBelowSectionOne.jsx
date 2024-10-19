import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {useNavigate } from "react-router-dom";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

const ListingDetailsBelowSectionOne = (data) => {
  
  const { data: authUser } = useQuery({ queryKey: ["authUser"] });
  // const { data: conversationIdState } = useQuery({ queryKey: ["conversationIdState"] });
  const listingDetails = data?.listingDetails?.data[0];

  const queryClient = useQueryClient();
  const navigate = useNavigate();

	const { mutate: createConversation } = useMutation({
		mutationFn: (userData) => axiosInstance.post("/conversations", userData),
		onSuccess: (res) => {
      // console.log(res?.data?.data?._id);
      queryClient.setQueryData(["conversationIdState"], () => {
        return {
            conversationId: res?.data?.data?._id
        };
      });
      navigate(`/messenger`);
		},
		onError: (err) => {
			toast.error(err.response.data.message || "Something went wrong");
		},
	});

const handleClick = () => {
 if(authUser){
  createConversation({
    receiverId: listingDetails?.owner?._id
  })
 } else{
  navigate("/messenger")
 }
  
}

  return (
    <div className="flex justify-between  items-center  md:w-[60%]">
      <div className="flex justify-start items-center gap-2">
        <div className="avatar">
          <div className="w-14 rounded-full">
            <img
              src={
                listingDetails?.owner?.avatar
                  ? listingDetails?.owner?.avatar
                  : "/public/avatar.png"
              }
              alt="Profile Image"
            />
          </div>
        </div>
        <h1 className="text-md text-black">
          {listingDetails?.owner?.fullName}
        </h1>
      </div>
      <div className="">
        <h1 to="/messenger" className="btn hover:bg-blue-600 hover:text-white" onClick={handleClick}>
          Message
        </h1>
      </div>
    </div>
  );
};

export default ListingDetailsBelowSectionOne;
