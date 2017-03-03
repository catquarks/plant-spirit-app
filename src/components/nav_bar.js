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
					<ul id="dropdown1" className="dropdown-content">
		        <li><span className="link waves-effect waves-light" onClick={clickAboutApp}>How to Use This App</span></li>
		        <li><span className="link waves-effect waves-light" onClick={clickAboutCreators}>About the Creators</span></li>
					</ul>
		      <ul className="right">

            <li><a className="dropdown-button link waves-effect waves-light" href="#!" data-activates="dropdown1">About This App<i className="material-icons right">arrow_drop_down</i></a></li>
		      </ul>
		      <a href="#!" className="brand-logo left">
		      	Plant Spirit App
	      	</a>

		    </div>
		  </nav>
	  </div>

	)

}

