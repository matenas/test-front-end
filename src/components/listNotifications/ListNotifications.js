import React from 'react';
import Notification from "./notification/Notification";
import Axios from "axios";

const ListNotifications = () => {

    const [notifications, setNotifications] = React.useState([])

    React.useEffect( () => {

        const callApi = async () => {
            const urlNotifications = `http://localhost:3001/notifications`;
            const getDataNotifications = await Axios.get(urlNotifications);
            setNotifications(getDataNotifications.data);
            // console.log(getDataNotifications.data);
        }
        callApi();
    }, [] )

    return (
        <>
            <h2 className="ml10px textsize-1 fs-sbold cBlack">Notificaciones</h2>

            {
                notifications.map((notification) => (
                    <Notification
                        key={notification.id*10}
                        notification={notification}
                    />
                ) )
            }
        </>
    );
};

export default ListNotifications;