import React from "react";

function Volunteer() {
    return (
        <div className="getInvolved">
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-4">
                        <img
                            src="https://vetwork.co/galaxy/wp-content/uploads/%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9-%D8%A7%D9%84%D9%83%D9%84%D8%A7%D8%A8-1024x682.jpg"
                            alt=""
                            style={{ width: "140%" }}
                        />
                        <h3 className="pl-5 pt-2" style={{ textAlign: "center" }}>Foster</h3>
                        <p className="pl-5 pt-2">Fostering a rescue animal means that you agree to take an animal into your home and care for it until they can find a loving forever home through FurEver Home. We are always in need of more fosters in the Twin Cities area. Most of our animals are saved directly from animal shelters where they are at risk of being euthanized, so they are in need of foster homes to show them what it means to feel loved. Helping a rescue animal find their forever home is a priceless experience! Email fureverhomefoster@email.com if you're interested.</p>
                    </div>
                    <div className="col-lg-6 offset-2">
                        <p>
                            <img
                                src="https://www.webercountyutah.gov/Animal_Shelter/images/volunteer.jpg"
                                alt=""
                                style={{ width: "120%" }}
                            />
                            <h3 style={{ textAlign: "center" }}>Volunteer</h3>
                            <h5 style={{ textAlign: "center", width: "50%" }}>Drive Team</h5>
                            <p style={{ width: "50%" }}>As a Transport Volunteer you help us by transporting animals primarily for intake. This would be primarily on the weekend but can sometimes occur during the week as well. Transports can be anywhere in the Twin Cities, so times vary depending on location. Email fureverhomedriving@email.com if you're interested</p>
                            <h5 style={{ textAlign: "center", width: "50%" }}>Other Skills</h5>
                            <p style={{ width: "50%" }}>FurEver Home Rescue is a small rescue, so we are always looking for help doing a variety of activities. Do you have experience and freetime to help us grow and help more animals? Do you do photography? Event coordination? Grooming? Art you can donate for fundraising auctions? Email fureverhomerescue@email.com if you're interested so we can begin our partnership!</p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Volunteer;