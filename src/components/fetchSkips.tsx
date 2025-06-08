'use client';
import  { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function FetchSkips() {
const [skips, setSkips] = useState<any[]>([]);
  const [loading,setLoading] = useState(true);
  const router = useRouter();

const Image = (size:number) => {
  if (size === 4) {
    return "/4YardSkip.png";
  }
 
  if (size === 6) {
    return "/6YardSkip.png";
  }
  if (size === 8) {
    return "/8YardSkip.png";
  }
  if (size === 10) {
    return "/10YardSkip.png";
  } 
  if (size === 12) {
    return "/12YardSkip.png";
  }
  if (size === 14) {
    return "/14YardSkip.png";
  }
  if (size === 16) {
    return "/16YardSkip.png";
  }
  if (size === 20) {
    return "/20YardSkip.png";
  }
  if (size === 40) {
    return "/40YardSkip.png";
  }
}
const getPrice = (size:number) => {
  switch (size) {
    case 4:
      return 211;
      case 5:
        return 241;
        case 6:
          return 264;
    case 8:
      return 295;
      case 10:
        return 356;
        case 12:
          return 390;
        case 14:
          return 434;
        case 16:
          return 510;
        case 20:
          return 802;
        case 40:
          return 877;
    default:
      return "N/A";
         }
};
  useEffect(() => {
    fetch("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      setSkips(data);
      setLoading(false);
    });
    // .catch(()=> setLoading(false));
  }, []);
  return (

    <div className="">
      <div className="">
        <div className="">
          {/* <h2 className="text-lg font-bold mb-2">Available Skips in Lowestoft (NR32)</h2> */}
            {loading? (
              <p>Loading...</p>
            ): skips.length === 0 ? (
              <p>No skips found</p>
            ): (
              <ul className="grid gap-4  mb-6 sm:grid-cols-2 lg:grid-cols-3 ">
                {skips.map((skip) => (
                  <li key={skip.id} className="bg-white  rounded-xl  shadow-sm py-8 flex flex-col items-center border border-b-gray-400">
                    <img
                    src={(Image(skip.size))}
                    alt={`Skip size ${skip.size}`}
                    className="w-full vh-[24px]  mb-3 rounded-xl p-0.5"
                    />
                    {/* <strong>{skip.name}</strong> -{skip.sized} - £{skip.price} */}
                          {/* <div>
                            <strong>ID:</strong> {skip.id}
                            </div> */}
                            
      <div className="">
        <strong>Size:</strong> {skip.size} yd³
        </div>

      <div className="">
        <strong>Hire Period (days):</strong> {skip.hire_period_days}
        </div>

      {/* <div>
        <strong>Price before VAT:</strong> £{skip.price_before_vat}
        </div>

      <div>
        <strong>VAT:</strong> {skip.vat}%
        </div> */}
        <div>
        <strong>Price:</strong> £
        {getPrice(skip.size)}
        </div>
      <div>
        <strong>Allowed on Road:</strong> {skip.allowed_on_road ? "Yes" : "No"}
        </div>

      <div>
        <strong>Allows Heavy Waste:</strong> {skip.allows_heavy_waste ? "Yes" : "No"}
        </div>

        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 cursor-pointer hover:bg-blue-600 transition-colors"
       
            onClick={() => router.push(`/skipPlace/${skip.id}`)} 
            >
            Select This Skip
        </button>

      {/* <div>
        <strong>Created At:</strong> {new Date(skip.created_at).toLocaleDateString()}
        </div> */}

      {/* <div>
        <strong>Updated At:</strong> {new Date(skip.updated_at).toLocaleDateString()}
        </div> */}
                  </li>
                ))}
              </ul>
            )}
          
        </div>
       
        </div>
        <footer className="flex  sm:absolute   text-center bottom-0 text-gray-500  pt-4 pb-2 bg-gray-100">
          <div>
            <p className="text-sm  ">
              Imagery and information shown throuhgout this website may not reflect 
              the exact shape or size specification, colours may vary, options and/or accessories
               may be featured at additional cost.
            </p>
            <span>
            
            </span>
          </div>
        </footer>
        </div>
        
        )
     } 