import React from "react";
import { Parallax } from "react-parallax";
import { Image } from "semantic-ui-react";
import UseWindowSize from "../hooks/UseWindowSize.js";

const ParaImage = () => {
  const size = UseWindowSize();
  const insideStyles = {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    display: "flex",
    maxHeight: "40vh",
    flexDirection: "column",
    justifyContent: "center",
  };

  const mobileSize = size.height <= 414 ? "small" : "big";

  return (
    <Parallax
      bgImage="https://res.cloudinary.com/cmmc/image/upload/dpr_auto,f_auto,fl_any_format,q_auto,w_3888/v1600789204/absSeafood/utah-1953477_mfekai.jpg"
      bgImageAlt="SLC Mountains in Autumn, David Mark Image"
      strength={-100}
      href="https://pixabay.com/photos/utah-panorama-autumn-fall-colorful-1953477/"
    >
      <div className="titleBox">
        <Image
          src="https://res.cloudinary.com/cmmc/image/upload/dpr_auto,f_auto,fl_any_format,q_auto/v1600792863/absSeafood/ABS-Logo_nqz2kc.png"
          alt="Sip & Stir Logo"
          sizes={mobileSize}
          style={insideStyles}
        />
      </div>
    </Parallax>
  );
};

export default ParaImage;
