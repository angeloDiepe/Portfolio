import React,{useEffect} from 'react';
import "./About.css";
import about from "../../assets/about.svg";
import angle from "../../assets/angle.svg";
import bubble from "../../assets/bubble.svg";

const About = (props) => {
	return (
		<div id="about-container">
			<div className="about-wrapper">
				<span id="about-title"><img src={about} alt="" id="about"/></span>
				<p className="about-body">
				<img src={angle} alt="" className="angle" style={{top:"0",right:"0"}}/>
				<p id="about-body-content">
					Hi, It's Angelo, Software Developer and Network Administrator based in Cameroon,
					Studies in IUT Douala and by July will be in possession of DUT in Network and Telecommunication 😋
					<br/>
					<br/>
					Passionate software dev who loves learning new Techs and has an eye on Design, is dynamic, creative, open minded and strives at problem
					solving. Is a critical thinker, loves working in a team and is enthusiastic about Artificial Intelligence.
					If you would like to build something together or just chat, let's <a href="#contact-container" >get in touch!</a>
					<br/>
					<br/>
					Also Likes Basketball, Gaming, Mangas
				</p>
				<img src={angle} alt="" className="angle" style={{transform:"rotate(180deg)",bottom:"0",left:"0"}}/>
				</p>	
			</div>
		</div>
		)
}

export default About;