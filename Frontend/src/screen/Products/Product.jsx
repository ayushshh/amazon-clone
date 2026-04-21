import React from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarRateIcon from '@mui/icons-material/StarRate';
import productDetail from './product.json';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/actions';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const handleAddToCart = (item) => {
        toast.success("Added To Cart", { position: "bottom-right" });
        dispatch(addToCart(item));
    };

    return (
        <div className="w-full">

            {/* ── Top Category Banner ── */}
            <div className="flex shadow-[0_0_1px_#747474] h-[50px] pl-[15px] pr-[9px] gap-[25px] overflow-x-auto">
                <div className="px-[13px] flex justify-center items-center font-semibold whitespace-nowrap">
                    Electronics
                </div>
                {[
                    "Mobiles & Accessories",
                    "Laptops & Accessories",
                    "TV & Home Entertainment",
                    "Audio",
                    "Cameras",
                    "Computer Peripherals",
                    "Smart Technology",
                    "Musical Instruments",
                    "Office & Stationary"
                ].map((item, i) => (
                    <div
                        key={i}
                        className="px-[13px] flex justify-center items-center text-[12px] cursor-pointer whitespace-nowrap hover:underline hover:decoration-[#febd69] hover:decoration-[1px]"
                    >
                        {item}
                    </div>
                ))}
            </div>

            {/* ── Main Layout ── */}
            <div className="flex p-[16px_8px]">

                {/* ── Left Sidebar ── */}
                <div className="w-[14%] border-r-2 border-[#ddd] px-[10px]">
                    <div className="text-[14px] font-bold">Category</div>

                    <div className="mt-[10px] text-[14px] gap-[10px] flex flex-col">
                        <div className="font-semibold">Computers & Accessories</div>
                        <div className="font-semibold">Macbooks</div>
                        <div className="font-semibold">Amazon Prime</div>
                        <div className="font-semibold">Average Customer Review</div>

                        {/* Star Rating Filters */}
                        {[4, 3, 2, 1].map((rating, idx) => (
                            <div key={idx} className="flex">
                                {[...Array(5)].map((_, i) => (
                                    i < rating
                                        ? <StarRateIcon key={i} sx={{ fontSize: '20px', color: '#febd69' }} />
                                        : <StarBorderIcon key={i} sx={{ fontSize: '20px', color: '#febd69' }} />
                                ))}
                                <div className="text-[12px] font-normal ml-[5px] flex justify-center items-center">
                                    &amp; Up
                                </div>
                            </div>
                        ))}

                        <div className="font-semibold">Amazon Prime</div>
                        <div className="font-semibold">Average Customer Review</div>
                        <div className="font-semibold">Amazon Prime</div>
                        <div className="font-semibold">Average Customer Review</div>
                        <div className="font-semibold">Amazon Prime</div>
                        <div className="font-semibold">Average Customer Review</div>
                        <div className="font-semibold">Amazon Prime</div>
                        <div className="font-semibold">Average Customer Review</div>
                        <div className="font-semibold">Amazon Prime</div>
                        <div className="font-semibold">Average Customer Review</div>
                    </div>
                </div>

                {/* ── Right Product Area ── */}
                <div className="w-[86%] pl-[12px]">

                    {/* Results Banner */}
                    <div className="w-[99%] border border-[#ccc] box-border my-[20px] py-[14px] px-[38px] rounded-[5px] text-[14px]">
                        1-5 of 5 results for{' '}
                        <span className="text-[#c45500] font-bold">Macbooks</span>
                    </div>

                    {/* Product Grid */}
                    <div className="w-full grid gap-[30px] grid-cols-[308px_308px_308px]">
                        {productDetail.product.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col w-full rounded-[5px] box-border h-[640px] shadow-sm hover:shadow-md transition-shadow duration-200"
                            >
                                {/* Image Block */}
                                <div className="flex justify-center items-center rounded-tl-[5px] rounded-tr-[5px] bg-[rgb(247,247,247)] p-[40px_20px] box-border">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.name}
                                        className="w-full h-[260px] object-contain"
                                    />
                                </div>

                                {/* Product Info */}
                                <div className="p-[20px] border border-[#efeeee] border-t-0 flex flex-col flex-grow rounded-bl-[5px] rounded-br-[5px]">

                                    {/* Name */}
                                    <div className="text-[14px] line-clamp-3 leading-snug">
                                        {item.name}
                                    </div>

                                    {/* Rating */}
                                    <div className="flex my-[10px]">
                                        {[...Array(4)].map((_, i) => (
                                            <StarRateIcon key={i} sx={{ fontSize: '20px', color: '#febd69' }} />
                                        ))}
                                        <StarBorderIcon sx={{ fontSize: '20px', color: '#febd69' }} />
                                    </div>

                                    {/* Price */}
                                    <div className="flex items-start">
                                        <div className="text-[13px] mt-[6px]">₹</div>
                                        <div className="text-[28px] font-medium flex w-full justify-between items-baseline">
                                            {item.price.toLocaleString('en-IN')}
                                            <span className="text-[#727171] font-normal text-[14px]">
                                                20% off
                                            </span>
                                        </div>
                                    </div>

                                    {/* Free Delivery */}
                                    <div className="font-normal mt-[10px] text-[14px]">
                                        Free Delivery
                                    </div>

                                    {/* Add to Cart Button */}
                                    <button
                                        className="bg-[#febd69] w-fit text-[14px] flex justify-center items-center px-[20px] py-[10px] rounded-[5px] cursor-pointer mt-[15px] hover:bg-[#f0a850] transition-colors duration-150 border-none"
                                        onClick={() => handleAddToCart(item)}
                                    >
                                        Add to Cart
                                    </button>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Products;