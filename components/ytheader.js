import {
  SearchIcon,
  VideoCameraIcon,
  ViewGridIcon,
  BellIcon,
} from "@heroicons/react/outline";
const Ytheader = () => {
  return (
    <div className="flex items-center justify-between mx-4">
      <div className="flex">
        {/* logo */}
        <img
          src="/images/yt-logo.png"
          alt="Youtube logo"
          className="h-12 w-20 my-auto"
        />
      </div>
      {/* search */}
      <div className="flex flex-grow items-center  justify-center">
        <input
          type="text"
          placeholder="Search...."
          className="py-1 px-2 border border-gray-400 h-8 w-3/5 focus:outline-none focus:border-blue-600"
        />
        <button
          type="button"
          className="bg-gray-200 h-8 px-4 border border-gray-400 border-l-0 hover:bg-gray-300 flex items-center justify-center"
        >
          <SearchIcon className="h-7 material-icons text-gray-600" />
        </button>
      </div>
      <div className="space-x-4 flex">
        {/* right side  */}
        <button className="flex items-center justify-center h-10">
          <VideoCameraIcon className="h-7 material-icons text-gray-600" />
        </button>
        <button className="flex items-center justify-center h-10">
          <ViewGridIcon className="h-7 material-icons text-gray-600" />
        </button>
        <button className="flex items-center justify-center h-10">
          <BellIcon className="h-7 material-icons text-gray-600" />
        </button>
        <button className="flex items-center justify-center h-10">
          <div className="h-8 w-8 bg-red-200 rounded-full"></div>
        </button>
      </div>
    </div>
  );
};
export default Ytheader;
