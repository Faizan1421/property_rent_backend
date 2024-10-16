import { Link } from "react-router-dom";

const ListingDetailsBelowSectionOne = (data) => {
  const listingDetails = data?.listingDetails?.data[0];

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
        <Link to="/chat" className="btn hover:bg-blue-600 hover:text-white">
          Message
        </Link>
      </div>
    </div>
  );
};

export default ListingDetailsBelowSectionOne;
