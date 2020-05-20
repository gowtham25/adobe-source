import React, { useState } from "react";
import "./allCartcontainer.css";
import IContainer from "./IContainer";
import PriceDetails from "./PriceDetails";

interface AllCartcontainerProps {
    addCartData: any;
}
const AllCartcontainer: React.FC<AllCartcontainerProps> = ({ addCartData }) => {
    const [cartData, setCartData] = useState(addCartData);
    const removeItem = (index: number, type?: string) => {
        let myData = [...cartData];
        switch (type) {
            case "increment":
                myData = myData.map((value, mIndex) => {
                    if (mIndex === index) {
                        return { ...value, count: value.count + 1 };
                    }
                    return value;
                });
                break;
            case "decrement":
                myData = myData.map((value, mIndex) => {
                    if (mIndex === index) {
                        return { ...value, count: value.count - 1 };
                    }
                    return value;
                });
                break;
            case "remove":
                myData = myData.filter((value, mIndex) => {
                    return mIndex !== index;
                });
                break;
        }
        setCartData(myData);
    };
    return (
        <div className="individual-container">
            <div className="left-container">
                {cartData && cartData.length > 0 ? (
                    cartData.map((aValue: any, aIndex: any) => {
                        const {
                            discount = "",
                            name = "",
                            image = "",
                            price = {},
                            count = 0
                        } = aValue || {};
                        const { actual = "", display = "" } = price || {};
                        return (
                            <IContainer
                                count={count}
                                key={aIndex}
                                itemData={aValue}
                                itemIndex={aIndex}
                                discount={discount}
                                name={name}
                                image={image}
                                actual={actual}
                                display={display}
                                removeItem={removeItem}
                            />
                        );
                    })
                ) : (
                    <p>No Items Added</p>
                )}
            </div>
            <div className="right-container">
                <PriceDetails cartData={cartData} />
            </div>
        </div>
    );
};

export default AllCartcontainer;
