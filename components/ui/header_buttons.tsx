import { BsFillRecord2Fill, BsCalendarPlus } from "react-icons/bs";
import { LuScissorsLineDashed } from "react-icons/lu";
import { HiSignal } from "react-icons/hi2";
import { IoShareOutline } from "react-icons/io5";

export const HeaderButtons = () => {
  // A common style for the circular icon holders to avoid repetition
  const iconCircleStyle = "flex h-12 w-12 items-center justify-center rounded-full transition-colors";
  
  // A common style for the icons themselves
  const iconStyle = "text-xl text-white";

  return (
    <div className="flex flex-row justify-center gap-8 p-4  mt-20">
      {/* Record Button */}
      <button className="flex flex-col items-center gap-2">
        <div className={`${iconCircleStyle} bg-red-900/50 hover:bg-red-900/40 hover:cursor-pointer`}>
          <BsFillRecord2Fill className="text-xl text-red-500" />
        </div>
        <span className="font-medium">Record</span>
      </button>

      {/* Edit Button */}
      <button className="flex flex-col items-center gap-2">
        <div className={`${iconCircleStyle} bg-zinc-800 hover:bg-zinc-700 hover:cursor-pointer`}>
          <LuScissorsLineDashed className={iconStyle} />
        </div>
        <span className="font-medium">Edit</span>
      </button>

      {/* Go live Button */}
      <button className="flex flex-col items-center gap-2">
        <div className={`${iconCircleStyle} bg-zinc-800 hover:bg-zinc-700 hover:cursor-pointer`}>
          <HiSignal className={iconStyle} />
        </div>
        <span className="font-medium">Go live</span>
      </button>

      {/* Plan Button */}
      <button className="flex flex-col items-center gap-2">
        <div className={`${iconCircleStyle} bg-zinc-800 hover:bg-zinc-700 hover:cursor-pointer`}>
          <BsCalendarPlus className={iconStyle} />
        </div>
        <span className="font-medium">Plan</span>
      </button>

      {/* Upload Button */}
      <button className="flex flex-col items-center gap-2">
        <div className={`${iconCircleStyle} bg-zinc-800 hover:bg-zinc-700 hover:cursor-pointer`}>
          {/* Rotated the icon to point upwards */}
          <IoShareOutline className={`${iconStyle} -rotate-90`} />
        </div>
        <span className="font-medium">Upload</span>
      </button>
    </div>
  );
};