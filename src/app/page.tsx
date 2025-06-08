


import FetchSkips from "@/components/fetchSkips";


export default  function Home() {
  
     return(
      <main>
        <div className="flex items-center  justify-center flex-col gap-2 mb-8">
        <h1 className="mb-2 text-xl md:text-2xl">
          Choose Your Skip Size
        </h1>
        
        <span>
          Select the skip size that best suits your needs
        </span>
        </div>
        <div className="">
          <FetchSkips />
  
        </div>
      </main>
     
    
  );
}
