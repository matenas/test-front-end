import React from 'react';
import WelcomeCard from "./Welcome-card";
import {Link} from "react-router-dom";

const SecondCard = () => {
    return (
        <div>

            <div className="flex-display flex-dir-r card p10 w96Porc mt10 bcWhite flexa-jcsb">
                <Link to={'/notifications'}>
                    <div className="bloque bl mb30 flex-display flex-dir-r">
                        <div className="notif-left ">
                            <ion-icon className="cPurple icoSize3m" style={{fontSize:'3em'}} name="mail-open-outline"></ion-icon>
                        </div>
                        <div className="notif-right">
                            <h4 className="mt4 textsize-3 fs-regular cBlue pl12em">Notificaciones</h4>
                            <h4 className="mt4 textsize-3 fs-regular cBlue pl12em">is simply dum </h4>
                        </div>
                    </div>
                </Link>
                <Link to={'/hotels'}>
                    <div className="bloque bl mb30 flex-display flex-dir-r flexa-jcsb">
                        <div className="notif-left ">
                            <ion-icon className="cPurple  icoSize3m" style={{fontSize:'3em'}}  name="bed-outline"></ion-icon>
                        </div>
                        <div className="notif-right">
                            <h4 className="mt4 textsize-3 fs-regular cBlue pl12em">Hoteles</h4>
                            <h4 className="mt4 textsize-3 fs-regular cBlue pl12em">is simply dum </h4>
                        </div>
                    </div>
                </Link>
                <Link to={'/payments'}>
                    <div className="bloque bl mb30 flex-display flex-dir-r flexa-jcsb">
                        <div className="notif-left ">
                            <ion-icon className="cPurple icoSize3m" style={{fontSize:'3em'}}  name="card-outline"></ion-icon>
                        </div>
                        <div className="notif-right">
                            <h4 className="mt4 textsize-3 fs-regular cBlue pl12em">Pagos recibidos</h4>
                            <h4 className="mt4 textsize-3 fs-regular cBlue pl12em">is simply dum </h4>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default SecondCard;