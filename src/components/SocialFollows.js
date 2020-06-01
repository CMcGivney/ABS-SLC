import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faTwitter, faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons"

export default function SocialFollow() {
  return (
    <div className="social-container">
     
      <a 
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/ABS_Seafood_SLC" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/absseafood/?hl=en"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/ABSseafood"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
    </div>
  )
}