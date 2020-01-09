import React from 'react';
import SocialMedia from '../SocialMedia/SocialMedia.js'
import "./Intro.css";
import Resume from "../../assets/NOUBISSIE DIEPE ANGE ODILON CV.pdf";
import me from "../../assets/me.svg";


export default class Intro extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: [ 
			 	"UI/UX DESIGNER",
			 	"NETWORK ADMINISTRATOR",
			 	"LOVE LEARNING NEW TECHS"
			],
			show: "",
			shallowCount:0,
			deepCount:0
		}
		this.reverse = false;
	}
	update(){
		let length = this.state.text[this.state.shallowCount].length+10;
		let shallowCount = this.state.shallowCount;
		let deepCount = this.state.deepCount;
		let tempText = this.state.text[shallowCount]
		let letter = tempText.charAt(deepCount)
		let newText = this.state.show + letter;
		let nextDcount = this.state.deepCount + 1;

		if( deepCount >= length ){
			let newText = this.state.show.split("");
			newText.splice((-1*(this.state.text[this.state.shallowCount].length-1))/10);
			newText = newText.join("");
			 this.setState({
			show:newText,
			},()=>{
				if (this.state.show === "" && this.state.shallowCount < 2) {
					 this.setState({
						shallowCount:this.state.shallowCount+1,
						deepCount:0
					})
				}else if(this.state.shallowCount === 2 && this.state.show === ""){
					 this.setState({shallowCount:0,deepCount:0})
				}
			})
		}
		else{
			 this.setState({
				show:newText,
				deepCount:nextDcount
			},)
		}
	}
	componentDidMount() {
		 this.typeTimer = setInterval(()=>
		 		this.update()
			,150)
	}

  componentWillUnmount(){
		clearInterval(this.typeTimer)
	}
	render() {
		return (
			<div className="intro-container">
				<SocialMedia/>
				<div id="intro-wrapper">
					<div id="profile-wrapper">
						<div id="profile-container"><span id="line-profile"></span></div>
					</div>
					<div id="intro-text-resume-block">
						<p id="intro-text">
						<span className="typewritter" id="hello">HELLO, <span id="break">I'M <span className="typewritter" id="name">ANGELO</span></span></span>
						<span className="typewritter" className="other">FULLSTACK JAVASCRIPT DEVELOPER <br/> <span className="typewritter" className="other" style={{fontStyle:"italic"}}>{this.state.show}</span>
						</span>
						</p>
						<a href={Resume} id="download-resume">Get Resume</a>
					</div>
				</div>
				<div id="me" className=" animated bounce infinite" style={{backgroundImage:`url(${me}`}}>ME</div>
			</div>
		);
	}
}
