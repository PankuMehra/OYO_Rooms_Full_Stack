import React from "react";
import { useState } from "react";
import "./World.css";

export default function World() {
  const [uae, setuae] = useState(false);
  const [nepal, setnepal] = useState(false);
  const [china, setchina] = useState(false);
  const [india, setindia] = useState(false);
  const [malayasia, setmalayasia] = useState(false);
  const [indo, setindo] = useState(false);
  const handleUae = () => {
    setuae(true);
  };
  const handlenepal = () => {
    setnepal(true);
  };
  const handlechina = () => {
    setchina(true);
  };
  const handleindia = () => {
    setindia(true);
  };
  const handlemalayasia = () => {
    setmalayasia(true);
  };
  const handleindo = () => {
    setindo(true);
  };
  return (
    <div>
      <div className="world-wide">
        {/* <div>
          <img src="/Images/map.png" alt="landing background map" />
          {uae ? <div className="uaeDiv">UAE</div> : null}
          <img
            src="/Images/uae.png"
            alt="uae"
            className="uae"
            onMouseEnter={handleUae}
            onMouseLeave={() => {
              setuae(false);
            }}
          />
          {nepal ? <div className="nepalDiv">Nepal</div> : null}
          <img
            src="/Images/nepal.png"
            alt="nepal"
            className="nepal"
            onMouseEnter={handlenepal}
            onMouseLeave={() => {
              setnepal(false);
            }}
          />
          {china ? <div className="chinaDiv">China</div> : null}
          <img
            src="/Images/china.png"
            alt="china"
            className="china"
            onMouseEnter={handlechina}
            onMouseLeave={() => {
              setchina(false);
            }}
          />
          {india ? <div className="indiaDiv">India</div> : null}
          <img
            src="/Images/india.png"
            alt="india"
            className="india"
            onMouseEnter={handleindia}
            onMouseLeave={() => {
              setindia(false);
            }}
          />
          {malayasia ? <div className="malayasiaDiv">Malayasia</div> : null}
          <img
            src="/Images/malayasia.png"
            alt="malayasia"
            className="malayasia"
            onMouseEnter={handlemalayasia}
            onMouseLeave={() => {
              setmalayasia(false);
            }}
          />
          {indo ? <div className="indoDiv">Indonesia</div> : null}
          <img
            src="/Images/indonesia.png"
            alt="indonesia"
            className="indonesia"
            onMouseEnter={handleindo}
            onMouseLeave={() => {
              setindo(false);
            }}
          />
        </div> */}
        <div className="world-wide-right-section">
          <img
            style={{
              width: "100%",
            }}
            src="/Images/worldsOyo.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
