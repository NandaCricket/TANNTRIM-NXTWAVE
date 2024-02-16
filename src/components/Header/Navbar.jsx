import React from "react";
import "./Header.css";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { CiCircleInfo } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className="navCon">
      <div className="navTitle">
        <h1 className="tann">TANN</h1>
        <h1 className="trim">TRIM</h1>
      </div>
      <div>
        <ul className="listItem">
          <li>
            <span>
              <IoIosSearch />
            </span>
          </li>
          <li>
            <CiCircleInfo />
          </li>
          <li>
            <FaRegEnvelope />
          </li>
          <li>
            <IoBagOutline />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
