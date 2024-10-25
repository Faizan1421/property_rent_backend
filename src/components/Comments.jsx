import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import moment from "moment";
import { axiosInstance } from "../lib/axios";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import { EllipsisVertical } from "lucide-react";

const Comments = (data) => {
  const { data: authUser } = useQuery({ queryKey: ["authUser"] });
  // (authUser?.data?._id, "authUser");
  const [createComment, setCreateComment] = useState("");
  const [commentAddedSuccessfully, setCommentAddedSuccessfully] =
    useState(false);
  const queryClient = useQueryClient();
  const params = useParams();
  params;
  const comments = data?.listingDetails?.data[0]?.comments;
  // (comments?.length, "comments");

  const handleDate = (createdAt) => {
    const bsonDate = createdAt;
    const date = moment(bsonDate).toDate();
    const createdATFormat = moment(date).fromNow();
    return createdATFormat;
  };

  // mutation for adding comment

  const { mutate: addComment } = useMutation({
    mutationFn: (userData) =>
      axiosInstance.post(`/comments/${params?.id}`, userData),
    onSuccess: () => {
      setCommentAddedSuccessfully(true);

      toast.success("Comment Added successfully");
    },
    onError: (err) => {
      toast.error(err.response.data.message || "Something went wrong");
    },
  });

  // mutation for deleting comment

  const { mutate: deleteComment } = useMutation({
    mutationFn: (id) => axiosInstance.delete(`/comments/${id}`),
    onSuccess: () => {
      setCommentAddedSuccessfully(true);
      toast.success("Comment Deleted successfully");
    },
    onError: (err) => {
      toast.error(err.response.data.message || "Something went wrong");
    },
  });

  // Add a Comment
  const handleClick = (e) => {
    e.preventDefault();
    addComment({ content: createComment });
  };

  // Delete a Comment
  const handleClickDeleteComment = (id) => {
    id, "deleting id";
    deleteComment(id);
  };

  if (commentAddedSuccessfully) {
    setCreateComment("");
    queryClient.invalidateQueries({ queryKey: ["ListingDetails"] });
    queryClient.invalidateQueries({ queryKey: ["allComments"] });

    setCommentAddedSuccessfully(false);
  }

  //Query for Getting All Comments
  const { data: allComments } = useQuery({
    queryKey: ["allComments"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get(`/comments/${params?.id}`);
        return res.data;
      } catch (err) {
        if (err.response && err.response.status === 401) {
          return null;
        }
        toast.error(err.response.data.message || "Something went wrong");
      }
    },
    refetchOnWindowFocus: false, //refetchOnMount: false, for coming back on tab it will not refetch the data
  });

  return (
    <div className="">
      <section className="bg-white   antialiased w-[100%] flex flex-col justify-center items-start">
        <div className=" mx-auto  w-[100%]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 ">
              Comments ({allComments?.data?.length})
            </h2>
          </div>
          {authUser && (
            <form className="mb-6 md:w-[parent]">
              <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 ">
                <label htmlFor="comment" className="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  rows={6}
                  className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none "
                  placeholder="Write a comment..."
                  required=""
                  // defaultValue="Good Location"
                  value={createComment}
                  onChange={(e) => setCreateComment(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center btn ptn-primary bg-blue-600 text-white mr-2 hover:bg-white hover:text-blue-600 hover:border-blue-600"
                onClick={handleClick}
              >
                Post comment
              </button>
            </form>
          )}
          {/* <CommentsList /> */}
          <>
            {comments?.map((item, index) => (
              <div key={index} className="md:w-[parent]">
                <article className="p-6 text-base bg-white rounded-lg  ">
                  <footer className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <p className="inline-flex  items-center mr-3 text-sm text-gray-900  font-semibold">
                        <img
                          src={
                            item?.owner?.avatar
                              ? item?.owner?.avatar
                              : "/avatar.png"
                          }
                          alt="Profile Image"
                          className="mr-2 w-10 h-10 rounded-full object-cover"
                        />
                        {item?.owner?.fullName}
                      </p>
                      <p className="text-sm text-gray-600">
                        <time
                          dateTime={handleDate(item?.createdAt)}
                          title={handleDate(item?.createdAt)}
                        >
                          {handleDate(item?.createdAt)}
                        </time>
                      </p>
                    </div>
                    {/* Dropdown menu */}
                    {authUser?.data?._id == item?.owner?._id && (
                      <div className="dropdown dropdown-top dropdown-end">
                        <div
                          tabIndex={0}
                          role="button"
                          className="btn m-1 bg-transparent border-none hover:bg-blue-600 hover:text-white"
                        >
                          <EllipsisVertical />
                        </div>
                        <ul
                          tabIndex={0}
                          className="dropdown-content menu bg-base-100 rounded-md z-[1] w-52 p-2 shadow"
                        >
                          <li
                            onClick={() => {
                              handleClickDeleteComment(item?._id);
                            }}
                            className="hover:bg-blue-600 hover:text-white rounded-md"
                          >
                            <a>Delete Comment</a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </footer>

                  <p className="text-gray-500  break-words">{item?.content}</p>
                </article>
              </div>
            ))}
          </>
        </div>
      </section>
      {allComments?.data?.length > 0 && (
        <div className="flex items-center justify-center ">
          {/* The button to open modal */}
          {allComments?.data?.length > 4 && (
            <a
              href="#my_modal_8"
              className="btn ptn-primary bg-blue-600 text-white mr-2 hover:bg-white hover:text-blue-600 hover:border-blue-600 "
            >
              More Comments
            </a>
          )}

          {/* Put this part before </body> tag */}
          <div
            className="modal  max-w-full backdrop-blur-sm  "
            role="dialog"
            id="my_modal_8"
          >
            <div className="modal-box  max-w-full ">
              <div className="modal-action sticky top-0 ">
                <a
                  href="#"
                  className="btn ptn-primary bg-blue-600 text-white mr-2 hover:bg-white hover:text-blue-600 hover:border-blue-600"
                >
                  Close
                </a>
              </div>
              {allComments?.data?.map((item, index) => (
                <div key={index} className="md:w-[parent] p-5">
                  <article className="p-6 text-base bg-white rounded-lg   ">
                    <footer className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <p className="inline-flex  items-center mr-3 text-sm text-gray-900  font-semibold">
                          <img
                            src={
                              item?.owner?.avatar
                                ? item?.owner?.avatar
                                : "/avatar.png"
                            }
                            alt="Profile Image"
                            className="mr-2 w-10 h-10 rounded-full object-cover"
                          />
                          {item?.owner?.fullName}
                        </p>
                        <p className="text-sm text-gray-600 ">
                          <time
                            dateTime={handleDate(item?.createdAt)}
                            title={handleDate(item?.createdAt)}
                          >
                            {handleDate(item?.createdAt)}
                          </time>
                        </p>
                      </div>
                      {/* Dropdown menu */}
                      {authUser?.data?._id == item?.owner?._id && (
                        <div className="dropdown dropdown-top dropdown-end mx-20 ">
                          <div
                            tabIndex={0}
                            role="button"
                            className="btn bg-transparent border-none hover:bg-blue-600 hover:text-white "
                          >
                            <EllipsisVertical />
                          </div>
                          <ul
                            tabIndex={0}
                            className="dropdown-content menu bg-base-100 rounded-md z-[1] w-52 p-2 shadow"
                          >
                            <li
                              onClick={() => {
                                handleClickDeleteComment(item?._id);
                              }}
                              className="hover:bg-blue-600 hover:text-white rounded-md"
                            >
                              <a>Delete Comment</a>
                            </li>
                          </ul>
                        </div>
                      )}
                    </footer>
                    <p className="text-gray-500  break-words">
                      {item?.content}
                    </p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comments;
