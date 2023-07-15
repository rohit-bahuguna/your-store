import React from 'react'
import { useOrderData } from '../../contexts/orderContext';
import { useAuthData } from '../../contexts/AuthContext/authContext';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCartData } from "../../contexts/cartContext/cartContext";
import { ACTION_TYPE } from "../../utils";

const PlaceOrder = ({ setMsg }) => {
    const navigate = useNavigate();
    const { cart, clearCartProducts } = useCartData();
    const { priceDetails, orderAddress, dispatch, setOrder } = useOrderData();
    const {
        user: { name, email },
        token,
        addresses
    } = useAuthData();
    const { totalAmt } = priceDetails;

    const loadScript = async (url) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = url;

            script.onload = () => {
                resolve(true);
            };

            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

    const displayRazorpay = async () => {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

        if (!res) {
            toast.error("Razorpay SDK failed to load, check you connection");
            return;
        }

        const options = {
            key: "rzp_test_njYPlixIkB2ukb",
            amount: totalAmt * 100,
            currency: "INR",
            name: "Grosers",
            description: "Thank you for shopping with us",
            image: "https://github.com/rutvikpumak/pustaka-ecom/blob/dev/images/logo.png?raw=true",
            handler: function (response) {
                const orderData = {
                    products: [...cart],
                    amount: totalAmt,
                    paymentId: response.razorpay_payment_id,
                    delivery: orderAddress,
                };
                setOrder({ ...orderData });
                clearCartProducts(cart, token);
                dispatch({ type: ACTION_TYPE.RESET_PRICE });
                setMsg(true);
            },
            prefill: {
                name,
                email: email,
                contact: "8865894446",
            },
            theme: {
                color: "#232f3e",
            },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    const placeOrderHandler = () => {
        if (addresses.length === 0) {
            toast.error("Please Add Address");
            setTimeout(() => {
                navigate("/user-profile#user-address");
            }, 1500);
        } else {
            !orderAddress.name ? toast.error("Please Select Address") : displayRazorpay();
        }
    };
    return (
        <div className="text-center" onClick={() => placeOrderHandler()}>
            <button className="border px-5 py-1 text-indigo-700 hover:bg-indigo-100 border-indigo-700 rounded-full text-2xl
            disabled:bg-gray-300
            disabled:text-gray-500
            disabled:border-gray-500"
                disabled={addresses.length <= 0}
            >Place Order</button>
        </div>
    )
}

export default PlaceOrder