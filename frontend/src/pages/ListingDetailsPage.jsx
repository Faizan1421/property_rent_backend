import { useParams } from "react-router-dom";
import { axiosInstance } from "../lib/axios";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Slider from "../components/Slider";
import ListingDetailsSection from "../components/ListingDetailsSection";

const ListingDetailsPage = () => {
  const { id } = useParams();

  const { data: listingDetails, isLoading } = useQuery({
    queryKey: ["ListingDetails"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get(`/listings/single/${id}`);
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

  !isLoading
    ? console.log(listingDetails.data[0].images)
    : console.log("loading");

  //   if (isLoading) return <div>Loading...</div>;
  //   return (
  //     <div className="flex px-10 md:px-20 flex-col md:flex-row  items-center justify-center md:mt-20 gap-5 md:gap-20  ">
  //     <Slider listingDetails={listingDetails}/>
  //     <ListingDetailsSection listingDetails={listingDetails}/>

  //     </div>
  //   );

  if (isLoading)
    return (
      <div className="flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center gap-5 w-screen md:gap-20 ">
        <div className="flex w-screen md:w-[600px] flex-col mt-20">
          <div className="skeleton h-[200px] w-screen md:h-[350px] md:w-[600px]"></div>
        </div>
        <div className="flex flex-col px-10 md:px-0 w-[300px] gap-4 md:gap-10">
          <div className="skeleton h-4 w-16"></div>
          <div className="skeleton h-4 w-40"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
        
      </div>
    );

  return (
    <div className="flex px-10 md:px-20 flex-col md:flex-row  items-center justify-center md:mt-20 gap-5 md:gap-20  ">
      <Slider listingDetails={listingDetails} />
      <ListingDetailsSection listingDetails={listingDetails} />
    </div>
  );
};

export default ListingDetailsPage;
