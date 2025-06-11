'use client';
import { HomeIcon, LinkSlashIcon, TruckIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import  { useRouter } from "next/navigation";

export default function  SkipPlace () {
    const router = useRouter();
    return (
        
        <div className="flex flex-col items-center md:justify-center sm:grid-1 h-screen bg-gray-100">
           
            <div className="md:space-x-4 m-2">
            <button 
             onClick={() => router.push(`/skipPlace/private`)} 
            className="rounded-xl bg-gray-50 p-2 shadow-sm mb-4 hover:bg-gray-300 cursor-pointer">
            <div className="flex p-4 flex-col">
              <HomeIcon className="w-6 h-6 text-blue-600" />
                <h1 className="text-lg font-semibold text-gray-800 ml-2">Private Property</h1>
                <span>Driveway or private land</span>
            </div>
            <div className="md:truncate rounded-xl  bg-white px-4 py-8 text-center text-sm">
                <p>
                     No permit required when placed on your private property
                </p>
            </div>
        </button>

         <button 
             onClick={() => router.push(`/skipPlace/public`)} 
            className="rounded-xl bg-gray-50 p-2 shadow-sm mb-4 hover:bg-gray-300 cursor-pointer">
            <div className="flex p-4 flex-col">
              <TruckIcon className="w-6 h-6 text-blue-600" />
                <h1 className="text-lg font-semibold text-gray-800 ml-2">Public Road</h1>
                <span>Council or public property</span>
            </div>
            <div className="md:truncate rounded-xl  bg-white px-4 py-8 text-center text-sm">
                <p>
                      Permit required for placement on public roads
                </p>
            </div>
        </button>
        </div>

        <div className="flex flex-row">
        <Link
         href="/" className="mt-4 inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors"
         >
            
        
         Back
        </Link>
        <LinkSlashIcon className="w-6 h-6 text-gray-500 mt-4" />
        <Link
            href="/permitCheck"
            className="mt-4 inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors"
            >
            Next
            </Link>
            </div>
        </div>
    )
}