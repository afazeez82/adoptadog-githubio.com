import React from "react";

function Donate() {
    return (
        <div className="Donate" style={{
            backgroundImage: "url('https://pethome.hr/upload/2020/09/dogs-need-to-play_5f56183e18f4f.jpg')", height: "1200px", maxWidth: "1900px", minWidth: "1500px"
        }}>
            <div className="container">
                <div className="row p-5">
                    <div className="col-10 offset-lg-7">
                        <div className="p-4 col-8" style={{ backgroundColor: "#F04862" }}>
                            <div className="p-2" style={{ backgroundColor: "#F48B7D" }}>
                                <div class="sr-root">
                                    <div class="sr-main">
                                        <header class="sr-header">
                                            <div class="sr-header__logo"></div>
                                        </header>
                                        <div class="sr-payment-summary payment-view">
                                            <h1 class="order-amount">$14.00</h1>
                                            <h4>per month subscription</h4>
                                        </div>
                                        <div class="sr-payment-form payment-view">
                                            <label class="sr-checkbox-label"></label>
                                            <span>Add optional donation</span>
                                            <div class="donations">
                                                <button class="donation" data-amount="1">$1</button>
                                                <button class="donation" data-amount="5">$5</button>
                                                <button class="donation" data-amount="20">$20</button>
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