import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios";
import InfiniteScroll from "react-infinite-scroller";
import { useEffect, useState } from "react";

// import toast from "react-hot-toast";

const Listings = () => {
  const [categoryCheck, setCategoryCheck] = useState(false);

  const queryClient = useQueryClient();
  /////////////////////////////////////
  const { data: category } = useQuery({
    queryKey: ["selectedCategory"],
    initialData: {
      name: "all",
    },
  });

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
      `listings/c/${category.name}?page=${pageParam}&limit=9`
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
          <div key={index} className="flex flex-wrap justify-center items-center">
            {page.docs.map((item, index) => (
                <div key={index}className="card bg-base-100 w-96 shadow-xl mb-20 mx-10">
                  <figure>
                    <img
                      src={item.images?.length > 0 ? item?.images?.[0]?.url : `/public/assets/images/5.jpg`}
                      alt="House"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      {item.title}
                      <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{item.description?.substring(0, 30)}...</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">{item?.categories?.name}</div>
                      <div className="badge badge-outline">PKR-{item?.price}</div>
                    </div>
                  </div>
                </div>
              
            ))}
          </div>
        ))}
      </InfiniteScroll>

      {isFetching && <div className="text-center w-full">Loading...</div>}
      {!hasNextPage && <div className="text-center w-full">No More Data</div>}
    </div>
  );
};

export default Listings;
