import { useInfiniteQuery } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios";
import InfiniteScroll from 'react-infinite-scroller';
// import toast from "react-hot-toast";







const Listings = () => {
    const fetchProjects = async ({ pageParam = 1}) => {
        const {data} = await axiosInstance.get(`listings/c/all?page=${pageParam}&limit=10`);
        console.log(data)
        return data.data;
      }
   
const {
    data:queryData = {},
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isLoading,
    isError,
    status,
  } = useInfiniteQuery({
    queryKey: ['starwars'],
    queryFn: fetchProjects,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
        if (lastPage.hasNextPage){
            return lastPage.page + 1      
        }else {
            return undefined
        }
    },
    keepPreviousData: true,
   
  })

console.log(status)
//////////////////////////////////////////


  if (isLoading) return <div className='text-center w-full'>Loading...</div>;
  console.log(queryData);
  if (!queryData && !isLoading)
    return <div className='text-center w-full'>No data</div>;

  if (isError) return <div className='text-center w-full'>{error.message}</div>;

  return (
    <>
      <InfiniteScroll
        loadMore={() => {
          if (!isFetching) fetchNextPage();
        }}
        hasMore={hasNextPage}
       
      >
        {queryData.pages.map((page, index) => (
          <div key={index}>
            {page.docs.map((item, index) => (
              <div key={index}>{item.title}</div>
            ))}
          </div>
        ))}
      </InfiniteScroll>

      {isFetching && <div className='text-center w-full'>Loading...</div>}
      {!hasNextPage && <div className='text-center w-full'>No More Data</div>}

    </>
  );
}

export default Listings