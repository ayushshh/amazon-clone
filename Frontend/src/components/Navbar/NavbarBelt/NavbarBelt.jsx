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
                        <div className="absolute top-[52px] right-0 w-[220px] bg-white text-black shadow-[0_2px_10px_rgba(0,0,0,0.2)] rounded-[4px] z-50 py-3 text-[13px]">

                            {!currentUser ? (
                                /* ── Logged-out panel ── */
                                <>
                                    <div className="px-[14px] pb-[12px] text-center">
                                        <p className="text-[13px] mb-[8px]">
                                            <span className="font-bold">Hello, </span>sign in for the best experience
                                        </p>
                                        <Link
                                            to="/signin"
                                            onClick={() => setDropdownOpen(false)}
                                            className="block w-full text-center py-[5px] px-[10px] text-[13px] font-normal rounded-[3px] border no-underline text-black bg-gradient-to-b from-[#f7dfa5] to-[#f0c14b] border-[#a88734] shadow-[0_1px_0_rgba(255,255,255,.4)_inset] hover:from-[#f5d78e] hover:to-[#e9b920] transition-all"
                                        >
                                            Sign in
                                        </Link>
                                        <p className="text-[12px] mt-[8px]">
                                            New customer?{' '}
                                            <Link
                                                to="/signup"
                                                onClick={() => setDropdownOpen(false)}
                                                className="text-[#007185] hover:text-[#c7511f] hover:underline no-underline font-bold"
                                            >
                                                Start here
                                            </Link>
                                        </p>
                                    </div>
                                    <div className="border-t border-[#e7e7e7] mx-[14px]" />
                                    <div className="grid grid-cols-2 gap-x-[14px] pt-[10px] px-[14px]">
                                        <div>
                                            <p className="font-bold text-[12px] mb-[4px]">Trending</p>
                                            <a href="#" className="block text-[12px] text-[#333] hover:text-[#c7511f] hover:underline py-[2px]">Best Sellers</a>
                                            <a href="#" className="block text-[12px] text-[#333] hover:text-[#c7511f] hover:underline py-[2px]">New Releases</a>
                                        </div>
                                        <div>
                                            <p className="font-bold text-[12px] mb-[4px]">Digital Content</p>
                                            <a href="#" className="block text-[12px] text-[#333] hover:text-[#c7511f] hover:underline py-[2px]">Prime Video</a>
                                            <a href="#" className="block text-[12px] text-[#333] hover:text-[#c7511f] hover:underline py-[2px]">Amazon Music</a>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                /* ── Logged-in panel ── */
                                <>
                                    <div className="px-[14px] pb-[10px] border-b border-[#e7e7e7]">
                                        <p className="text-[13px] font-bold leading-tight">
                                            Hello, {currentUser.name.split(' ')[0]}
                                        </p>
                                        <p className="text-[11px] text-[#555]">{currentUser.username}</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-x-[14px] pt-[10px] px-[14px]">
                                        <div>
                                            <p className="font-bold text-[12px] mb-[4px]">Account</p>
                                            <a href="#" className="block text-[12px] text-[#333] hover:text-[#c7511f] hover:underline py-[2px]">Your Account</a>
                                            <a href="#" className="block text-[12px] text-[#333] hover:text-[#c7511f] hover:underline py-[2px]">Your Orders</a>
                                            <a href="#" className="block text-[12px] text-[#333] hover:text-[#c7511f] hover:underline py-[2px]">Your Wishlist</a>
                                        </div>
                                        <div>
                                            <p className="font-bold text-[12px] mb-[4px]">Shopping</p>
                                            <Link
                                                to="/cart"
                                                onClick={() => setDropdownOpen(false)}
                                                className="block text-[12px] text-[#333] hover:text-[#c7511f] hover:underline py-[2px] no-underline"
                                            >Your Cart</Link>
                                            <a href="#" className="block text-[12px] text-[#333] hover:text-[#c7511f] hover:underline py-[2px]">Buy Again</a>
                                        </div>
                                    </div>
                                    <div className="border-t border-[#e7e7e7] mx-[14px] mt-[8px]" />
                                    <button
                                        onClick={handleSignOut}
                                        className="w-full text-left px-[14px] py-[8px] text-[13px] text-[#333] hover:text-[#c7511f] hover:bg-[#f0f2f2] transition-colors"
                                    >
                                        Sign Out
                                    </button>
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