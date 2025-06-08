import GlobeAltIcon from "@heroicons/react/24/solid/GlobeAltIcon";
import Image from "next/image";
export default function Logo() {
  return (
    <div
      className=" flex flex-row items-center leading-none text-white"
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[20px]">REMWaste</p>
    </div>
    //  <div className="w-full h-auto">
    //     <Image
    //     src='/icons/logo-icon.svg'
    //     height={1000}
    //     width={1000}
    //     alt='Logo'
    //     className=" w-fit"
    //     />
    //     </div>
  );
}