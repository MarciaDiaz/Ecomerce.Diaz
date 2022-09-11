import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function CardWidget({cant}){

    return (

        <>
        < ShoppingCartIcon />
        ({cant})
        </>
    )
}