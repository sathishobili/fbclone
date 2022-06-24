import Ytheader from "../components/ytheader"

const  YtClone = () => {
  return (
    <div className="">
      <div className=" font-roboto bg-gray-100 ml-18">
      <div className="bg-white divide-y">
              <Ytheader></Ytheader>
      </div>
      {/* chips */}
      <div className="flex items-center px-4 py-3 space-x-3 bg-white divide-y">
        <span className="bg-gray-600 border border-gray-700 text-gray-100 rounded-full text-sm px-2 py-1  text-gray-300 shadow-inset">Action 1</span>

        <span className="bg-gray-200 border text-gray-700 border-gray-300  rounded-full text-sm px-2 py-1 shadow-inset">Action 2</span>
        <span className="bg-gray-200 border text-gray-700 border-gray-300  rounded-full text-sm px-2 py-1 shadow-inset">Action 3</span>
        <span className="bg-gray-200 border text-gray-700 border-gray-300  rounded-full text-sm px-2 py-1 shadow-inset">Action 4</span>
        <span className="bg-gray-200 border text-gray-700 border-gray-300  rounded-full text-sm px-2 py-1 shadow-inset">Action 5</span>
        <span className="bg-gray-200 border text-gray-700 border-gray-300  rounded-full text-sm px-2 py-1 shadow-inset">Action 6</span>
        <span className="bg-gray-200 border text-gray-700 border-gray-300  rounded-full text-sm px-2 py-1 shadow-inset">Action 7</span>
        <span className="bg-gray-200 border text-gray-700 border-gray-300  rounded-full text-sm px-2 py-1 shadow-inset">Action 8</span>
        <span className="bg-gray-200 border text-gray-700 border-gray-300  rounded-full text-sm px-2 py-1 shadow-inset">Action 9</span>
        <span className="bg-gray-200 border text-gray-700 border-gray-300  rounded-full text-sm px-2 py-1 shadow-inset">Action 10</span>
        <span className="bg-gray-200 border text-gray-700 border-gray-300  rounded-full text-sm px-2 py-1 shadow-inset">Action 11</span>
        <span className="bg-gray-200 border text-gray-700 border-gray-300  rounded-full text-sm px-2 py-1 shadow-inset">Action 12</span>
        <span className="bg-gray-200 border text-gray-700 border-gray-300  rounded-full text-sm px-2 py-1 shadow-inset">Action 13</span>
        <span className="bg-gray-200 border text-gray-700 border-gray-300  rounded-full text-sm px-2 py-1 shadow-inset">Action 14</span>

        </div>
        </div>
      {/* side bar */}
      <aside className="fixed top-0 bg-white w-18 h-screen">

      </aside>
      </div>
  )
}

export default YtClone