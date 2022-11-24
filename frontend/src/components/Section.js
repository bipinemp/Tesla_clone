import React from "react";

import { Sections } from "./Sections";
import { AiOutlineDown } from "react-icons/ai";

import "./css/section.css";
import Footer from "./Footer";

function Section() {
  return (
    <div className="section">
      {Sections.map((section) => {
        return (
          <section
            style={{
              background: `url(${section.model})`,
              height: "100vh",
              backgroundSize: section.last ? "contain" : "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <h1>{section.name}</h1>
            {!section.last && (
              <p>
                {section.namesec ? section.namesec : "Schedule a Test Drive"}
              </p>
            )}
            <div className={section.last ? "last-btn" : "section-btns"}>
              <span
                style={{
                  backgroundColor: section.last && "#171a20",
                }}
              >
                {section.last ? "Shop Now" : "Custom Order"}
              </span>
              {!section.last && <span>Existing Inventory</span>}
            </div>
            {section.scroll && (
              <span className="arrow-icon">
                <AiOutlineDown
                  className="arrow-icon"
                  fontSize="25px"
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
