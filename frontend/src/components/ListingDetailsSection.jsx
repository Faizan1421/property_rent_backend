
const ListingDetailsSection = (data) => {

    const listingDetails = data?.listingDetails?.data[0]

  return (

    <div className="top_section w-content flex flex-col justify-between self-start gap-1 lg:gap-2 lg:h-[340px] ">
         <label className="bg-blue-100 w-fit p-2 text-black rounded-md lg:mb-6">{listingDetails?.location?.city}</label>
         {/* <h1 className="text-2xl md:text-3xl font-semibold">{listingDetails?.title}</h1> */}
         <label className="text-1xl text-blue-600 font-semibold lg:mt-10">  {new Intl.NumberFormat('en-PK', { style: 'currency', currency: 'PKR' }).format(listingDetails?.price)}</label>
    </div>
  )
}

export default ListingDetailsSection