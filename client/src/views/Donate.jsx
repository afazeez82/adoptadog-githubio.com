import React from "react";

function Donate() {
    return (
        <div className="Donate" style={{
            backgroundImage: "url('https://www.maricopa.gov/ImageRepository/Document?documentID=53374", height: "800px"
        }}>
            <div className="container">
                <div className="row pl-2 pt-5">
                    <div className="col-10">
                        <div className="p-4 col-8" style={{ backgroundColor: "#F04862" }}>
                            <div className="p-2" style={{ backgroundColor: "#F48B7D" }}>
                                <div className="sr-root">
                                    <div className="sr-main">
                                        <header className="sr-header">
                                            <div className="sr-header__logo"></div>
                                        </header>
                                        <div className="sr-payment-summary payment-view">
                                            <h1 className="order-amount">$14.00</h1>
                                            <h4>per month subscription</h4>
                                        </div>
                                        <div className="sr-payment-form payment-view">
                                            <label className="sr-checkbox-label"></label>
                                            <span>Add optional donation</span>
                                            <div className="donations">
                                                <button className="donation" data-amount="1">$1</button>
                                                <button className="donation" data-amount="5">$5</button>
                                                <button className="donation" data-amount="20">$20</button>
                                            </div>
                                            <button id="submit">Checkout</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
}

export default Donate;