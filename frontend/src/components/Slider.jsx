

const Slider = (data) => {
  return (
    <div className="flex flex-col justify-center items-center w-screen md:w-[600px]   lg:max-w-[800px]">
    <div className="carousel md:max-w-[600px] lg:max-w-[800px] md:max-h-[400px]  p-0 m-0">
      {data?.listingDetails?.data[0]?.images?.map((image, index) => (
        <div
          id={`item${index}`}
          className="carousel-item w-full h-full "
          key={index}
        >
          <img src={image.url} className="object-contain " />
        </div>
      ))}
    </div>
    <div className="flex justify-center w-full ">
      <div className=" flex gap-4 w-fit  ">
        {data?.listingDetails?.data[0]?.images?.map((_, index) => (
          <a href={`#item${index}`} className="btn btn-xs bg-blue-100  hover:bg-blue-600 mt-6 " key={index}>
            {index + 1}
          </a>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Slider