import React, { useEffect, useState } from "react";
import "./allCartcontainer.css";

interface PriceDetailsProps {
    cartData: any;
}
const PriceDetails: React.FC<PriceDetailsProps> = ({ cartData }) => {
    const [totalPrice, setTotalPrice] = useState();
    const [totalDiscount, setTotalDiscount] = useState();
    const [totalItem, setTotalItem] = useState();
    useEffect(() => {
        let tPrice = 0,
            tDiscount = 0,
            item = 0;
        cartData.map((value: any, index: any) => {
            const { price = {}, count = 0, discount = 0 } = value || {};
            const { actual = 0, display = 0 } = price || {};
            tPrice += count * display;
            tDiscount += ((count * display) / 100) * discount;
            item += count;
            return true;
        });
        setTotalPrice(tPrice);
        setTotalDiscount(tDiscount);
        setTotalItem(item);
    }, [cartData]);
    return (
        <div className="p-container">
            <div className="p-container-header">PRICE DETAILS</div>
            <div className="p-internal-container">
                <div className="cont">
                    <div className="price-item-container">{`Price (${totalItem} item) :`}</div>
                    <div className="p-container">₹{totalPrice}</div>
                </div>
                <div className="cont">
                    <div className="price-item-container">Discount :</div>
                    <div className="p-container">
                        ₹{Math.floor(totalDiscount)}
                    </div>
                </div>
            </div>
            <div className="total-amount-cont cont">
                <div className="price-item-container">Total Payable :</div>
                <div className="p-container">
                    ₹{Math.floor(totalPrice - totalDiscount)}
                </div>
            </div>
        </div>
    );
};

export default PriceDetails;
