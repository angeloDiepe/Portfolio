import React from 'react'
import github from '../../assets/github.svg'
import twitter from '../../assets/twitter.svg'
import linkedin from '../../assets/linkedin.svg'
import discord from '../../assets/discord.svg'
import './SocialMedia.css'

export default function SocialMedia() {
	return (
		<div id="social-wrapper-1">
			<div id="social-container">
				<span id="text">FOLLOW ME ON : </span>
				<span id="line"></span>
				<div id="social-wrapper">
					<img src={github} alt="github" className="social"/>
					<img src={twitter} alt="twitter" className="social"/>
					<img src={linkedin} alt="linkedin" className="social"/>
					<img src={discord} alt="discord" className="social"/>
				</div>
			</div>
		</div>
	)
}