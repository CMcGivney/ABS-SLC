import React from "react";
import { Header, Button, Card, } from "semantic-ui-react";

const specialDisplay = {
  display: "flex",
  flexFlow: "column nowrap",
  margin: "1rem 1rem",
  width: "100%",
  justifyContent: "center"
}

const Specials = () => (
  <>
   <div className="specialBanner"></div>
    <div style={specialDisplay}>
     <div style={{'textAlign': "center", }}>      
      <Header.Content as="h2" className="bannerHead">
        ABS Seafood SLC Specials
       </Header.Content>
       <Header.Content as="h4" className="bannerMeta">
        * Order Online at
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

      <Card className="mainText" raised>
        <Card.Content as="h5">
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
        </Card.Content>
        <Card.Content as="h5">
          4 - Whole, head-off, butterflied, Branzino portions
        </Card.Content>
        <Card.Content as="h5">1lbs Jonah Crab Claws</Card.Content>
        <Card.Content as="h5">$60.00</Card.Content>
        <Card.Header as="h6" style={{"fontStyle": "italic"}}>* items & availability subject to change *</Card.Header>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://comcomkitchen-ghostsushi.square.site/abs-fishbox-slc"
        >
          <Button style={{margin: ".5rem"}}>Check Availability</Button>
        </a>
      </Card>
    </div>
  </>
);

export default Specials;
