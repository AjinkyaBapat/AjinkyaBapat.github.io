import React from "react";
import "./Contact.css";
import "../../components/githubProfileCard/GithubProfileCard.css";
import "../../containers/blogs/Blogs.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import { Fade } from "react-reveal";

export default function Contact() {
    return (
        <Fade bottom duration={1000} distance="20px">
            <div class="react-reveal main" id="contact" style="animation-fill-mode: both; animation-duration: 1000ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1; animation-name: react-reveal-826437549630008-4;">

                <h1 class="prof-title">Reach Out to me!</h1>

                <div class="row">

                    <div class="main-content-profile">

                        <div className="blog-header">
                            <p class="subTitle blog-subtitle">Discuss a project or just want to say hi? My Inbox is open for all.</p>
                        </div>
        
                        <h2 class="bio-text">"<img alt="👾" draggable="false" src="https://twemoji.maxcdn.com/v/13.0.1/72x72/32-20e3.png" style="height: 1em; width: 1em; margin: 0px 0.05em 0px 0.1em; vertical-align: -0.1em;"></img>x Microsoft Azure" | <img alt="👾" draggable="false" src="https://twemoji.maxcdn.com/v/13.0.1/72x72/34-20e3.png" style="height: 1em; width: 1em; margin: 0px 0.05em 0px 0.1em; vertical-align: -0.1em;"></img>x Alibaba Cloud 
                        </h2>
                            
                        <div class="location-div">
                                <span class="desc-prof">
                                <svg viewBox="0 0 12 16" version="1.1" width="20" height="18" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path>
                                </svg>
                                Pune , India
                                </span>
                        </div>
                        
                        <div class="opp-div"><span class="desc-prof">Open for opportunities: Yes</span></div>
                            
                        <div className="contact-text-div">
                            <a className="contact-detail" href={"tel:" + contactInfo.number}>{contactInfo.number}</a>
                            <br/><br/>
                            <a className="contact-detail-email"
                            href={"mailto:" + contactInfo.email_address}>{contactInfo.email_address}</a>
                            <br/><br/>
                            <SocialMedia/>
                        </div>
                    </div>
                    
                    <div className="contact-image-div">
                        <img alt="Ajinkya Working" src={require("../../assets/images/contactMail.webp")}></img>
                    </div>
                </div>
            </div>
        </Fade>
    );
}
