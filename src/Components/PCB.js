import React from "react";
import  PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./PCB.scss";

function PCB_element({ id, title, in_voltage, price, price_unit, description, image}) {
    return (
        <div className="element">
            <Link
                to={{
                pathname: `/device/${id}`,
                state: {
                    title,
                    in_voltage,
                    price,
                    price_unit,
                    description,
                    image,
                },
                }}
            >
                <img  src ={ require(`../../../source/${image}`)} alt={title} title={title}></img>
                <div className="element_column">
                    <h3 className="element_title">{title}</h3>
                    <h5 className="element_price">{price} {price_unit}</h5>
                    <h5 className="element_in_voltage">{in_voltage}</h5>                
                    <p className="element_description">{description.slice(0, 30)}...</p >     
                </div>
            </Link>
        </div>
    ) ;

}

PCB_element.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    in_voltage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    price_unit: PropTypes.string.isRequired ,
    description: PropTypes.string,
    image: PropTypes.string,
};

export default PCB_element;