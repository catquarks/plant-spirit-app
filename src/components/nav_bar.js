import React from 'react'

export default function(props){

	function clickAboutApp(){
		props.handleModalClick('about-app')
	}

	function clickAboutCreators(){
		props.handleModalClick('about-creators')
	}

	return(
		<div className="navbar-fixed">
		  <nav>
		    <div className="nav-wrapper">
		      <a href="#!" className="brand-logo left">
		      	Plant Spirit App
	      	</a>
		      <ul className="right">
		        <li><span className="link waves-effect waves-light" onClick={clickAboutApp}>How to Use This App</span></li>
		        <li><span className="link waves-effect waves-light" onClick={clickAboutCreators}>About the Creators</span></li>
		      </ul>
		    </div>
		  </nav>
	  </div>

	)

}

