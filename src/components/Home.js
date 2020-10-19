import React from "react";
import { SimpleImg } from 'react-simple-img';
import { Parallax } from "react-parallax";
import { Header, Image} from "semantic-ui-react";
import Special from "./Specials.js";

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

const Home = () => (
  <>
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
          sizes="(max-width: 320px, max-height: 200px) 280px"
          style={insideStyles}
        />
      </div>
    </Parallax>

    <div className="homeContentGrid ">
      <Special />

      <div className="missionStatement">
        <Header.Content as="h2" style={{ padding: "1rem" }}>
          "Bringing the quality that is expected in the finest restaurants in
          the Bay Area, here to Utah."
        </Header.Content>
        <Header.Content as="h4">~ Our Promise & Commitment ~</Header.Content>
      </div>
      <div className="homeContent">
        <div className="mainImage-1">
          <SimpleImg
            fluid= "true"
            src="https://res.cloudinary.com/cmmc/image/upload/dpr_auto,f_auto,fl_any_format,q_auto/v1600797060/absSeafood/tunaOcean_ifcmtl.jpg"
            alt="large tuna being caught on single fishing line"
          />
        </div>
        <div className="mainText">
          <Header.Content as="h1" style={{ textAlign: "center" }}>
            Quality First Sourcing
          </Header.Content>
          <Header.Content as="h3" style={{ padding: "1rem 2rem" }}>
            Our seafood are sourced from the best locations around the globe. We
            also take the extra steps in making sure our suppliers are within
            our standards in terms of handling and sustainability.
          </Header.Content>
        </div>
      </div>
      <div className="homeContent">
        <div className="mainText">
          <Header.Content as="h1" style={{ textAlign: "center" }}>
            High Standard Processing
          </Header.Content>
          <Header.Content as="h3" style={{ padding: "1rem 2rem" }}>
            Fishes are processed with the highest standards. Our team is trained
            to handle seafood properly and are dedicated in maintaining quality
            so you can enjoy seafood at its finest.
          </Header.Content>
        </div>
        <div className="mainImage-1">
          <SimpleImg
            fluid= "true"
            src="https://res.cloudinary.com/cmmc/image/upload/dpr_auto,f_auto,fl_any_format,q_auto/v1600797021/absSeafood/TunaSlab_ij77ne.jpg"
            alt="tuna being processed in kitchen setting"
          />
        </div>
      </div>
    </div>
  </>
);

export default Home;
