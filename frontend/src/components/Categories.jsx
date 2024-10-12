import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";
import { Loader } from "lucide-react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
const Categories = () => {
  //setting state Globally by using tanstack query
  const queryClient = useQueryClient();
  const { data: selectedCategory } = useQuery({
    queryKey: ["selectedCategory"],
    initialData: {
      name: "all",
    },
  });

  // Fetching Categories by using tanstack query
  const {
    data: categories,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/category");
        return res.data;
      } catch (err) {
        toast.error(err.response.data.message || "Something went wrong");
      }
    },
  });
  isSuccess && queryClient.invalidateQueries({ queryKey: ["listings"] });

  return isLoading ? (
    <div className="flex justify-center items-center h-screen ">
      <Loader className="size-10 animate-spin text-blue-700" />{" "}
    </div>
  ) : (
    <div className="">
      <h1 className=" text-center font-semibold text-5xl  text-blue-600 ">
        Explore Top Categories
      </h1>
      <p className="pb-12 max-w-[700px] text-lg font-semibold text-gray-600 text-center mx-auto">
        Explore our wide range of vacation rentals that cater to all types of
        travelers. Immerse yourself in the local culture, enjoy the comforts of
        home, and create unforgettable memories in your dream destination.
      </p>
      <div className="px-10 flex gap-2 justify-center overflow-hidden ">
        <button
          className={`btn btn-outline btn-primary ${selectedCategory.name === "all" && "btn-active"}`}
          onClick={() => {
            queryClient.setQueryData(["selectedCategory"], () => {
              return {
                name: "all",
              };
            });
          }}
        >
          All
        </button>
        {categories.data?.map((data, key) => {
          return (
            <div key={key} className="flex pb-12">
              <button
                className={` btn btn-outline btn-primary  ${selectedCategory.name === data.name && "btn-active"}`}
                onClick={() => {
                  queryClient.setQueryData(["selectedCategory"], () => {
                    return {
                      name: data.name,
                    };
                  });
                }}
              >
                {data.name}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
