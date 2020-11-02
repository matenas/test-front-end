import React from 'react';

const Notification = ({notification}) => {
    const {content,date,fromUser,id} = notification;
    let dateFormate = [];
    dateFormate = date.split("T");
    console.log(dateFormate)
    console.log(id-1)
    return (
        <div className="notification mb30 mt10">
            <div className="notif-left flex-display flexa-jcsb">

                {/* <ion-icon className="icoGray" name="mail-open-outline"></ion-icon> */}
                <h4 className="textsize-3">{date.split("-")[0]}</h4>
            </div>
            <div className="notif-right">
                <h4 className="mt4 textsize-2 fs-regular cBlue">{fromUser.name}</h4>
                <p className="mt4 textsize-3 cGray">{content}</p>
            </div>
        </div>
    );
};

export default Notification;