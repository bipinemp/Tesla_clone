import React from "react";

import { Sections } from "./Sections";
import { BiDownArrowAlt } from "react-icons/bi";

// import { useWindowScrollPosition } from "../hooks/ScrollHook";
import "./css/section.css";
import Footer from "./Footer";

function Section() {
  // const { scrollX, scrollY } = useWindowScrollPosition();

  return (
    <div className="section">
      {Sections.map((section) => {
        return (
          <section>
            <img
              src={section.model}
              alt={section.name}
              style={{ width: section.last ? "500px" : "" }}
            />
            <h1 style={{ marginLeft: section.last && "40px", top: "14%" }}>
              {section.name}
            </h1>
            {!section.last && (
              <p>
                {section.namesec ? section.namesec : "Schedule a Test Drive"}
              </p>
            )}
            <div className={section.last ? "last-btn" : "section-btns"}>
              <span
                style={{
                  marginLeft: section.last && "30px",
                  backgroundColor: section.last && "#171a20",
                }}
              >
                {section.last ? "Shop Now" : "Custom Order"}
              </span>
              {!section.last && <span>Existing Inventory</span>}
            </div>
            {section.scroll && (
              <span className="arrow-icon">
                <BiDownArrowAlt
                  className="arrow-icon"
                  fontSize="30px"
                  fill="var(--footer-txt)"
                />
              </span>
            )}
            {section.last && <Footer />}
          </section>
        );
      })}
    </div>
  );
}

export default Section;
