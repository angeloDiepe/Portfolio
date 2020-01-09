import React,{useEffect} from 'react';
import "./About.css";
import about from "../../assets/about.svg";
import angle from "../../assets/angle.svg";
import bubble from "../../assets/bubble.svg";

const About = (props) => {
	return (
		<div className="about-container">
			<div className="about-wrapper">
				<span id="about-title"><img src={about} alt="" id="about"/></span>
				<p className="about-body">
				<img src={angle} alt="" className="angle" style={{top:"0",right:"0"}}/>
				<p id="about-body-content">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
				Mollitia sequi illum labore quia quasi fugiat, 
				dolore saepe quam molestias maxime? Natus architecto debitis odit quos,
				unde voluptates, ipsam dolores quod.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
				Mollitia sequi illum labore quia quasi fugiat, 
				dolore saepe quam molestias maxime? Natus architecto debitis odit quos,
				unde voluptates, ipsam dolores quod.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
				Mollitia sequi illum labore quia quasi fugiat, 
				dolore saepe quam molestias maxime? Natus architecto debitis odit quos,
				unde voluptates, ipsam dolores quod.
				</p>
				<img src={angle} alt="" className="angle" style={{transform:"rotate(180deg)",bottom:"0",left:"0"}}/>
				</p>	
			</div>
			<div id="bubble" className=" animated bounce infinite" style={{backgroundImage:`url(${bubble}`}}>SKILLS</div>
		</div>
		)
}

export default About;