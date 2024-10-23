import { Heart, MapPin } from "lucide-react";
import moment from "moment";

const ListingDetailsBelowSectionTwo = (data) => {
  const listingDetails = data?.listingDetails?.data[0];
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
        <div className="flex items-center gap-2">
        <Heart className="text-blue-600 cursor-pointer hover:"/>
        <h1 className="text-gray-600 text-xs font-semibold">{formattedDate}</h1>
        </div>
      </div>
      <h1 className="text-lg lg:text-2xl font-semibold mb-2 ">
        {listingDetails?.title}
      </h1>
      <p className="flex gap-2">
        <MapPin className="text-blue-600" />
        {listingDetails?.location?.city.charAt(0).toUpperCase() +
          listingDetails?.location?.city?.slice(1)}
        ,{" "}
        {listingDetails?.location?.country?.charAt(0).toUpperCase() +
          listingDetails?.location?.country?.slice(1)}
      </p>
    </div>
  );
};

export default ListingDetailsBelowSectionTwo;
