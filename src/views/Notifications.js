import React from 'react';
import ListNotifications from "../components/listNotifications/ListNotifications";
import styled from "@emotion/styled";

const ContainerViewNotification = styled.div`
    width:100%;
    display:inline-block;
    text-align:center;
`;


const Notifications = () => {
    return (
        <ContainerViewNotification>
            <ListNotifications />
        </ContainerViewNotification>
    );
};

export default Notifications;