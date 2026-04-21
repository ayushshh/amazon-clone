import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const NavbarBanner = () => {
    // Array of menu items as demonstrated in the video [00:12:46]
    const options = [
        { name: "Fresh" },
        { name: "Amazon miniTV" },
        { name: "Sell" },
        { name: "Best Sellers" },
        { name: "Mobiles" ,path: "/product"},
        { name: "Today's Deals" },
        { name: "Customer Service" },
        { name: "Prime" ,path: "/prime"},
        { name: "Electronics" },
        { name: "Home & Kitchen" },
        { name: "Fashion" }
    ];

    return (
        // Main Container: Amazon Dark Blue background [00:03:54]
        <div className="bg-[#232f3e] flex items-center justify-between h-[39px] px-[11px] text-white overflow-hidden">
            
            {/* Left Side: Hamburger Menu and Categories [00:03:10] */}
            <div className="flex items-center">
                {/* All Menu Button */}
                <div className="flex items-center p-[8px] cursor-pointer border border-transparent hover:border-white hover:rounded-[3px]">
                    <MenuIcon sx={{ fontSize: '24px' }} />
                    <span className="ml-[5px] text-[14px] font-bold">All</span>
                </div>

                {/* Dynamic Mapping of Options [00:13:28] */}
                <div className="flex items-center">
                    {options.map((item, index) => (
                        <Link to={item.path} 
                            key={index} 
                            className="p-[8px] text-[14px] font-medium cursor-pointer border border-transparent hover:border-white hover:rounded-[3px] whitespace-nowrap"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Right Side: Promotional Image [00:03:12] */}
            <div className="hidden lg:flex items-center cursor-pointer border border-transparent hover:border-white hover:rounded-[2px] h-[35px] p-[2px]">
                <img 
                    src="https://f.media-amazon.com/images/G/31/img19/SiddMiniTV/26MayHero/SWM_400x391._CB557661637_.jpg" 
                    alt="Amazon Banner" 
                    className="h-full object-contain"
                />
            </div>
        </div>
    );
};

export default NavbarBanner;