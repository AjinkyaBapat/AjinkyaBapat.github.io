import React from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import { Fade } from "react-reveal";

export default function Contact() {
    return (
        <Fade bottom duration={1000} distance="20px">
            <div class="react-reveal main" id="contact" style="animation-fill-mode: both; animation-duration: 1000ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1; animation-name: react-reveal-352060482634646-4;">
                <h1 class="prof-title">Reach Out to me!</h1>
                <div class="row">
                    <div class="main-content-profile">
                        <div class="blog-header">
                            <p class="subTitle blog-subtitle">Discuss a project or just want to say hi? My Inbox is open for all.</p>
                        </div>



                        <div class="location-div"><span class="desc-prof"><svg viewBox="0 0 12 16" version="1.1" width="20" height="18" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path>
                                </svg>Karachi , Pakistan</span></div>
                        <div class="opp-div"><span class="desc-prof">Open for opportunities: Yes</span></div>
                        <div class="social-media-div"><a href="https://github.com/saadpasta" class="icon-button github" target="_blank"><i class="fab fa-github"></i><span></span></a><a href="https://www.linkedin.com/in/saadpasta/" class="icon-button linkedin" target="_blank"><i class="fab fa-linkedin-in"></i><span></span></a><a href="mailto:saadpasta70@gmail.com" class="icon-button google" target="_blank"><i class="fab fa-google"></i><span></span></a><a href="https://gitlab.com/saadpasta" class="icon-button gitlab" target="_blank"><i class="fab fa-gitlab"></i><span></span></a><a href="https://www.facebook.com/saad.pasta7" class="icon-button facebook" target="_blank"><i class="fab fa-facebook-f"></i><span></span></a><a href="https://medium.com/@saadpasta" class="icon-button medium" target="_blank"><i class="fab fa-medium"></i><span></span></a><a href="https://stackoverflow.com/users/10422806/saad-pasta" class="icon-button stack-overflow" target="_blank"><i class="fab fa-stack-overflow"></i><span></span></a></div>
                    </div>
                    <div class="image-content-profile"><img class="profile-image" src="https://avatars2.githubusercontent.com/u/23307811?u=eab46b153eef3f5183930e61898b462447af9219&amp;v=4" alt="Saad Pasta"></div>
                </div>
            </div>
        </div>
        </Fade>
    );
}
