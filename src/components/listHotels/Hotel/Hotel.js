import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import styled from "@emotion/styled";

const ThumbHotel = styled.img`
    width:100%;
`;
const Button = styled.button`
    padding: 0.3em 1.2em;
    display: block;
    margin: 0 0.1em 0.1em 0;
    border: 0.16em solid rgba(255,255,255,0);
    border-radius: 2em;
    box-sizing: border-box;
    text-decoration: none;
    color: #FFFFFF;
    text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);
    text-align: center;
    transition: all 0.2s;
`;

function getModalStyle() {
    const top = 50 ;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}
const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 600,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Hotel = ({hotel}) => {
    const {id,name,imgUrl} = hotel;


    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);


    //abro cierro modal funcion

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <div className={`card row flex-dir-c flexa-jcsb flexa-ai p10 img imghotel-${id} wMin150 hMin150 m2px mt10 bcWhite`}>
                <h2 className="textsize-1 fs-sbold cWhite">{name}</h2>
                <Button
                    type="button"
                    onClick={handleOpen}
                    className="btn bcPurple"
                >Reservar
                </Button>
            </div>

            <Modal
                open={open}
                onClose={() => {
                    handleClose();


                }}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >

                <div style={modalStyle} className={classes.paper}>
                    <h2 id="simple-modal-title">{name}</h2>

                    <ThumbHotel src={imgUrl} alt="" className="img-fluid my-4"/>
                </div>
            </Modal>
        </>

    );
};

export default Hotel;