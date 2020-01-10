import React from 'react';
import SkillBox from "../SkillBox/SkillBox.js";
import skill from "../../assets/skill.svg";
import "./Skills.css";

const Skills = (props) => {
	const skills = [
		{title:"Frontend Techs",lang:'HTML <br/> CSS3 <br/> JAVASCRIPT <br/> BOOTSTRAP <br/> TACHYONS <br/> PUG <br/> JSON <br/> REACT (REDUX) <br/>'},
		{title:"Backend Techs",lang:'NODE <br/> EXPRESS <br/> MYSQL <br/> POSTGRESQL <br/>'},
		{title:"Other Techs/Tools",lang:'GIT/GITHUB <br/> HEROKU <br/> NETLIFY <br/> POSTMAN <br/> JEST <br/> PHOTOSHOP <br/> ADOBE XD <br/> LINUX <br/> SSH <br/> NETWORK ADMINISTRATION <br/>'}
	]
	return (
		<div className="skills-container">
			<span id="skills-title"><img src={skill} alt="skill's section title" id="skills-image-title"/></span>
			<div className="skills-wrapper-1">
				<div className="skills-wrapper">
				{skills.map(skill=>
					<SkillBox skill={skill.lang} title={skill.title}>
					</SkillBox>)
				}
				</div>
				<div id="lang-skill">
					<span id="lang-title">I Speak :</span>
					<div id="lang-skill-container">
						<span id="en">English</span>
						&&
						<span id="fr">French</span>
					</div>
				</div>
			</div>
		</div>
		)
}

export default Skills;