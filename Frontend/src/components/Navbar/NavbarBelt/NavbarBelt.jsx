import React, { useState, useEffect, useRef } from 'react';
import amazonLogo from '../../../assets/amazonLogo.png';
import india from '../../../assets/india.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavbarBelt = () => {
    const cartItems = useSelector((state) => state.cart.items);

    // ── Auth state (localStorage-based — swap with backend call later) ──
    const [currentUser, setCurrentUser] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const stored = localStorage.getItem('amazon_current_user');
        if (stored) setCurrentUser(JSON.parse(stored));
    }, []);

    const handleSignOut = () => {
        localStorage.removeItem('amazon_current_user');
        setCurrentUser(null);
        setDropdownOpen(false);
    };

    // Close dropdown on outside click
    useEffect(() => {
        const handler = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target))
                setDropdownOpen(false);
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    return (
        <div className="bg-[#131921] flex items-center w-full h-[60px] py-[5px] px-[10px] text-white sticky top-0 z-50">
            
            {/* 1. Left Section: Logo and Location */}
            <div className="flex items-center flex-shrink-0">
                {/* Logo */}
                <Link to={'/'} className="flex items-center p-[6px] border border-transparent hover:border-white hover:rounded-[2px] h-[50px]">
                    <img src={amazonLogo} alt="amazon-logo" className="w-[95px] object-contain mt-2" />
                    <span className="text-[14px] mt-3 ml-[1px]">.in</span>
                </Link>

                {/* Location */}
                <div className="flex items-center ml-[5px] p-[8px] border border-transparent hover:border-white hover:rounded-[2px] cursor-pointer h-[50px]">
                    <div className="flex items-center mb-[-5px]">
                        <LocationOnOutlinedIcon sx={{ fontSize: '18px' }} />
                    </div>
                    <div className="flex flex-col ml-1">
                        <span className="text-[12px] text-[#ccc] font-normal leading-none">Delivering to Pune</span>
                        <span className="text-[14px] font-bold leading-tight">Update location</span>
                    </div>
                </div>
            </div>

            {/* 2. Center Section: Search Box (Flexible width) */}
            <div className="flex flex-grow items-center h-[40px] mx-[15px]">
                <div className="flex w-full h-full rounded-[4px] overflow-hidden focus-within:ring-[3px] focus-within:ring-[#f3a847]">
                    {/* Category Dropdown */}
                    <div className="flex items-center bg-[#f3f3f3] text-[#555] px-3 border-r border-[#ddd] cursor-pointer hover:bg-[#dadada]">
                        <span className="text-[12px]">All</span>
                        <ArrowDropDownOutlinedIcon sx={{ fontSize: '18px' }} />
                    </div>
                    
                    {/* Input Field */}
                    <input
                        type="text"
                        placeholder="Search Amazon.in"
                        className="flex-grow px-3 bg-white text-gray-800 text-[15px] focus:outline-none"
                    />
                    
                    {/* Search Button */}
                    <div className="bg-[#febd69] hover:bg-[#f3a847] cursor-pointer w-[45px] flex items-center justify-center">
                        <SearchIcon sx={{ fontSize: '30px', color: '#333' }} />
                    </div>
                </div>
            </div>

            {/* 3. Right Section: Nav Items */}
            <div className="flex items-center flex-shrink-0 gap-[2px]">
                
                {/* Language Selection */}
                <div className="flex items-center p-[8px] border border-transparent hover:border-white hover:rounded-[2px] cursor-pointer h-[50px]">
                    <img src={india} alt="india" className="w-5 h-4 object-contain mr-1" />
                    <span className="text-[14px] font-bold flex items-center">
                        EN <ArrowDropDownOutlinedIcon sx={{ fontSize: '16px', color: '#ccc' }} />
                    </span>
                </div>

                {/* Account & Lists */}
                <div
                    ref={dropdownRef}
                    className="relative flex flex-col justify-center p-[8px] border border-transparent hover:border-white hover:rounded-[2px] cursor-pointer h-[50px]"
                    onClick={() => setDropdownOpen((o) => !o)}
                >
                    <span className="text-[12px] leading-none">
                        {currentUser ? `Hello, ${currentUser.name.split(' ')[0]}` : 'Hello, sign in'}
                    </span>
                    <span className="text-[14px] font-bold flex items-center leading-none mt-1">
                        Account &amp; Lists <ArrowDropDownOutlinedIcon sx={{ fontSize: '16px', color: '#ccc' }} />
                    </span>

                    {/* Dropdown */}
                    {dropdownOpen && (
                        <div className="absolute top-[50px] right-0 w-[200px] bg-white text-black shadow-xl rounded-[4px] z-50 py-2 text-[13px]">
                            {currentUser ? (
                                <>
                                    <div className="px-4 py-2 text-[12px] text-gray-500 border-b">
                                        Signed in as <strong>{currentUser.username}</strong>
                                    </div>
                                    <div
                                        className="px-4 py-2 hover:bg-[#f0f2f2] cursor-pointer"
                                        onClick={handleSignOut}
                                    >
                                        Sign Out
                                    </div>
                                </>
                            ) : (
                                <>
                                    <Link to="/signin" className="block px-4 py-2 hover:bg-[#f0f2f2] no-underline text-black">
                                        Sign In
                                    </Link>
                                    <Link to="/signup" className="block px-4 py-2 hover:bg-[#f0f2f2] no-underline text-black">
                                        Create Account
                                    </Link>
                                </>
                            )}
                        </div>
                    )}
                </div>

                {/* Returns & Orders */}
                <div className="flex flex-col justify-center p-[8px] border border-transparent hover:border-white hover:rounded-[2px] cursor-pointer h-[50px]">
                    <span className="text-[12px] leading-none">Returns</span>
                    <span className="text-[14px] font-bold leading-none mt-1">& Orders</span>
                </div>

                {/* Cart */}
                <Link to={'/cart'} className="flex items-center p-[8px] border border-transparent hover:border-white hover:rounded-[2px] cursor-pointer h-[50px] relative no-underline text-white">
                    <div className="relative">
                        <span className="absolute left-[13px] top-[-5px] text-[#f08804] font-bold text-[16px] w-[20px] text-center">
                            {cartItems.length}
                        </span>
                        <ShoppingCartOutlinedIcon sx={{ fontSize: '35px' }} />
                    </div>
                    <span className="text-[14px] font-bold self-end mb-1 ml-1">Cart</span>
                </Link>

            </div>
        </div>
    );
};

export default NavbarBelt;