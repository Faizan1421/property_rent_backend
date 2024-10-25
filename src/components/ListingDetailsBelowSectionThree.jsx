const ListingDetailsBelowSectionThree = (data) => {
  const listingDetails = data?.listingDetails?.data[0];

  return (
    <div>
      <div className="flex flex-col border-[1px] border-gray-100 rounded-lg p-4  mb-10">
        <h1 className="text-2xl lg:text-2xl font-bold mb-6">Details</h1>
        <h1 className="text-xs lg:text-sm font-bold  mb-6">
          Total Rooms {listingDetails?.rooms}
        </h1>
        <div className="flex gap-2 font-semibold">
          {listingDetails?.amenities?.map((amenities, index) => (
            <span
              className="w-fit h-fit bg-blue-100 text-sm lg:text-sm mb-2 p-2 rounded-md text-black"
              key={index}
            >
              {amenities}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col border-[1px] border-gray-100 rounded-lg p-4 ">
        <h1 className="text-2xl lg:text-2xl font-bold mb-6">Description</h1>
        <h1 className="text-sm lg:text-sm mb-2 ">
          {listingDetails?.description}
        </h1>
        {listingDetails?.highlight && <br />}
        <h1 className="text-lg lg:text-xl font-semibold mb-6">
          {listingDetails?.highlight}
        </h1>
        <h1 className="text-sm lg:text-sm mb-2 ">
          {listingDetails?.highlightDesc}
        </h1>
      </div>
    </div>
  );
};

export default ListingDetailsBelowSectionThree;
