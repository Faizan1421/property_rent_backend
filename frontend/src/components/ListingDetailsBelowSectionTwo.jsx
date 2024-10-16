import { MapPin } from "lucide-react"

const ListingDetailsBelowSectionTwo = (data) => {
    const listingDetails = data?.listingDetails?.data[0]

  return (
    <div className="bg-red-300">
        <h1 className="text-4xl font-bold ">  {new Intl.NumberFormat('en-PK', { style: 'currency', currency: 'PKR' }).format(listingDetails?.price)}</h1> 
        <h1  className="text-2xl font-semibold">{listingDetails?.title}</h1>
        <p><MapPin />{listingDetails?.location?.city.charAt(0).toUpperCase()
  + listingDetails?.location?.city?.slice(1)}, {listingDetails?.location?.country?.charAt(0).toUpperCase()
  + listingDetails?.location?.country?.slice(1)}</p>
    </div>
  )
}

export default ListingDetailsBelowSectionTwo