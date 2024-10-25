import { useMutation, useQuery } from "@tanstack/react-query";
import { CircleArrowRight } from "lucide-react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

const ListingDetailsSection = (data) => {
  const { data: authUser } = useQuery({ queryKey: ["authUser"] });

  const navigate = useNavigate();

  const { mutate: createConversation } = useMutation({
    mutationFn: (userData) => axiosInstance.post("/conversations", userData),
    onSuccess: (res) => {
      // (res?.data?.data?._id);
      navigate(`/messenger/${res?.data?.data?._id}`);
    },
    onError: (err) => {
      toast.error(err.response.data.message || "Something went wrong");
    },
  });

  const listingDetails = data?.listingDetails?.data[0];

  const handleClick = () => {
    if (authUser) {
      createConversation({
        receiverId: listingDetails?.owner?._id,
      });
    } else {
      navigate("/messenger");
    }
  };

  const bsonDate = listingDetails?.owner?.createdAt;
  const date = moment(bsonDate).toDate();
  const memberSince = moment(date).format("MMM Do YYYY");
  return (
    <div className=" top_section w-content flex flex-col self-start justify-center gap-1 lg:gap-8 lg:h-[340px] ">
      <h1 className="font-bold text-3xl mb-10">Listed By</h1>
      <div className="flex gap-4 justify-start items-center lg:flex-col xl:flex-row">
        <div className="w-20 h-20 ">
          <img
            src={`${listingDetails?.owner?.avatar ? listingDetails?.owner?.avatar : "/avatar.png"}`}
            className="lg:w-20 lg:h-20 rounded-full object-cover"
          />
        </div>
        <div className="">
          <h1 className="text-lg font-bold">
            {listingDetails?.owner?.fullName}
          </h1>
          <h2 className="text-md font-normal ">Member Since : {memberSince}</h2>
          <h2 className="text-sm font-bold mt-2 flex items-center">
            See Profile
            <CircleArrowRight
              onClick={() => {
                navigate(`/profile/${listingDetails?.owner?.username}`);
              }}
              className="ml-2 hover:text-blue-600 hover:cursor-pointer"
            />
          </h2>
        </div>
      </div>
      <div className="flex justify-center">
        <h1
          className="btn ptn-primary bg-blue-600 text-white mr-2 hover:bg-white hover:text-blue-600 hover:border-blue-600  xl:w-72  "
          onClick={handleClick}
        >
          Message
        </h1>
      </div>
    </div>
  );
};

export default ListingDetailsSection;
