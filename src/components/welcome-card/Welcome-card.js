import React from 'react';

const WelcomeCard = ({title,user,paragraph}) => {
    return (
        <div className="card p40 w96Porc gradient">
            <h4 className="textsize-2 fs-regular cWhite">{title}</h4>
            <h2 className="textsize-1 fs-sbold cWhite mt10">{user}</h2>
            <hr/>
            <p className="textsize-3 cWhite mt10">{paragraph} </p>
        </div>
    );
};

export default WelcomeCard;