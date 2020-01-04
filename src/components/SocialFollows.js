import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faTwitter, faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons"

export default function SocialFollow() {
  return (
    <div className="social-container">
     
      <a href="https://twitter.com/Elysian_Truck" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/elysiancatering/"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a
        href="https://www.facebook.com/Americasfoodtruck/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
    </div>
  )
}