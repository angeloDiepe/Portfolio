import React from 'react'
import github from '../../assets/github.svg'
import twitter from '../../assets/twitter.svg'
import linkedin from '../../assets/linkedin.svg'
import githubWhite from '../../assets/githubWhite.svg'
import twitterWhite from '../../assets/twitterWhite.svg'
import linkedinWhite from '../../assets/linkedinWhite.svg'
import Aux from "../../containers/hoc/Aux.js"
import './SocialMedia.css'

export default function SocialMedia( {isFooter} ) {
	return (
		<div id="social-wrapper-1" style={(isFooter)?{backgroundColor:"#5354ed"}:{backgroundColor:"white"}}>
			<div id="social-container">
			{(isFooter)?
				<Aux>
					<span id="text" style={{color:"white"}}>FOLLOW ME ON : </span>
					<span id="line"  style={{borderColor:"white"}}></span>
					<div id="social-wrapper">
						<a href="https://github.com/angeloDiepe" ><img src={githubWhite} alt="github" className="social"/></a>
						<a href="https://twitter.com/AngeloDiepe" ><img src={twitterWhite} alt="twitter" className="social"/></a>
						<a href="https://www.linkedin.com/in/diepe-angelo-1737ba17a/" ><img src={linkedinWhite} alt="linkedin" className="social"/></a>
					</div>
				</Aux>
				:
				<Aux>
					<span id="text">FOLLOW ME ON : </span>
					<span id="line"></span>
					<div id="social-wrapper">
						<a href="https://github.com/angeloDiepe" ><img src={github} alt="github" className="social"/></a>
						<a href="https://twitter.com/AngeloDiepe" ><img src={twitter} alt="twitter" className="social"/></a>
						<a href="https://www.linkedin.com/in/diepe-angelo-1737ba17a/" ><img src={linkedin} alt="linkedin" className="social"/></a>
					</div>
				</Aux>
			}
			</div>
		</div>
	)
}