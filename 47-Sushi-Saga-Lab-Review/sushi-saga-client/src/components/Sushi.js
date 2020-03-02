import React, { Fragment } from "react";

const Sushi = props => {
  console.log(props.eaten);

  return (
    <div className="sushi">
      <div className="plate" onClick={() => props.handleEatSushi(props.sushi)}>
        {/* Tell me if this sushi has been eaten! */
        /* check if sushi has been eaten */
        props.eaten ? null : <img src={props.sushi.img_url} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  );
};

export default Sushi;