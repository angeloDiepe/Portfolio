import React,{useEffect} from 'react';
import "./Nav.css";
import logoMobile from "../../assets/logo_mobile.svg";

const Nav = (props) => {
	const toggleHaburger = (el) =>{
		Array.from(el.children).forEach(span => span.classList.toggle("open-hamburger"))
	}
	const toggleNavList = (el) =>{
		el.classList.toggle("open");
		Array.from(el.children[0].children).forEach(li => li.classList.toggle("fade"))
	}
	const showNav = () =>{
		let navListWrapper = document.querySelector(".nav-list-wrapper");
		let hamburger = document.querySelector(".hamburger");
		toggleHaburger(hamburger)
		toggleNavList(navListWrapper)

		// navListWrapper.classList.toggle("open");
		// Array.from(navListWrapper.children).forEach(li => li.classList.toggle("fade"))
		// Array.from(hamburger.children).forEach(span => span.classList.toggle("open-hamburger"))
	}
	return (
		<div className="nav-container">
			<div id="nav-logo-wrapper">
				<img src={logoMobile} alt="logo" id="nav-logo"/>
			</div>
		 <div className="hamburger"	onClick={()=>showNav()} >
		 	<span></span>
		 	<span></span>
		 	<span></span>
		 </div>
		 <div className="nav-list-wrapper">
			<ul className="nav-list-container">
				<li className="nav-list-item"><a href="#"className="nav-link-item">ABOUT ME</a></li>
				<li className="nav-list-item"><a href="#" className="nav-link-item">SKILLS</a></li>
				<li className="nav-list-item"><a href="#" className="nav-link-item">PORTFOLIO</a></li>
				<li className="nav-list-item"><a href="#" className="nav-link-item">CONTACT</a></li>
				<li className="nav-list-item"><a href="#" id="blog-link" className="nav-link-item">POSTS</a></li>
			</ul>
		</div>
	</div>
	)
}

export default Nav;