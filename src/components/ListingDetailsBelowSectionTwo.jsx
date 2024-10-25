import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Heart, MapPin } from "lucide-react";
import moment from "moment";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

const ListingDetailsBelowSectionTwo = (data) => {
  const listingDetails = data?.listingDetails?.data[0];
  const { data: authUser } = useQuery({ queryKey: ["authUser"] });
  //   (authUser?.data?._id, "authUser");

  const queryClient = useQueryClient();

  // mutation for adding listing to wishlist

  const { mutate: addToWishlist } = useMutation({
    mutationFn: (id) => axiosInstance.post(`/wishlist/${id}`),
    onSuccess: () => {
      // setWishlisted(true)
      queryClient.invalidateQueries({ queryKey: ["ListingDetails"] });
      toast.success("Added to wishlist successfully");
    },
    onError: (err) => {
      toast.error(err.response.data.message || "Something went wrong");
    },
  });

  const handleAddToWishlist = (id) => {
    if (authUser && authUser?.data?._id !== listingDetails?.owner?._id) {
      addToWishlist(id);
    }
  };

  // mutation for Removing listing to wishlist

  const { mutate: deleteFromWishlist } = useMutation({
    mutationFn: (id) => axiosInstance.delete(`/wishlist/${id}`),
    onSuccess: () => {
      // setWishlisted(false)
      queryClient.invalidateQueries({ queryKey: ["ListingDetails"] });
      toast.success("Deleted from wishlist successfully");
    },
    onError: (err) => {
      toast.error(err.response.data.message || "Something went wrong");
    },
  });

  const handleDeleteFromWishlist = (id) => {
    if (authUser && authUser?.data?._id !== listingDetails?.owner?._id) {
      deleteFromWishlist(id);
    }
  };

  const bsonDate = listingDetails?.createdAt;
  const date = moment(bsonDate).toDate();
  const formattedDate = moment(date).fromNow();
  return (
    <div className="flex flex-col border-[1px] border-gray-100 rounded-lg p-4  ">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl lg:text-4xl font-bold text-blue-600">
          {new Intl.NumberFormat("en-PK", {
            style: "currency",
            currency: "PKR",
          }).format(listingDetails?.price)}
        </h1>
        <div className="flex items-center gap-10">
          <h1 className="text-gray-600 text-xs font-semibold">
            {formattedDate}
          </h1>
          <div className="flex flex-col items-center">
            <Heart
              onClick={() => {
                if (!listingDetails?.isLiked) {
                  handleAddToWishlist(listingDetails?._id);
                } else {
                  handleDeleteFromWishlist(listingDetails?._id);
                }
              }}
              className={`${listingDetails?.isLiked ? "text-red-600" : "text-base-400"} cursor-pointer hover:`}
            />
            <h1 className="text-gray-600 text-xs font-semibold">
              {listingDetails?.likesCount}
            </h1>
          </div>
        </div>
      </div>
      <h1 className="text-lg lg:text-2xl font-semibold mb-2 ">
        {listingDetails?.title}
      </h1>
      <p className="flex gap-2">
        <MapPin className="text-blue-600" />
        {listingDetails?.location?.city.charAt(0).toUpperCase() +
          listingDetails?.location?.city?.slice(1)}
        ,
        {listingDetails?.location?.country?.charAt(0).toUpperCase() +
          listingDetails?.location?.country?.slice(1)}
      </p>
    </div>
  );
};
export default ListingDetailsBelowSectionTwo;
