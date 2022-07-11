import {
  BeakerIcon,
  DocumentTextIcon,
  MenuIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/react";

function Header() {

  const {data: session} = useSession()

  return (
    <header className="flex items-center sticky top-0 z-99 px-5 py-3 shadow-md bg-white justify-between gap-10 z-50">
      <div className="items-center gap-1 flex">
        <MenuIcon className="h-10 w-10 p-2 hover:bg-gray-100 rounded-full stroke-1 " />
        <div className="flex items-center cursor-pointer">
          <DocumentTextIcon className="h-12 w-10 text-blue-500 hidden sm:block" />
          <h1 className="text-gray-600 text-xl ml-2 ">Docs</h1>
        </div>
      </div>
      <div className="hidden sm:flex flex-1 items-center px-1 py-1  border rounded-lg bg-gray-100 ml-4 max-w-2xl focus-within:shadow-md">
        <SearchIcon className="h-9 w-9 p-2  text-gray-500 cursor-pointer rounded-full hover:bg-gray-300" />
        <input
          className="flex-1 p-2 outline-none bg-transparent "
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="flex items-center gap-2">
        <SearchIcon className="h-9 w-9 p-2  text-gray-600 sm:hidden cursor-pointer rounded-full hover:bg-gray-300" />
        <ViewGridIcon className="h-10 w-10 p-2 text-gray-600 hover:bg-gray-100 rounded-full cursor-pointer" />

        <div>
          <img
            src={session?.user?.image}
            alt=""
            className="w-8 h-8 rounded-full flex justify-center items-center bg-indigo-500  hover:shadow-sm hover:scale-125 transition-all duration-300 border"
          />
        </div>

        <button
          onClick={signOut}
          className="text-sm font-bold text-gray-500 border p-2 rounded-md cursor-pointer hover:shadow-lg hover:text-blue-500"
        >
          Sign Out
        </button>
      </div>
    </header>
  );
}
export default Header;
