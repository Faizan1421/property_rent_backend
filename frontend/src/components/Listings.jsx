import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios";
import InfiniteScroll from "react-infinite-scroller";
import { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import ListingCard from "./ListingCard";

const Listings = () => {
  const [categoryCheck, setCategoryCheck] = useState(false);

  const queryClient = useQueryClient();

  const { data: category } = useQuery({
    queryKey: ["selectedCategory"],
    initialData: {
      name: "all",
    },
  });

  //   we are checking if category is changed then we will set categoryCheck to true for refetching listing data from server again.
  useEffect(() => {
    ("render again");

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
    data;
    return data.data;
  };

  const {
    data: queryData = {},
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    // isFetchingNextPage,
    isLoading,
    isError,
    // status,
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
  queryData;
  if (!queryData && !isLoading)
    return <div className="text-center w-full">No data</div>;

  if (isError) return <div className="text-center w-full">{error.message}</div>;

  return (
    <div className="mb-48">
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
              <ListingCard key={index} item={item} />
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
        <div className="text-center w-full mt-20">No More Data</div>
      )}
    </div>
  );
};

export default Listings;
