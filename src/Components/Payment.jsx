import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateWallet } from "../Store";

function Payment() {
    const data = useSelector(state => state.user);
    const dispath = useDispatch();
    const handleClick = () => {
        dispath(updateWallet(5000));
    }
    return (
        <div>
            <h3>{data.username}, {data.balance}</h3>
            <button onClick={handleClick}>Pay</button>
        </div>
    );
}

export default Payment;