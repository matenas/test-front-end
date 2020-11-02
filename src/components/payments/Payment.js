import React from 'react';
import styled from "@emotion/styled";

const Pay = styled.li`
    width:100%;
    max-width: 200px;
    margin:2rem 15px 2rem;
    border:1px solid #c3c3c3;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    text-align:center;
`;

const Payment = ({payment}) => {

    const {price,idReservation,Payments} = payment;
    return (

        <Pay>
            <h4 className="textsize-3">{price}</h4>
            <div className="notif-right">
                <h4 className="mt4 textsize-2 fs-regular cBlue">{Payments}</h4>
                <p className="mt4 textsize-3 cGray">{idReservation}</p>
            </div>
        </Pay>
    );
};

export default Payment;