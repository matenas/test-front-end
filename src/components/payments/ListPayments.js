import React from 'react';
import Payment from "./Payment";
import Axios from "axios";
import styled from "@emotion/styled";

const ListPay = styled.ul`
    width:100%;
    display:flex;
    justy-content:flex-start;
`;


const ListPayments = () => {
    const [payments,setPayments] = React.useState([{}]);

    React.useEffect(()=>{


        const apiCall = async ()=> {
            const url = 'http://localhost:3001/payments';
            const getData = await Axios.get(url);
            setPayments(getData.data)
        }
        apiCall();
    },[])

    return (
        <ListPay>
            {payments.map(element => (
                <Payment
                    key={element.id}
                    payment={element}
                />
            ))}
        </ListPay>
    );
};

export default ListPayments;