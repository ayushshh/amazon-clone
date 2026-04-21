import React from 'react';

const TODAYS_DEALS = [
  {
    img: "https://m.media-amazon.com/images/I/713G7c7zwgL._AC_SY200_.jpg",
    discount: "Up to 10% off",
    label: "Limited Time Deal",
    desc: "Rolling comfort chair"
  },
  {
    img: "https://m.media-amazon.com/images/I/61vWhvy+11L._AC_SY200_.jpg",
    discount: "Up to 25% off",
    label: "Deal of the Day",
    desc: "Premium Handkerchiefs"
  },
  {
    img: "https://m.media-amazon.com/images/I/71CEv09j+HL._SX160_QL100_AC_SCLZZZZZZZ_.jpg",
    discount: "Up to 30% off",
    label: "Limited Time Deal",
    desc: "Samsung Galaxy S26 (256GB) - Marble Gray"
  },
  {
    img: "https://m.media-amazon.com/images/I/616mnp2HZ7L._SX160_QL100_AC_SCLZZZZZZZ_.jpg",
    discount: "Up to 15% off",
    label: "Limited Time Deal",
    desc: "IQOO 15R(12GB RAM,256GB Storage)"
  },
  {
    img: "https://m.media-amazon.com/images/I/41SCO-fEVzL._AC_SY200_.jpg",
    discount: "Up to 20% off",
    label: "Deal of the Day",
    desc: "Marshall Woburn III Wireless Speaker"
  },
  {
    img: "https://m.media-amazon.com/images/I/71eX66ytH+L._AC_UY327_FMwebp_QL65_.jpg",
    discount: "Up to 35% off",
    label: "Limited Time Deal",
    desc: "Apple 2026 MacBook Air 13.6-inch M3"
  },
  {
    img: "https://m.media-amazon.com/images/I/61o7EzoRpBL._AC_UY327_FMwebp_QL65_.jpg",
    discount: "Up to 18% off",
    label: "Limited Time Deal",
    desc: "Apple AirPods Pro (3rd Gen)"
  },
  {
    img: "https://m.media-amazon.com/images/I/81sqQZ-AOwL._AC_UY327_FMwebp_QL65_.jpg",
    discount: "Up to 12% off",
    label: "Limited Time Deal",
    desc: "Leader Beast 26T Mountain Cycle "
  }
];

export const TODAYS_OFFERS = [
  {
    img: "https://m.media-amazon.com/images/I/61bg7ue2QwL._AC_UL480_FMwebp_QL65_.jpg",
    discount: "Up to 55% off",
    label: "Offer",
    desc: "LG 655 L Frost-Free Smart Inverter Double Door Side-By-Side Refrigerator"
  },
  {
    img: "https://m.media-amazon.com/images/I/41BJCIurt6L._AC_UL480_FMwebp_QL65_.jpg",
    discount: "Up to 45% off",
    label: "Limited Offer",
    desc: "Voltas 243V Vectra Elite 2 ton 3 star inverter Split AC"
  },
  {
    img: "https://m.media-amazon.com/images/I/61EQi2SUXDL._AC_UL480_FMwebp_QL65_.jpg",
    discount: "Up to 30% off",
    label: "Special Offer",
    desc: "Samsung Eco Bubble Technology, Digital Washing Machine"
  },
  {
    img: "https://m.media-amazon.com/images/I/81bj+66bFhL._AC_UL480_FMwebp_QL65_.jpg",
    discount: "Up to 25% off",
    label: "Limited Time Offer",
    desc: "LG 32 L Convection Microwave Oven "
  },
  {
    img: "https://m.media-amazon.com/images/I/81Tib6mb8eL._AC_UY327_FMwebp_QL65_.jpg",
    discount: "Up to 20% off",
    label: "Offer",
    desc: "Canon EOS R100 Mirrorless Camera"
  },
  {
    img: "https://m.media-amazon.com/images/I/61FfgEFs1iL._AC_UL480_FMwebp_QL65_.jpg",
    discount: "Up to 50% off",
    label: "Limited Offer",
    desc: "Philips OneBlade Hybrid Trimmer"
  },
  {
    img: "https://m.media-amazon.com/images/I/713JnydHQ2L._AC_UY327_FMwebp_QL65_.jpg",
    discount: "Up to 40% off",
    label: "Offer",
    desc: "Watch Series 11 GPS 46mm Jet Black Aluminium Case with Black Sport Band - M/L"
  },
  {
    img: "https://m.media-amazon.com/images/I/71+beb9IXyL._AC_UY327_FMwebp_QL65_.jpg",
    discount: "Up to 35% off",
    label: "Special Offer",
    desc: "ROG Strix SCAR 18,Intel Core Ultra 9 275HX Gaming Laptop"
  }
];

const DealItem = ({ img, discount, label, desc }) => (
  <div className="flex flex-shrink-0 cursor-pointer flex-col w-[17%] min-w-[180px] box-border p-[5px] hover:shadow-lg transition-shadow duration-300">
    {/* Product Image Container */}
    <div className="bg-[#f7f7f7] w-full h-[200px] flex items-center justify-center rounded-sm overflow-hidden">
      <img className="max-h-[90%] max-w-[90%] object-contain" src={img} alt="deal" />
    </div>
    
    {/* Product Info */}
    <div className="flex flex-col w-full mt-3">
      <div className="flex gap-[8px] items-center">
        <span className="py-[4px] px-[6px] bg-[#CC0C39] text-[12px] font-bold rounded-[2px] text-white">
          {discount}
        </span>
        <span className="text-[#CC0C39] text-[12px] font-bold">{label}</span>
      </div>
      <div className="text-[13px] text-[#0f1111] mt-1 line-clamp-2 leading-tight">
        {desc}
      </div>
    </div>
  </div>
);

const HomeDetails = () => {
  return (
    <div className="w-full px-[20px] py-[20px] gap-[20px] flex flex-col box-border bg-[#eaeded]">

      {/* ---- Section 1: Today's Deals ---- */}
      <div className="w-full box-border p-[20px] bg-white shadow-sm">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-[21px] font-bold">Today's Deals</h2>
          <span className="text-[#007185] text-[14px] hover:text-[#c7511f] hover:underline cursor-pointer">
            See all deals
          </span>
        </div>
        <div className="flex w-full gap-[15px] overflow-x-auto pb-4 scroll-smooth" style={{ scrollbarWidth: 'thin' }}>
          {TODAYS_DEALS.map((item, i) => (
            <DealItem key={`deal-${i}`} {...item} />
          ))}
        </div>
      </div>

      {/* ---- Section 2: Today's Offer ---- */}
      <div className="w-full box-border p-[20px] bg-white shadow-sm">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-[21px] font-bold">Today's Offers</h2>
          <span className="text-[#007185] text-[14px] hover:text-[#c7511f] hover:underline cursor-pointer">
            See all offers
          </span>
        </div>
        <div className="flex w-full gap-[15px] overflow-x-auto pb-4 scroll-smooth" style={{ scrollbarWidth: 'thin' }}>
          {TODAYS_OFFERS.map((item, i) => (
            <DealItem key={`offer-${i}`} {...item} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default HomeDetails;