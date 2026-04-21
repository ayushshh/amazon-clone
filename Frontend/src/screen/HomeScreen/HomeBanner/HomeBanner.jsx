import React from 'react';
import homeProductData from './HomeProduct.json';

const HomeBanner = () => {
  return (
    <div className="w-full bg-[#eaeded]">

      {/* Hero Banner Image with fade-out bottom */}
      <div className="w-full overflow-hidden" style={{ maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)', WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)' }}>
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img26/Consumables/Grocery/Ramadan/Rev/Homepage_DesktopHeroTemplate_3000x1200_1._CB786892164_.jpg"
          alt="Home Banner"
          className="w-full h-[350px] object-cover object-top"
        />
      </div>

      {/* Product Cards Grid - pulled up with negative margin to overlap banner */}
      <div className="px-[20px] grid grid-cols-2 lg:grid-cols-4 gap-[20px] -mt-[160px] relative z-10 pb-[20px]">
        {homeProductData.products.map((product, index) => (
          <div key={index} className="bg-white p-[20px] flex flex-col shadow-md">
            <h2 className="text-[18px] font-bold mb-[10px]">{product.itemTitle}</h2>

            {/* 2x2 Grid inside the Card */}
            <div className="grid grid-cols-2 gap-[8px] mb-[15px]">
              {product.imgs.map((img, i) => (
                <div key={i} className="flex flex-col cursor-pointer">
                  <img src={img} alt="product" className="h-[100px] w-full object-contain" />
                  <span className="text-[11px] text-[#007185] mt-1">Explore More</span>
                </div>
              ))}
            </div>

            <span className="text-[#007185] text-[13px] font-semibold cursor-pointer hover:text-[#c7511f] hover:underline mt-auto">
              See more
            </span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default HomeBanner;