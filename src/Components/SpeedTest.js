import React, { useState, useEffect } from "react";
export default function SpeedTest(props) {
  const [seconds, setSeconds] = useState(0);
  const [timer, setTimer] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [mis, setMis] = useState(0);
  const [textColor, setTextColor] = useState(`${props.mode === "light" ? "#000000" : "#ffffff"}`);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const [showText, setShowText] = useState(
    "Tap the reload button to change the text."
  );
  const [border, setBorder] = useState("#dc354500");

  const changeText = () => {
    setShowText("Please wait...");
    fetch("https://baconipsum.com/api/?type=all-meat&sentences=3")
      .then((response) => response.json())
      .then((data) => {
        setShowText(data[0]);
      });
    setTextColor(`${props.mode === "light" ? "#000000" : "#ffffff"}`)
  };

  const validateInput = (event) => {
    let textEntered = `${event.target.value}`;
    let testText = `${showText}`;
    let matchText = testText.substring(0, textEntered.length);
    let arr = textEntered.split(/\s+/);
    let m = { seconds };
    if (timer) {
      toggle();
      setTimer(false);
    }

    if (textEntered == testText) {
      // console.log("return");
      setBorder("#28a745");
      if (!timer) {
        toggle();
        setTimer(true);
        setTextColor("#28a745")
      }
    } else if (textEntered == matchText) {
      // console.log("matched text")
      setBorder("#0d6efd");
      if (m.seconds) {
        setWpm(parseInt((arr.length * 60) / m.seconds));
      }
    } else {
      // console.log("notmatching")
      setBorder("#dc3545");
      setMis(mis + 1);
    }
    if (textEntered.length) {
      setAccuracy(
        parseInt(((textEntered.length - mis) * 100) / textEntered.length)
      );
    }
  };

  return (
    <div
      className="container speedContainer d-flex flex-column"
      style={{
        color: `${props.mode === "light" ? "#000000" : "#ffffff"}`,
        border: `0.5px solid ${
          props.mode === "light" ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)"
        }`,
        backgroundColor: `${props.mode === "light" ? "#f8f9fa" : "#212529"}`,
      }}
    >
      <div
        className="d-flex flex-row justify-content-around"
        style={{
          height: "auto",
          borderBottom: `0.5px solid ${
            props.mode === "light" ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)"
          }`,
        }}
      >
        <div className="time">
          <h4>{seconds}</h4>
          sec
        </div>
        <div className="speed">
          <h4>{wpm}</h4>wpm
        </div>
        <div className="accuracy">
          <h4>{accuracy}</h4>% Accuracy
        </div>

        <div className="accuracy">
          <h4
            onClick={() => {
              reset();
              changeText();
              setWpm(0);
              setAccuracy(100);
              setMis(0);
              setTimer(true);
              document.getElementById("test-area").value = "";
            }}
          >
            <svg
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M15.65 4.35A8 8 0 1 0 17.4 13h-2.22a6 6 0 1 1-1-7.22L11 9h7V2z"
              />
            </svg>
          </h4>
          Reload
        </div>
      </div>
      <div className="textSpeedContainer d-flex flex-grow-1 h3">
        <div className="container py-4">
          <div id="challenge">
            <div
              className="test-text user-select-none"
              style={{
                color: `${textColor}`,
              }}
            >
              {showText}
            </div>
          </div>
          <section id="test">
            <textarea
              id="test-area"
              rows="8"
              placeholder="The clock starts when you start typing..."
              onChange={validateInput}
              style={{
                border: `3px solid ${border}`,
                backgroundColor: `${
                  props.mode === "dark" ? "rgb(38 42 46)" : "#ffffff"
                }`,
                color: `${props.mode === "light" ? "#000000" : "#ffffff"}`,
                overflowY :"auto",
              }}
            />
          </section>
        </div>
      </div>
    </div>
  );
}
