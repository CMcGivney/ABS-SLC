import React from "react"
import { Icon } from 'semantic-ui-react'

export default function SocialFollow() {
  return (
    <div className="social-container">
     
      <a 
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/ABS_Seafood_SLC" className="twitter social"
        >
        <Icon size="big" name="twitter" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/absseafood/?hl=en"
        className="instagram social"
      >
        <Icon size="big" name="instagram" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/ABSseafood"
        className="facebook social"
      >
        <Icon size="big" name="facebook" />
      </a>
    </div>
  )
}