import React from 'react';
import Hotel from "./Hotel/Hotel";
import Axios from "axios";

const ListHotels = () => {

    const [hotels,setHotels] = React.useState([{}]);

    React.useEffect( () => {
        const callApi = async () => {
            const urlHotel = `http://localhost:3001/hotels`;
            const getDataHotels = await Axios.get(urlHotel);
            setHotels(getDataHotels.data);
            // console.log(getDataHotels.data);
        }
        callApi();
    }, [] )

    return (
        <>
            <h2 className="ml10px mt10 textsize-1 fs-sbold cBlack">Hoteles Disponibles</h2>

            <div className="row flex-dir-r w96Porc flex-wrap ">
                {
                    hotels.map( hotel => (
                        <Hotel
                            key={hotel.id*60}
                            hotel={hotel}
                        />
                    ) )
                }
            </div>
        </>
    );
};

export default ListHotels;