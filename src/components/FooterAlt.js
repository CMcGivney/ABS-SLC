import React from "react";
import { Header, Icon } from "semantic-ui-react";
import SocialFollow from "./SocialFollows";

class Footer extends React.Component {
  render() {
    return (
      <div className="footerFlex">
        <Header.Content as="h1" className="mainFooter">
          ABS Seafood SLC, Utah
        </Header.Content>

        <div className="phoneNum">
          <Header.Content as="h2">
            Stan Battle
            <p style={{ fontSize: "1rem" }}>Regional Sales Manager</p>
          </Header.Content>
          {/* <Header.Content as="h4">
            <Icon name="phone" />
            <a className="email emailBox" href="tel:+1-801-441-9134">
              1-(801)-441-9134
            </a>
          </Header.Content> */}
        </div>
        <div className="emailBox">
          <Header.Content as="h4">
            <Icon name="mail" />
            <a
              className="email"
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:absseafoodslc@gmail.com?subject=Mailed from Website"
            >
              ABSSeafoodSLC@gmail.com
            </a>
          </Header.Content>
        </div>
        <div className="bizAddress">
          <Header.Content>
            <Icon name="map pin" />
            <a
              className="email"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps/place/67+W+1700+S,+Salt+Lake+City,+UT+84115/@40.7335027,-111.8955317,17z/data=!3m1!4b1!4m5!3m4!1s0x8752f52d54f48d85:0xad519ab8427c7144!8m2!3d40.7335027!4d-111.893343"
            >
              67 West 1700 South SLC, UT 84104
            </a>
          </Header.Content>
        </div>
        <div>
          <Header.Content>
            <SocialFollow />
          </Header.Content>
        </div>

        <Header.Content as="h5">
          © 2018 ABS Seafood SLC, Utah, all rights reserved.
        </Header.Content>
      </div>
    );
  }
}
export default Footer;
