import React from "react";
import './Footer.css'
import youtube_icon from './../assets/youtube_icon.png'
import face_icon from './../assets/facebook_icon.png'
import instagram_icon from './../assets/instagram_icon.png'
import tweet_icon from './../assets/twitter_icon.png'

const Footer =()=>{

  return(
    <div className="Footer">
        <div className="footer-icons">
  
          <img src={face_icon} alt="" />
          <img src={instagram_icon} alt="" />
          <img src={tweet_icon} alt="" />
          <img src={youtube_icon} alt="" />
        </div>
        <ul>
          <li>Audio Description</li>
          <li>Help Center</li>
          <li>Gift Cards</li>
          <li>Media centre</li>
          <li>Investor Relation</li>
          <li>Jobs</li>
          <li>Terms of use</li>
          <li>Legal Notices</li>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
          <li>Contact us</li>
        </ul>
        <p className="copyright-text">254 746555422 copyright</p>
        </div>
  )

}


export default Footer