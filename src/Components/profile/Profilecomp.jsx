import React from "react";
import PortraitIcon from "@mui/icons-material/Portrait";
import "./Profilecomp.scss";

function profilecomp() {
  return (
    <div>
      <div className="profileContainer">
        <div className="subProfileContainer">
          <div className="profileimage">
            {<PortraitIcon style={{ fontSize: "10rem" }} />}
          </div>
          <div className="profileName" style={{ fontSize: "2rem" }}>
            Name: Thomas Lowery
          </div>
          <div className="profilePosition" style={{ fontSize: "2rem" }}>
            Position: Software Developer
          </div>
        </div>
      </div>
    </div>
  );
}

export default profilecomp;
