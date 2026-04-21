import React from 'react';

const HomeRecommendations = () => {
  return (
    // Container Background - mimics Amazon's gray backdrop
    <div className="bg-[#E3E6E6] p-5 max-w-[1500px] mx-auto font-sans">

      {/* --- Top Row: 4-Column Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-5">

        {/* Card 1: Main Image + Thumbnails */}
        <div className="bg-white p-5 flex flex-col relative">
          <h2 className="text-[21px] font-bold mt-0 mb-[15px] leading-snug text-[#0f1111]">
            Up to 60% off | Bestsellers from women-led brands
          </h2>
          <div className="grow flex items-center justify-center mb-2.5">
            <img src="https://m.media-amazon.com/images/I/71QED8-OFhL._AC_SY175_.jpg" alt="Organizer" className="max-w-full max-h-[250px] object-contain" />
          </div>
          <div className="mb-2.5">
            <span className="text-lg text-[#B12704] mr-1.5">₹263.00</span>
            <span className="text-xs text-[#565959] line-through">M.R.P: ₹1,200.00</span>
          </div>
          <div className="flex gap-2.5">
            <img src="https://m.media-amazon.com/images/I/71QED8-OFhL._AC_SY175_.jpg" alt="thumb1" className="w-[50px] h-[50px] border-2 border-[#007185] shadow-[0_0_5px_rgba(0,113,133,0.5)] rounded cursor-pointer object-cover" />
            <img src="https://m.media-amazon.com/images/I/31Wd-Zi+IUL._AC_SY175_.jpg" alt="thumb2" className="w-[50px] h-[50px] border border-[#d5d9d9] rounded cursor-pointer object-cover" />
            <img src="https://m.media-amazon.com/images/I/81-qrPlQOCL._AC_SY175_.jpg" alt="thumb3" className="w-[50px] h-[50px] border border-[#d5d9d9] rounded cursor-pointer object-cover" />
            <img src="https://m.media-amazon.com/images/I/51m+q6k1lSL._AC_SY175_.jpg" alt="thumb4" className="w-[50px] h-[50px] border border-[#d5d9d9] rounded cursor-pointer object-cover" />
          </div>
        </div>

        {/* Card 2: 2x2 Grid */}
        <div className="bg-white p-5 flex flex-col relative">
          <h2 className="text-[21px] font-bold mt-0 mb-[15px] leading-snug text-[#0f1111]">
            Best Sellers in Clothing & Accessories
          </h2>
          <div className="grid grid-cols-2 gap-[15px] grow">
            <img src="https://m.media-amazon.com/images/I/71I53evweVL._AC_SY170_.jpg" alt="Clothing 1" className="h-[120px] w-full object-contain" />
            <img src="https://m.media-amazon.com/images/I/71eUwDk8z+L._AC_SY170_.jpg" alt="Clothing 2" className="h-[120px] w-full object-contain" />
            <img src="https://m.media-amazon.com/images/I/713n+TxyfCL._AC_SY170_.jpg" alt="Clothing 3" className="h-[120px] w-full object-contain" />
            <img src="https://m.media-amazon.com/images/I/51xOEh5DKYL._AC_SY170_.jpg" alt="Clothing 4" className="h-[120px] w-full object-contain" />
          </div>
        </div>

        {/* Card 3: 2x2 Grid with Link */}
        <div className="bg-white p-5 flex flex-col relative">
          <h2 className="text-[21px] font-bold mt-0 mb-[15px] leading-snug text-[#0f1111]">
            Customers' Most-Loved Fashion for you
          </h2>
          <div className="grid grid-cols-2 gap-[15px] grow">
            <img src="https://m.media-amazon.com/images/I/71Zmqrerm3L._AC_SY145_.jpg" alt="Shoes 1" className="h-[120px] w-full object-contain" />
            <img src="https://m.media-amazon.com/images/I/61irmRn+6LL._AC_SY145_.jpg" alt="Clothing 1" className="h-[120px] w-full object-contain" />
            <img src="https://m.media-amazon.com/images/I/812vmmHIwvL._AC_SY145_.jpg" alt="Shoes 2" className="h-[120px] w-full object-contain" />
            <img src="https://m.media-amazon.com/images/I/512WmhRAGgL._AC_SY145_.jpg" alt="Shoes 3" className="h-[120px] w-full object-contain" />
          </div>
          <a href="#" className="text-[#007185] no-underline text-[13px] mt-[15px] hover:text-[#C45500] hover:underline">
            Explore more
          </a>
        </div>

        {/* Card 4: Main Image + Thumbnails */}
        <div className="bg-white p-5 flex flex-col relative">
          <h2 className="text-[21px] font-bold mt-0 mb-[15px] leading-snug text-[#0f1111]">
            Up to 80% off | Latest collections from Indian artis...
          </h2>
          <div className="grow flex items-center justify-center mb-2.5">
            <img src="https://m.media-amazon.com/images/I/913irsXY8nL._AC_SY175_.jpg" alt="Coasters" className="max-w-full max-h-[250px] object-contain" />
          </div>
          <div className="mb-2.5">
            <span className="text-lg text-[#B12704] mr-1.5">₹944.00</span>
            <span className="text-xs text-[#565959] line-through">M.R.P: ₹1,015.00</span>
          </div>
          <div className="flex gap-2.5">
            <img src="https://m.media-amazon.com/images/I/913irsXY8nL._AC_SY175_.jpg" alt="thumb1" className="w-[50px] h-[50px] border-2 border-[#007185] shadow-[0_0_5px_rgba(0,113,133,0.5)] rounded cursor-pointer object-cover" />
            <img src="https://m.media-amazon.com/images/I/71uccWpalOL._AC_SY175_.jpg" alt="thumb2" className="w-[50px] h-[50px] border border-[#d5d9d9] rounded cursor-pointer object-cover" />
            <img src="https://m.media-amazon.com/images/I/81BElxcnowL._AC_SY175_.jpg" alt="thumb3" className="w-[50px] h-[50px] border border-[#d5d9d9] rounded cursor-pointer object-cover" />
            <img src="https://m.media-amazon.com/images/I/71TA78cJRwL._AC_SY175_.jpg" alt="thumb4" className="w-[50px] h-[50px] border border-[#d5d9d9] rounded cursor-pointer object-cover" />
          </div>
        </div>

      </div>

      {/* --- Bottom Row: Horizontal Scroll --- */}
      <div className="bg-white p-5 overflow-hidden">
        <div className="flex items-baseline gap-[15px] mb-[15px]">
          <h2 className="text-[21px] m-0 text-[#0f1111] font-bold">
            Up to 75% off | Curated products | Small Businesses
          </h2>
          <a href="#" className="text-[#007185] no-underline text-[13px] hover:text-[#C45500] hover:underline">
            See more
          </a>
        </div>

        {/* Scroll Container (Using arbitrary variants for custom scrollbar styling) */}
        <div className="flex gap-5 overflow-x-auto pb-[15px] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:bg-[#d5d9d9] [&::-webkit-scrollbar-thumb]:rounded">
          {["https://m.media-amazon.com/images/I/612T2u+2fqL._AC_SY200_.jpg", "https://m.media-amazon.com/images/I/818xVwc3sKL._AC_SY200_.jpg", "https://m.media-amazon.com/images/I/817SwSOr4nL._AC_SY200_.jpg", "https://m.media-amazon.com/images/I/71bH1HvCepL._AC_SY200_.jpg", "https://m.media-amazon.com/images/I/81-EhYMZ2oL._AC_SY200_.jpg", "https://m.media-amazon.com/images/I/71B7FIdZtkL._AC_SY200_.jpg", "https://m.media-amazon.com/images/I/81QUDtyCyeL._AC_SY200_.jpg"].map((item, key) => (
            <img
              key={key}
              src={` ${item}`}
              alt={`Decor ${item}`}
              className="flex-none w-[200px] h-[200px] object-cover cursor-pointer"
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default HomeRecommendations;