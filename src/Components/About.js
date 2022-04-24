import React, { useState } from "react";
import Contact from "./Contact";

export default function About(props) {
  let st = {
    border: `0.5px solid ${
      props.mode === "light" ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)"
    }`,
    padding: "10px",
    borderRadius: "5px",
    marginTop: "10px",
    color: `${props.mode === "light" ? "#000000" : "#ffffff"}`,
  };
  let st2 = {
    backgroundColor: `${
      props.mode === "light" ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)"
    }`,
  };
  return (
    <div className="container" style={st}>
      This website aims to help you with tasks where text formatting is needed.
      <br />
      Wrap can also quickly tell you how many words and characters are in your
      text.
      <hr />
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item" style={st2}>
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseOne"
              style={{
                color: `${props.mode === "light" ? "#000000" : "#ffffff"}`,
                backgroundColor: `${
                  props.mode === "light" ? "#F7F9FA" : "#212529"
                }`,
              }}
            >
              Q1 : What is this website for.
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              This is <strong>Text editing and Typing Speed Website .</strong>{" "}
              It is a free tool where you can edit your text document and Check
              your typing speed. 
            </div>
          </div>
        </div>
        <div className="accordion-item" style={st2}>
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
              style={{
                color: `${props.mode === "light" ? "#000000" : "#ffffff"}`,
                backgroundColor: `${
                  props.mode === "light" ? "#F7F9FA" : "#212529"
                }`,
              }}
            >
              Q2 : How to use Text Editor.
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body">
              To use<strong> Text Editor</strong> you have to enter your text on
              input box and press the buttons to perform operatios on the text
              document. <br />
              Your Result will be displayed on the output window.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={st2}>
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
              style={{
                color: `${props.mode === "light" ? "#000000" : "#ffffff"}`,
                backgroundColor: `${
                  props.mode === "light" ? "#F7F9FA" : "#212529"
                }`,
              }}
            >
              Q3 : How to use Speed Type.
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              To use<strong> Speed Type</strong> you have to enter your text on
              input box by reading the text given on the screen.
              <br />
              The timer will automatically start  when you start typing and automatically stop when you write the whole text correctly.
              <br />The result will be mentioned on the screen.
            </div>
          </div>
        </div>
      </div>
      <hr />
      <Contact />
    </div>
  );
}
