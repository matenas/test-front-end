import React from 'react';
import IosAnalyticsOutline from "react-ionicons/lib/IosAnalyticsOutline";
import IosAppsOutline from "react-ionicons/lib/IosAppsOutline";
import IosMailOutline from "react-ionicons/lib/IosMailOutline";
import IosCard from "react-ionicons/lib/IosCard";
import IosExitOutline from "react-ionicons/lib/IosExitOutline";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (

        <nav className="h100vh w60 panel bcPurple flexa-jcsb flexa-ai">
            <div className="panel">
                {/* HOME */}
                <Link to={'/'} className="mt10 mb30 h50px" ><IosAnalyticsOutline className="cWhite" fontSize="35px" color="#C9C9C9" beat={true}/></Link>

                {/* HOTELS   */}
                <Link to={'/hotels'} className="mt30" ><IosAppsOutline className="cWhite" fontSize="35px" color="#C9C9C9"/></Link>

                {/* NOTIFICATIONS */}
                <Link to={'/notifications'} className="mt30"><IosMailOutline className="cWhite" fontSize="35px" color="#C9C9C9"/></Link>

                {/* PAYMENTS */}
                <Link to={'/payments'} className="mt30"><IosCard className="cWhite" fontSize="35px" color="#C9C9C9"/></Link>

            </div>
            <a className="mb10" href="#"><IosExitOutline fontSize="35px" color="#C9C9C9"/></a>
        </nav>
    );
};

export default Navbar;