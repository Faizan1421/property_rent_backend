import { useParams } from "react-router-dom";
import { axiosInstance } from "../lib/axios";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Slider from "../components/Slider";
import ListingDetailsSection from "../components/ListingDetailsSection";
import ListingDetailsBelowSectionOne from "../components/ListingDetailsBelowSectionOne";
import ListingDetailsBelowSectionTwo from "../components/ListingDetailsBelowSectionTwo";
import ListingDetailsBelowSectionThree from "../components/ListingDetailsBelowSectionThree";
import Comments from "../components/Comments";

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

  return (
    <div className=" py-10 lg:py-20 ">
      <div className=" flex flex-col lg:flex-row  w-[100%] ">
        <div className= "slider_wraper lg:w-[60%]">
        <Slider listingDetails={listingDetails} />
        </div>
        <div className="listing_details_wrapper px-10 py-10">
        <ListingDetailsSection listingDetails={listingDetails} />
        </div>
      </div>
      <div className="below_section1 pt-10 px-10   ">
        <ListingDetailsBelowSectionOne listingDetails={listingDetails}/>
      </div>
      
      <div  className="below_section2 pt-10 px-10   ">
        <ListingDetailsBelowSectionTwo listingDetails={listingDetails}/>
      </div>
      <div  className="below_section3 pt-10 px-10   ">
        <ListingDetailsBelowSectionThree listingDetails={listingDetails}/>
      </div>
      <div  className="below_section3 pt-10 px-10 ">
        <Comments listingDetails={listingDetails}/>
      </div>
      
    </div>
  );
};

export default ListingDetailsPage;
