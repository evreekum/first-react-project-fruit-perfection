import react from 'react';
import citroenen from "../assets/citroenen.jpeg";
import limoenen from "../assets/limoenen.png";
import ijsblokjes from "../assets/ijsblokjes.jpg";
import React from "react";


function Product() {
    return (
        <article className={"product"}>
            <img src={citroenen} alt="Lemon"/>
            <h2 className={"product-name"}>Citroen</h2>
            <p className={"product-description"}>Een citroen is voor de meeste mensen te zuur om zo uit de hand
                te eten. Van citroen kun je het vruchtvlees, het sap en de schil gebruiken. Het sappige,
                lichtgele zure vruchtvlees versterkt de smaak van ander voedsel.</p>
        </article>

    );
}

export default Product;