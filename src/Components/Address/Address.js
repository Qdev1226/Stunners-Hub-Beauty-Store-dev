import { useCart } from "contexts";
import { React, useState } from "react";
import "./address.css";

export function Address() {
  const [openModal, setOpenModal] = useState(false);
  const { dispatch, cartState } = useCart();
  const [userAddress, setUserAddress] = useState({
    name: "",
    phoneNo: "",
    address: "",
  });
  const address = cartState?.address;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_ADDRESS",
      payload: userAddress,
    });
    setUserAddress({
      name: "",
      phoneNo: "",
      address: "",
    });
  };
  return (
    <div className="address">
      <div className="address-sec">
        <div className="address-title">
          {address?.name ? `Deliver to: ${address?.name}` : `Address`}
        </div>
        <div className="detail-address">
          {address?.address ? address?.address : "Please add address here"}
        </div>
      </div>
      <button
        id="myBtn"
        className="btn click-btn"
        onClick={() => setOpenModal(true)}
      >
        Add
      </button>
      {openModal ? (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <h6 className="center-text">Add Address</h6>
              <div>
                <label htmlFor="name" className="name-label">
                  Full Name
                </label>
              </div>
              <input
                type="text"
                className="input"
                required
                value={userAddress.name}
                onChange={(e) =>
                  setUserAddress((prev) => ({ ...prev, name: e.target.value }))
                }
              />
              <div>
                <label htmlFor="number" className="name-label">
                  Contact Number
                </label>
              </div>
              <input
                className="input"
                type="tel"
                id="phone"
                value={userAddress.phoneNo}
                name="phone"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                onChange={(e) =>
                  setUserAddress((prev) => ({
                    ...prev,
                    phoneNo: e.target.value,
                  }))
                }
                required
              />
              <div>
                <label htmlFor="country" className="name-label">
                  Country
                </label>
              </div>
              <input type="text" className="input" required value={userAddress.country}/>
              <div>
                <label htmlFor="address" className="name-label">
                  Address
                </label>
              </div>
              <input
                type="address"
                required
                value={userAddress.address}
                className="input-address"
                onChange={(e) =>
                  setUserAddress((prev) => ({
                    ...prev,
                    address: e.target.value,
                  }))
                }
              />
            </form>
            <div className="flex">
              <button
                className="btn save-btn"
                type="submit"
                onClick={(e) => {
                  setOpenModal(false);
                  handleSubmit(e);
                }}
              >
                save
              </button>
              <button
                className="btn close-btn cancel-btn"
                onClick={() => setOpenModal(false)}
              >
                cancel
              </button>
            </div>
            <button
              className="btn close-btn cancel-btn"
              onClick={() =>
                setUserAddress({
                  name: "Anya Sharif",
                  phoneNo: "+917823562345",
                  country: "India",
                  address:
                    "3, Sec 22, 361, A Jerbai Wadi Road, Near Post Office, Parel,Mumbai Maharashtra",
                })
              }
            >
              Add dummy address
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
