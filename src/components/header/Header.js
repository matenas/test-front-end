import React from 'react';
import {Link} from "react-router-dom";

const Header = ({title}) => {
    return (

        <div className="cardTop bcWhite flex-display flex-dir-r flexa-jcsb">
            <div>
                <h2>{title}</h2>
            </div>
            <div>
                <Link to={'/search'} className="mr2em" ><ion-icon className="icoGray" name="search-outline"></ion-icon></Link>
                <Link to={'/notifications'} className="mr2em" ><ion-icon className="icoGray" name="mail-unread-outline"></ion-icon></Link>
                <Link to={'/configuration'} className="mr2em" ><ion-icon className="icoGray" name="settings-outline"></ion-icon></Link>
            </div>
        </div>
    );
};

export default Header;