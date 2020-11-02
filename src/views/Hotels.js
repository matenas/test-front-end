import React from 'react';
import ListHotels from "../components/listHotels/ListHotels";
import styled from "@emotion/styled";

const ContainerViewHotels = styled.div`
    width:100%;
    display:inline-block;
    text-align:center;
`;

const Hotels = () => {
    return (
        <ContainerViewHotels>
            <ListHotels/>
        </ContainerViewHotels>
    );
};

export default Hotels;