import React from 'react'
import './Project.css'

const Project = ({name,brief,tech,image,link}) => {
	return (
		<div className="project-container">
			<div className="project-wrapper">
				<div className="about-project">
					<h1 className="project-name">
						<span className="first">{name[0]}</span>
						<span className="second">{name[1]}</span>
					</h1>
					<div className="project-desc">
						<p className="brief" >{brief}</p>
						<p className="techs"><span className="bold">Techs :</span> {tech} </p>
					</div>
					<div className="project-links">
						<a href={link[0]} className="visit">VISIT</a>
						<a href={link[1]} className="code">CODES</a>
					</div>
				</div>
				<div className="image-container"><img src={image} alt={`preview of ${name[0].concat(name[1])}`} className="image"/><div className="gradient"></div></div>	
			</div>
		</div>
	)
}

export default Project