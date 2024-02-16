import React from "react";
import "./MainFile.css";
import { PiHandbagLight } from "react-icons/pi";
import { IMG_URL } from "../Json/Jsondata";
const MainFile = (props) => {
  const { Data } = props;
  const { title, cost, lastPrice, offer } = Data;
  return (
    <div className="mainCon">
      <div className="imgCon">
        <img src={IMG_URL} className="image" alt="image" />
      </div>
      <h3>{title}</h3>
      <div className="sample"></div>
      <div className="detailsCon">
        <div>
          <ul className="subDetails">
            <li className="costList">{`₹${cost}`}</li>
            <li className="lastprice">{lastPrice}</li>
            <li className="offer">{`(${offer})`}</li>
            <li>
              <PiHandbagLight />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainFile;
