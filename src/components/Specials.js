import React from "react";
import { Header, Image, Button } from "semantic-ui-react";
import PhishBox from "../images/packaging-scaled.jpg";

const Specials = () => (
  <>
    <div className="specialBanner">
      <Header.Content as="h2" className="bannerHead">
        ABS Seafood SLC Specials
      </Header.Content>
      <Header.Content as="h4" className="bannerMeta">
        * Now Available Online at
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://comcomkitchen.com/"
        >
          {" "}
          ComComKitchen.com
        </a>{" "}
        *
      </Header.Content>
    </div>
    <div className="homeContent">
      <div className="mainImage-1">
        <Image fluid src={PhishBox} alt="special fish box" />
      </div>
      <div className="mainText">
        <Header.Content as="h1">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://comcomkitchen-ghostsushi.square.site/abs-fishbox-slc"
            className="aContent"
          >
            Seafood Dinner Box
          </a>
        </Header.Content>
        <Header.Content as="h5">
          2 – 6oz{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.kvaroyarctic.com/salmon"
            className="aContent"
          >
            Kvaroy Premium Arctic Salmon
          </a>{" "}
          (Hands down the best Salmon we have ever tasted)
        </Header.Content>
        <Header.Content as="h5">
          4 - Whole, head-off, butterflied, Branzino portions
        </Header.Content>
        <Header.Content as="h5">1lbs Jonah Crab Claws</Header.Content>
        <Header.Content as="h5">$60.00</Header.Content>
        <Header.Content as="h6">*availability may be limited*</Header.Content>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://comcomkitchen-ghostsushi.square.site/abs-fishbox-slc"
        >
          <Button>Order Now</Button>
        </a>
      </div>
    </div>
  </>
);

export default Specials;
