import React from "react";

import Images from "assets/images";
import "./Loading.scss";

function Loading() {
  return (
    <div className="loading">
      <img src={Images.Logo} alt="loading" />
    </div>
  );
}

export default Loading;
