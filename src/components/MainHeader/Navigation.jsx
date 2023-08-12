import { useAuthContext } from "../../contexts/useAuthContext";

const Navigation = () => {
  const { isLoggedIn, logoutHandler } = useAuthContext();

  return (
    <nav>
      <ul className="m-0 flex list-none items-center p-0">
        {isLoggedIn && (
          <li className="m-0 ml-8">
            <a className="text-white" href="/">
              Users
            </a>
          </li>
        )}
        {isLoggedIn && (
          <li className="m-0 ml-8">
            <a className="text-white" href="/">
              Admin
            </a>
          </li>
        )}
        {isLoggedIn && (
          <li className="m-0 ml-8">
            <button
              className="cursor-pointer rounded-3xl border border-[#dd0db0] bg-[#dd0db0] px-6 py-2 text-white shadow-lg hover:text-[#f3cafb] hover:shadow-xl focus:outline-none active:text-[#f3cafb] active:shadow-xl "
              onClick={logoutHandler}
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
