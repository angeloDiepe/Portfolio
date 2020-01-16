import React from 'react';
import Project from '../Project/Project.js'
import work from "../../assets/work.svg"
import SmartBrain from "../../assets/SmartBrain.jpg"
import RoboFriends from "../../assets/RoboFriends.jpg"
import IntraLink from "../../assets/IntraLink.jpg"
import PortFolio from "../../assets/PortFolio.jpg"
import TransLating from "../../assets/TransLating.jpg"
import CalcoReact from "../../assets/CalcoReact.jpg"
import bubble from "../../assets/bubble.svg";
import './Portfolio.css';

const projects = [
	{
		name:["SMART","BRAIN"],
		brief:"Face recognition app made using the clarifai API",
		tech:"React,Redux,CSS,Node,PostgreSQL,Clarifai API",
		link:["https://angelodiepe.github.io/smartbrain","https://github.com/angeloDiepe/smartbrain"],
		image:SmartBrain
	},
	{
		name:["ROBO","FRIENDS"],
		brief:"Searchable list of Robots from the RoboHash API",
		tech:"React,Redux,CSS,RoboHash API",
		link:["https://angelodiepe.github.io/robofriends","https://github.com/angeloDiepe/robofriends"],
		image:RoboFriends
	},
	{
		name:["INTRA","LINK"],
		brief:"(In Progress!) Local Community Plateform for IUT Douala where you can chat,watch articles,participate in a class all working without Internet",
		tech:"React,Redux,CSS,Node,PostgreSQL, Redis,VoIP,Network Administration",
		link:["#","https://github.com/angeloDiepe/intralink"],
		image:IntraLink
	},
	{
		name:["PORT","FOLIO"],
		brief:"My Responsive Personnal Portfolio",
		tech:"React,CSS",
		link:["https://angelodiepe.netlify.com/","https://github.com/angeloDiepe/portfolio"],
		image:PortFolio
	},
	{
		name:["CALCO","REACT"],
		brief:"Simple Calculator",
		tech:"React,CSS",
		link:["https://angelodiepe.github.io/calcoreact","https://github.com/angeloDiepe/calcoreact"],
		image:CalcoReact
	},
	{
		name:["TRANS","LATING"],
		brief:"Translating app where you can search word's translations,test your knowledge of a certain language and add words for your local database ",
		tech:"React,Redux,CSS,Node,PostgreSQL,IBM-Watson API",
		link:["https://translating.netlify,.io/","https://github.com/angeloDiepe/translating"],
		image:TransLating
	},
]
const Portfolio = () => {
	return (
		<div id="portfolio-container">
			<span id="portfolio-title"><img src={work} alt="skill's section title" id="portfolio-image-title"/></span>
			{projects.map((project,i)=><Project name={project.name} brief={project.brief} key={i} tech={project.tech} link={project.link} image={project.image}/>)}
		</div>
	)
}

export default Portfolio