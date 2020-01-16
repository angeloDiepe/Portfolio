import React from 'react';
import "./Nav.css";
import logoMobile from "../../assets/logo_mobile.svg";

const Nav = (props) => {
	const toggling = (el,className) =>{
		Array.from(el.children).forEach(e => e.classList.toggle(className))
	}
	const showNav = () =>{
		let navListWrapper = document.querySelector(".nav-list-wrapper");
		let hamburger = document.querySelector(".hamburger");

		navListWrapper.classList.toggle("open");
		toggling(navListWrapper.children[0],"fade")
		toggling(hamburger,"open-hamburger")
	}
	return (
		<div className="nav-container">
			<div id="nav-logo-wrapper">
				<img src={logoMobile} alt="logo" id="nav-logo" onClick={(e)=>document.querySelector('#intro-container').scrollIntoView({behavior:'smooth'})}/>
			</div>
		 <div className="hamburger"	onClick={()=>showNav()} >
		 	<span></span>
		 	<span></span>
		 	<span></span>
		 </div>
		 <div className="nav-list-wrapper">
			<ul className="nav-list-container">
				<li className="nav-list-item"><a href="#about-container"className="nav-link-item" onClick={(e)=>showNav()} >ABOUT ME</a></li>
				<li className="nav-list-item"><a href="#skills-container" className="nav-link-item"  onClick={(e)=>showNav()}>SKILLS</a></li>
				<li className="nav-list-item"><a href="#portfolio-container" className="nav-link-item"  onClick={(e)=>showNav()}>PORTFOLIO</a></li>
				<li className="nav-list-item"><a href="#contact-container" className="nav-link-item"  onClick={(e)=>showNav()}>CONTACT</a></li>
				<li className="nav-list-item"><a href="#" id="blog-link" className="nav-link-item">POSTS</a></li>
			</ul>
		</div>
	</div>
	)
}

export default Nav;