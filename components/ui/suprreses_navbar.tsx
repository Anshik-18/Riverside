import { GoHome } from "react-icons/go";
import { IoFolderOutline } from "react-icons/io5";
import { GrSchedule } from "react-icons/gr";
import { HiSignal } from "react-icons/hi2";
// import happiness from "../../public/happiness.png"

 export const SuppresesNavbar = () => {
    return(
        <div className="ml-10 h-full w-20 bg-black-500 text-white flex flex-col items-center gap-8 ">
       

            <div className="flex flex-col items-center gap-1 hover:bg-[#1D1D1D] p-2 rounded-md cursor-pointer ">
                <GoHome />
                <div className="text-sm text-gray-400" >
                  Home
                </div>
            </div>
            <div className="flex flex-col items-center gap-1 hover:bg-[#1D1D1D] p-2 rounded-md cursor-pointer">
                <IoFolderOutline />
                <div className="text-sm text-gray-400" >
                Projects
                </div>
            </div>
            <div className="flex flex-col items-center gap-1 hover:bg-[#1D1D1D] p-2 rounded-md cursor-pointer">
                <GrSchedule />
                  <div className="text-sm text-gray-400" >
                Schedule
                </div>
            </div>
                <div className="flex flex-col items-center gap-1 hover:bg-[#1D1D1D] p-2 rounded-md cursor-pointer">
                <HiSignal />
              <div className="text-sm text-gray-400" >
                Hosting
                </div>
            </div>
            {/* <div className="mt-50">
              <img src="/happiness.png" alt="Happiness icon" className="bg-white w-10 h-10" />

            </div> */}
        </div>
    )
 }