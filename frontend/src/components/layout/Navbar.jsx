import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";
import { Link, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { Menu } from "lucide-react";
const Navbar = () => {
  const { data: authUser } = useQuery({ queryKey: ["authUser"] });
  const queryClient = useQueryClient();

  // const { data: notifications } = useQuery({
  // 	queryKey: ["notifications"],
  // 	queryFn: async () => axiosInstance.get("/notifications"),
  // 	enabled: !!authUser,
  // });

  // const { data: connectionRequests } = useQuery({
  // 	queryKey: ["connectionRequests"],
  // 	queryFn: async () => axiosInstance.get("/connections/requests"),
  // 	enabled: !!authUser,
  // });
  const navigate = useNavigate();
  const { mutate: logout } = useMutation({
    mutationFn: () => axiosInstance.post("/users/logout"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
      location.reload();
    },
  });

  // const unreadNotificationCount = notifications?.data.filter((notif) => !notif.read).length;
  // const unreadConnectionRequestsCount = connectionRequests?.data?.length;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <img
                className="h-8 rounded"
                src="/small-logo.png"
                alt="Rent Property"
              />
            </Link>
          </div>
          <div className="flex items-center gap-2 md:gap-6">
            {authUser ? (
              <div className="flex justify-end gap-3 items-center">
                {authUser?.data?.role == "user" && (
                  <Link
                    to="/admin/dashboard"
                    className="btn ptn-primary bg-blue-600 text-white mr-2 hover:bg-white hover:text-blue-600 hover:border-blue-600"
                  >
                    Become A Seller
                  </Link>
                )}
                <button
                  className="flex items-center space-x-1 text-sm text-gray-600 hover:text-blue-600"
                  onClick={() => logout()}
                >
                  <LogOut size={20} />
                  <span className="hidden font-semibold md:inline">Logout</span>
                </button>

                <div className="dropdown dropdown-bottom dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className=" btn h-9 min-h-9 w-9 min-w-9 bg-transparent border-0 shadow-none hover:bg-blue-600 hover:text-white p-0 m-0"
                  >
                    <Menu className=" p-0 m-0 " />
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow mt-4"
                  >
                    <li
                      className="hover:bg-blue-600 rounded-lg hover:text-white"
                      onClick={() => navigate("/wishlist")}
                    >
                      <a>Wishlist</a>
                    </li>
                    <li
                      className="hover:bg-blue-600 rounded-lg hover:text-white"
                      onClick={() => navigate("/messenger")}
                    >
                      <a>Messages</a>
                    </li>
                    <li>
                      <Link
                        to={`/profile/${authUser.data.username}`}
                        className="hover:bg-blue-600 rounded-lg hover:text-white"
                      >
                        Profile
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <>
                <Link to="/login" className="btn btn-ghost">
                  Sign In
                </Link>
                <Link to="/signup" className="btn btn-primary">
                  Join now
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
