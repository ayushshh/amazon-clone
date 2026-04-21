import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/actions/actions';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const [cartItem, setCartItem] = useState([]);
    const dispatch  = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    // Total price
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    useEffect(() => {
        setCartItem(cartItems);
    }, [cartItems]);

    const handleRemoveFromCart = (id) => {
        toast.error("Item Removed From Cart", { position: "bottom-right" });
        dispatch(removeFromCart(id));
    };

    return (
        <div className="bg-[whitesmoke] p-[20px_18px_18px] flex gap-[10px] min-h-screen">

            {/* ── Left: Cart Items ── */}
            <div className="p-[20px_15px_15px] box-border w-[77%] bg-white flex flex-col">

                <div className="text-[28px]">Shopping Cart</div>
                <div className="text-[#007185] cursor-pointer hover:underline text-[14px] mt-1">
                    Deselect all items
                </div>
                <div className="text-right text-[14px] text-gray-500 mb-1">Price</div>

                {/* Cart Items List */}
                <div className="flex flex-col w-full">
                    {cartItems.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-[60px] gap-4 text-gray-500">
                            <img
                                src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB445243794_.svg"
                                alt="empty cart"
                                className="w-[200px] opacity-60"
                            />
                            <p className="text-[18px]">Your Amazon Cart is empty</p>
                            <p className="text-[14px]">
                                Your shopping cart lives here. Start shopping on the{' '}
                                <a href="/" className="text-[#007185] hover:underline">homepage</a>.
                            </p>
                        </div>
                    ) : (
                        cartItems.map((item, ind) => (
                            <div
                                key={item.id || ind}
                                className="flex justify-between p-[20px] border-t border-[#e7e7e7]"
                            >
                                {/* Left Block: Image + Details */}
                                <div className="flex w-[80%]">

                                    {/* Product Image */}
                                    <div className="w-[20%] flex-shrink-0">
                                        <img
                                            src={item.imageUrl}
                                            alt={item.name}
                                            className="w-full object-contain"
                                        />
                                    </div>

                                    {/* Product Details */}
                                    <div className="flex flex-col p-[10px] gap-[7px]">
                                        <div className="text-[18px] line-clamp-3 leading-snug">
                                            {item.name}
                                        </div>
                                        <div className="text-[#007600] text-[12px] font-bold">
                                            In Stock
                                        </div>
                                        <div className="text-[#565959] text-[12px]">
                                            Eligible for FREE Shipping
                                        </div>
                                        <img
                                            src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18x45._CB485942108_.png"
                                            alt="fulfilled by amazon"
                                            className="w-[66px] object-contain"
                                        />
                                        <div
                                            className="p-[5px] text-[14px] bg-[#febd69] w-fit rounded-[5px] cursor-pointer font-medium hover:bg-[#f0a850] transition-colors duration-150"
                                            onClick={() => handleRemoveFromCart(item.id)}
                                        >
                                            Remove from Cart
                                        </div>
                                    </div>

                                </div>

                                {/* Right Block: Price */}
                                <div className="text-[18px] font-semibold box-border">
                                    ₹{item.price.toLocaleString('en-IN')}
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Bottom Subtotal */}
                {cartItems.length > 0 && (
                    <div className="text-right text-[18px] mt-4 border-t border-[#e7e7e7] pt-4">
                        Subtotal ({cartItem.length} items):{' '}
                        <span className="font-bold">₹{total.toLocaleString('en-IN')}</span>
                    </div>
                )}
            </div>

            {/* ── Right: Checkout Sidebar ── */}
            <div className="p-[20px_15px_15px] box-border w-[23%] bg-white flex flex-col h-fit gap-3">
                <div className="text-[18px] font-medium">
                    Subtotal ({cartItem.length} items):{' '}
                    <span className="font-bold">₹{total.toLocaleString('en-IN')}</span>
                </div>

                <div className="flex items-center gap-2 text-[14px] my-[10px]">
                    <input type="checkbox" className="cursor-pointer" />
                    <span>This Order Contains a gift</span>
                </div>

                <div className="text-[14px] bg-[#febd69] p-[10px] flex justify-center items-center cursor-pointer rounded-[10px] font-medium hover:bg-[#f0a850] transition-colors duration-150">
                    Proceed To Buy
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Cart;