import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/header/Header";
import WelcomeCard from "../components/welcome-card/Welcome-card";
import SecondCard from "../components/welcome-card/Second-card";
import ListHotels from "../components/listHotels/ListHotels";
import ListNotifications from "../components/listNotifications/ListNotifications";
import {Switch} from "react-router-dom";

const Dashboard = () => {
    return (
        <section className="wMax1000 panel flex-one pl12em pr12em">

            <Header
                title="Dashboard"
            />
            <div className="containerCenter">
                <div className="row flex-dir-c">

                    <WelcomeCard
                        title="Bienvenido"
                        user="Manuel"
                        paragraph="is simply dum text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dum text ever since the 1500s, when"
                    />
                    <SecondCard/>
                    <ListHotels />
                </div>

                <div className="sectionRight mb10">
                    <ListNotifications/>
                </div>

            </div>
        </section>
    );
};

export default Dashboard;