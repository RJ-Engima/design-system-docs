import React from "react";
import "../assets/css/loader.scss";
import { ColorRing } from "react-loader-spinner";
export default function Loader() {
  return (
    <>
      <div id="overlay">
        <div class="center-body">
          <div class="loader-ball-3">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
