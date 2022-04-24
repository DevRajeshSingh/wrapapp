import React, { useState } from "react";
import "../App.css";

export default function MainContent(props) {
  const [inpText, setInpText] = useState("");
  const [OutputText, setOutputText] = useState(inpText);

  const changeInput = (event) => {
    setInpText(event.target.value);
    setOutputText(event.target.value);
  };
  const outputWindow = (event) => {};

  const upperCase = () => {
    setOutputText(OutputText.toUpperCase());
  };
  const lowerCase = () => {
    setOutputText(OutputText.toLowerCase());
  };

  const copyText = () => {
    if (inpText !== "") {
      navigator.clipboard.writeText(OutputText);
      alert("Text Copied To Clipboard");
    }
  };
  const spaceRemove = () => {
    let newText3 = OutputText.replace(/\s{2,}/g, " ").trim();
    setOutputText(newText3);
  };

  const clearText = () => {
    setInpText("");
  };
  const moveText = () => {
    setInpText(OutputText);
  };

  const removeSymbol = () => {
    const regex = /[0-9/A-Z/a-z/ /]/g;

    const letters = OutputText.match(regex);
    const res1 = letters.join("");
    setOutputText(res1);
  };

  const titleCase = function () {
    var i, j, str, lowers, uppers;
    str = inpText.replace(/([^\W_]+[^\s-]*) */g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });

    lowers = [
      "A",
      "An",
      "The",
      "And",
      "But",
      "Or",
      "For",
      "Nor",
      "As",
      "At",
      "By",
      "For",
      "From",
      "In",
      "Into",
      "Near",
      "Of",
      "On",
      "Onto",
      "To",
      "With",
    ];
    for (i = 0, j = lowers.length; i < j; i++)
      str = str.replace(
        new RegExp("\\s" + lowers[i] + "\\s", "g"),
        function (txt) {
          return txt.toLowerCase();
        }
      );
    uppers = ["Id", "Tv"];
    for (i = 0, j = uppers.length; i < j; i++)
      str = str.replace(
        new RegExp("\\b" + uppers[i] + "\\b", "g"),
        uppers[i].toUpperCase()
      );
    setOutputText(str);
  };

  const download = () => {
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(OutputText)
    );
    element.setAttribute("download", "wrap");

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };
  return (
    <div
      className="d-flex justify-content-around"
      style={{ minHeight: "90vh" }}
      id="mainInputContainer"
    >
      <div className="container">
        <form className="container px-0 mt-4">
          <div className="form-group">
            <label
              htmlFor="exampleFormControlTextarea1"
              style={{
                color: `${props.mode === "light" ? "#000000" : "#ffffff"}`,
                backgroundColor: "rgba(0,0,0,0.1)",
                width: "100%",
                height: "25px",
                border: `1px solid ${
                  props.mode === "dark"
                    ? "rgba(255,255,255,0.8)"
                    : "rgba(0, 0, 0, 0.2)"
                }`,

                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px",
              }}
            >
              Enter or Paste Your Text Here
            </label>
            <textarea
              className="form-control mh-100"
              id="exampleFormControlTextarea1"
              rows="20"
              value={inpText}
              onChange={changeInput}
              style={{
                color: `${props.mode === "light" ? "#000000" : "#ffffff"}`,
                backgroundColor: `${
                  props.mode === "light" ? "#f8f9fa" : "#212529"
                }`,
                borderTopLeftRadius: "0px",
                borderTopRightRadius: "0px",
                borderTop: "0px",
                overflowY:"auto"
              }}
            ></textarea>
          </div>
        </form>
      </div>
      <div
        className="flex-column d-flex py-3 mt-2 textButtons"
        style={{ gap: "15px", minWidth: "15vw" }}
      >
        <button type="button" className="btn btn-primary" onClick={upperCase}>
          Upper Case
        </button>
        <button type="button" className="btn btn-primary" onClick={lowerCase}>
          Lower Case
        </button>
        <button type="button" className="btn btn-primary" onClick={titleCase}>
          Title Case
        </button>
        <button type="button" className="btn btn-primary" onClick={spaceRemove}>
          Remove Space
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={removeSymbol}
        >
          Remove Symbols
        </button>
        <button type="button" className="btn btn-primary" onClick={moveText}>
          Move to Input
        </button>
        <button type="button" className="btn btn-primary" onClick={download}>
          Download (.txt)
        </button>
        <button type="button" className="btn btn-primary" onClick={copyText}>
          Copy
        </button>
        <button type="button" className="btn btn-primary" onClick={clearText}>
          Clear
        </button>
      </div>
      <div className="container">
        <form className="container px-0 mt-4">
          <div className="form-group">
            <label
              style={{
                color: `${props.mode === "light" ? "#000000" : "#ffffff"}`,
                backgroundColor: "rgba(0,0,0,0.1)",
                width: "100%",
                height: "25px",
                border: `1px solid ${
                  props.mode === "dark"
                    ? "rgba(255,255,255,0.8)"
                    : "rgba(0, 0, 0, 0.2)"
                }`,

                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px",
              }}
            >
              Words :{" "}
              {
                inpText
                  .replace(/\n/g, " ")
                  .split(" ")
                  .filter((value) => value != "").length
              }{" "}
              &emsp; Characters : {inpText === "" ? 0 : inpText.length}
            </label>
            <textarea
              className="form-control mh-100"
              rows="20"
              style={{
                color: `${props.mode === "light" ? "#000000" : "#ffffff"}`,
                backgroundColor: `${
                  props.mode === "light" ? "#f8f9fa" : "#212529"
                }`,
                borderTopLeftRadius: "0px",
                borderTopRightRadius: "0px",
                borderTop: "0px",
                overflowY:"auto"

              }}
              value={
                inpText === ""
                  ? "Result will be displayed here...."
                  : OutputText
              }
              onChange={outputWindow}
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}
