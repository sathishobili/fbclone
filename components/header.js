import Image from 'next/image'
import { BellIcon , ChatIcon , ChevronIcon , HomeIcon , UserGroupIcon , ViewGridIcon ,} from '@heroicons/react/solid'
import { ChevronDownIcon, FlagIcon , PlayIcon , SearchIcon , ShoppingBagIcon} from '@heroicons/react/outline'

import HeaderIcon from "./headerIcon"
const Header = () => {
  return (
    <div className="flex  items-center sticky top-0 z-50 bg-white p-2 md:px-5 shadow-md ">
      <div className="flex items-center">
        <Image src="https://links.papareact.com/5me" width="40" height="40" layout="fixed" alt="description of image" ></Image>
        <div className="flex items-center rounded-full bg-gray-100 p-2 ml-2">
           <SearchIcon className="h-6"/>
          <input type="text" className="flex hidden sm:inline-flex items-center ml-2  bg-transparent outline-none" placeholder="Search facebook"></input></div>
    </div>
      <div className="flex  justify-center flex-grow ">

        <div className="flex space-x-6 md:space-x-2">
        
           <HeaderIcon active Icon={HomeIcon}  />
        <HeaderIcon Icon={FlagIcon}  />
        <HeaderIcon Icon={PlayIcon}  />
        <HeaderIcon Icon={ShoppingBagIcon}  />
         <HeaderIcon Icon={UserGroupIcon}  />
        
        
        </div> 
       
    </div>
      <div className="flex items-center  justify-end">
        <p className="pr-2">Sathish Reddy </p>
         <ViewGridIcon className="hidden xl:inline-flex p-2 m-2 w-10 h-10 bg-gray-200 rounded-full text-gray-70 cursor-pointer hover:bg-gray-300"  />
        {/* <chatIcon className="hidden xl:inline-flex pr-2 w-10 h-10 bg-gray-200 rounded-full text-gray-70 cursor-pointer hover: bg-gray-300"  /> */}
        <BellIcon className="hidden xl:inline-flex p-2 m-2  w-10 h-10 bg-gray-200 rounded-full text-gray-70 cursor-pointer hover:bg-gray-300" />
        <ChevronDownIcon className="hidden xl:inline-flex p-2  m-2  w-10 h-10 bg-gray-200 rounded-full text-gray-70 cursor-pointer hover:bg-gray-300"  />
    </div>
      </div>
  )
}

export default Header