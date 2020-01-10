import React from 'react'
import './SkillBox.css';

const SkillBox = (props) => {
	return (
		<div id="skillbox-container">
			<div id="title-skillbox">{props.title}</div>
			<div id="skillbox-wrapper-1">
				<div id="skillbox-wrapper" dangerouslySetInnerHTML={{__html: props.skill}} ></div>
			</div>
		</div>
	)
}

export default SkillBox