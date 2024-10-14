import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios";
import InfiniteScroll from "react-infinite-scroller";
import { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";



const Listings = () => {
    const [categoryCheck, setCategoryCheck] = useState(false);
    
    const queryClient = useQueryClient();
    
    const navigate = useNavigate();
  const { data: category } = useQuery({
    queryKey: ["selectedCategory"],
    initialData: {
      name: "all",
    },
  });

  const handleNavigate = (id) => {
    navigate(`/listings/${id}`);
}

  //   we are checking if category is changed then we will set categoryCheck to true for refetching listing data from server again.
  useEffect(() => {
    console.log("render again");

    if (category) setCategoryCheck(true);
    return;
  }, [category]);

  //if categoryCheck is true then we will refetch listing data from server
  if (categoryCheck) {
    queryClient.invalidateQueries({ queryKey: ["listings"] });
    setCategoryCheck(false);
  }

  //
  const fetchProjects = async ({ pageParam = 1 }) => {
    const { data } = await axiosInstance.get(
      `listings/c/${category.name}?page=${pageParam}&limit=12`
    );
    console.log(data);
    return data.data;
  };

  const {
    data: queryData = {},
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isLoading,
    isError,
    status,
  } = useInfiniteQuery({
    queryKey: ["listings"],
    queryFn: fetchProjects,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.hasNextPage) {
        return lastPage.page + 1;
      } else {
        return undefined;
      }
    },
    keepPreviousData: true,
    refetchOnWindowFocus: false, //refetchOnMount: false, for coming back on tab it will not refetch the data
  });

  //////////////////////////////////////////

  if (isLoading) return <div className="text-center w-full">Loading...</div>;
  console.log(queryData);
  if (!queryData && !isLoading)
    return <div className="text-center w-full">No data</div>;

  if (isError) return <div className="text-center w-full">{error.message}</div>;

  return (
    <div>
      <InfiniteScroll
        loadMore={() => {
          if (!isFetching) fetchNextPage();
        }}
        hasMore={hasNextPage}
      >
        {queryData.pages.map((page, index) => (
          <div
            key={index}
            className="flex flex-wrap justify-center items-center px-10"
          >
            {page.docs.map((item, index) => (
              <div
                key={index}
                className="card bg-base-100 w-80 shadow-lg m-5 cursor-pointer"
                onClick={() => {
                  handleNavigate(item._id);
                }}
              >
                <figure>
                  <img
                    src={
                      item.images?.length > 0
                        ? item?.images?.[0]?.url
                        : `/public/assets/images/5.jpg`
                    }
                    alt="House"
                  />
                </figure>
                <div className="card-body p-5">
                  <h2 className="card-title text-blue-600">
                    {item.title.substring(0, 15)}{`${item?.title?.length > 15 ? "..." : ""}`}
                    {/* <div className="badge badge-secondary">NEW</div> */}
                  </h2>
                  <p className="text-gray-600">{item.description?.substring(0, 30)}{`${item?.description?.length > 30 ? "..." : ""}`}</p>
                  <div className="relative w-full max-w-md">
                    <div
                      className="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-white px-3 text-sm text-gray-600">
                        Details
                      </span>
                       
                    </div>
                      
                  </div>
                  <div className="card-actions justify-end mt-3">
                    <span className=" text-blue-600 text-xs font-[400] me-1 px-2.5 py-0.5 rounded shadow-inner">
                    {item?.location?.city}
                    </span>
                    <span className=" text-blue-600 text-xs font-[400] me-1 px-2.5 py-0.5 rounded shadow-inner ">
                      {item?.categories?.name}
                    </span>
                    <span className="bg-blue-600 text-white text-xs font-[500] me-1 px-2.5 py-1 rounded ">
                     {new Intl.NumberFormat('en-PK', { style: 'currency', currency: 'PKR' }).format(item?.price)}
                    </span>
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </InfiniteScroll>

      {/* {isFetching && <div className="text-center w-full">Loading...</div>} */}
      {isFetching && (
        <div className="flex justify-center items-center h-screen">
          <Loader className="size-10 animate-spin text-blue-700" />{" "}
        </div>
      )}
      {!hasNextPage && !isFetching && (
        <div className="text-center w-full">No More Data</div>
      )}
    </div>
  );
};

export default Listings;
