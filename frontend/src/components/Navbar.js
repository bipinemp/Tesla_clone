import React, { useEffect, useState } from "react";
import tsla from "../assets/tsla.png";
import "./css/navbar.css";
import Modal from "./Modal";
import { SideLinks } from "./SideLinks";
import { TbWorld } from "react-icons/tb";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [side, setSide] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={tsla} alt="tesla_logo" />
        </div>
        <div className="nav-links-first">
          <div>
            <h1>Model S</h1>
          </div>
          <div>
            <h1>Model 3</h1>
          </div>
          <div>
            <h1>Model X</h1>
          </div>
          <div>
            <h1>Model Y</h1>
          </div>
          <div>
            <h1>Solar Roof</h1>
          </div>
          <div>
            <h1>Solar Panels</h1>
          </div>
        </div>
        <div className="nav-links-second">
          <div>
            <h1>Shop</h1>
          </div>
          <div>
            <h1>Account</h1>
          </div>
          <div>
            <h1>Menu</h1>
          </div>
        </div>
        <div className="nav-links-last">
          <div>
            <h1
              onClick={() => {
                setIsOpen(true);
                setSide(false);
              }}
            >
              Menu
            </h1>
          </div>
        </div>
        <Modal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
            setSide(false);
          }}
        >
          {SideLinks.map((link) => {
            return (
              <div className="Sidelinks">
                {link.last && <TbWorld fontSize="30px" stroke="var(--icon)" />}
                <div className="flex">
                  <h1>{link.name}</h1>
                  {link.last && <p>English</p>}
                </div>
              </div>
            );
          })}
        </Modal>
      </div>
    </>
  );
}

export default Navbar;
