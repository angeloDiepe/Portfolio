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
		tech:"React,Redux,CSS,Node,PostgreSQL",
		link:["https://angelodiepe.github.io/smartbrain","https://github.com/angeloDiepe/smartbrain"],
		image:SmartBrain
	},
	{
		name:["ROBO","FRIENDS"],
		brief:"Face recognition app made using the clarifai API",
		tech:"React,Redux,CSS,Node,PostgreSQL",
		link:["https://angelodiepe.github.io/robofriends","https://github.com/angeloDiepe/robofriends"],
		image:RoboFriends
	},
	{
		name:["INTRA","LINK"],
		brief:"Face recognition app made using the clarifai API",
		tech:"React,Redux,CSS,Node,PostgreSQL",
		link:["https://intralink.netlify.com/","https://github.com/angeloDiepe/intralink"],
		image:IntraLink
	},
	{
		name:["PORT","FOLIO"],
		brief:"Face recognition app made using the clarifai API",
		tech:"React,Redux,CSS,Node,PostgreSQL",
		link:["https://angelodiepe.netlify.com/","https://github.com/angeloDiepe/portfolio"],
		image:PortFolio
	},
	{
		name:["CALCO","REACT"],
		brief:"Face recognition app made using the clarifai API",
		tech:"React,Redux,CSS,Node,PostgreSQL",
		link:["https://angelodiepe.github.io/calcoreact","https://github.com/angeloDiepe/calcoreact"],
		image:CalcoReact
	},
	{
		name:["TRANS","LATING"],
		brief:"Face recognition app made using the clarifai API",
		tech:"React,Redux,CSS,Node,PostgreSQL",
		link:["https://translating.netlify,.io/","https://github.com/angeloDiepe/translating"],
		image:TransLating
	},
]
const Portfolio = () => {
	return (
		<div className="portfolio-container">
			<span id="portfolio-title"><img src={work} alt="skill's section title" id="portfolio-image-title"/></span>
			{projects.map((project,i)=><Project name={project.name} brief={project.brief} key={i} tech={project.tech} link={project.link} image={project.image}/>)}
			<div id="bubble" className=" animated bounce infinite" style={{backgroundImage:`url(${bubble}`}}>TOUCH</div>
		</div>
	)
}

export default Portfolio