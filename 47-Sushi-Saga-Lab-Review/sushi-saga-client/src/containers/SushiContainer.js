import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = props => {
  console.log(props.eatenSushis);
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi => (
          <Sushi
            sushi={sushi}
            key={sushi.id}
            handleEatSushi={props.handleEatSushi}
            eaten={props.eatenSushis.includes(sushi)}
          />
        ))}
        <MoreButton handleMoreBtn={props.handleMoreBtn} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
