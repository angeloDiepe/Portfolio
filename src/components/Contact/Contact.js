import React from 'react'
import SocialMedia from '../SocialMedia/SocialMedia.js'
import touch from '../../assets/touch.svg'
import love from '../../assets/love.svg'
import send from '../../assets/send.svg'
import logo_footer from '../../assets/logo_footer.svg'
import top from '../../assets/top1.svg'
import './Contact.css'

const Contact = () => {
	const toggle = (e,type) =>{
		if(type==="increase"){
			if (Array.from(e.classList).includes('decrease')) {
				e.classList.remove('decrease');
			}
		}
		else{
			if (Array.from(e.classList).includes('increase')) {
				e.classList.remove('increase');
			}
		}
		e.classList.toggle(type);
	}
	return (
		<div id="contact-container">
			<span id="contact-title"><img src={touch} alt="contact's section title" id="contact-image-title"/></span>
			<div id="contact-wrapper">
				<SocialMedia isFooter={true} />
				<form action="" id="form-container">
					<div className="input-container">
						<div className="input-wrapper">
							<input type="text" name="name" placeholder="Name" className="input-text"  onBlur={(e)=>{toggle(e.currentTarget.parentNode.children[1],'decrease')}} onFocus={(e)=>toggle(e.currentTarget.parentNode.children[1],'increase')}/>
							<span className="focus-line"></span>
						</div>
					</div>
					<div className="input-container">
						<div className="input-wrapper">
							<input type="email" name="email" placeholder="Email" className="input-text" onBlur={(e)=>{toggle(e.currentTarget.parentNode.children[1],'decrease')}} onFocus={(e)=>toggle(e.currentTarget.parentNode.children[1],'increase')}/>
							<span className="focus-line"></span>
						</div>
					</div>
					<div id="textzone-container">
						<div className="input-wrapper">
							<textarea name="message" placeholder="Message" id="textzone" onBlur={(e)=>{toggle(e.currentTarget.parentNode.children[1],'decrease')}} onFocus={(e)=>{toggle(e.currentTarget.parentNode.children[1],'increase')}}></textarea>
							<span className="focus-line"></span>
						</div>
					</div>
					<div id="button-container">
						<a href={''} id="button"><img src={send} alt="send button image" id="send-image"/></a>
					</div>
				</form>
			</div>
			<footer id="footer">Design and Coded With <img src={love} alt="love image" id="love"/> By Angelo <img src={logo_footer} alt="logo image" id="logo-footer"/> 2020</footer>	
		</div>
	)
}

export default Contact
