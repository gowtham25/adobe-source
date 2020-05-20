import React from "react";
import CartLogo from "../../cart.png";
import Search from "../../search.png";
import logo from "../../star.png";
import "./header.css";

interface HeaderProps {
    setShowHome: (val: boolean) => void;
    setSearchQuery: (val: string) => void;
    searchQuery: string;
    handleSearch: any;
    showHome: boolean;
    cartIem: number;
}
const Header: React.FC<HeaderProps> = ({
    setShowHome,
    setSearchQuery,
    searchQuery,
    handleSearch,
    showHome,
    cartIem
}) => {
    return (
        <>
            <img
                src={logo}
                alt="Logo"
                className="logo"
                onClick={() => {
                    setShowHome(true);
                }}
            />
            <div className="search-container">
                <input
                    className="search-box"
                    type="text"
                    value={searchQuery}
                    placeholder="Search"
                    onChange={e => setSearchQuery(e.currentTarget.value)}
                />
                <button
                    onClick={e => {
                        handleSearch();
                    }}
                    className="search-button"
                >
                    <img src={Search} alt="Search" className="search-icon" />
                </button>
                {showHome && (
                    <>
                        <img
                            src={CartLogo}
                            alt="Search"
                            className="cart-icon"
                            onClick={() => setShowHome(false)}
                        />
                        {cartIem > 0 && (
                            <span className="total-item">{cartIem}</span>
                        )}
                    </>
                )}
            </div>
        </>
    );
};

export default Header;
