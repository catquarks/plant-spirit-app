import React from 'react'

export default function() {

	return(

		  <nav>
		    <div className="nav-wrapper">
		      <a href="#!" className="brand-logo center">
		      	Plant Spirit App
		      	<img src="sun.png" id="logo" />
		      	<i className="material-icons">star</i>
	      	</a>
		      <a href="#" data-activates="collapsible" className="button-collapse"><i className="material-icons">menu</i></a>
		      <ul className="right hide-on-med-and-down">
		        <li><a href="sass.html">How to Use This App</a></li>
		        <li><a href="badges.html">About Bethany</a></li>
		        <li><a href="http://www.oluminousbeing.com/" target="_blank">O Luminous Being</a></li>
		      </ul>
		      <ul className="side-nav" id="collapsible">
		        <li><a href="sass.html">Sass</a></li>
		        <li><a href="badges.html">Components</a></li>
		        <li><a href="collapsible.html">Javascript</a></li>
		        <li><a href="mobile.html">Mobile</a></li>
		      </ul>
		    </div>
		  </nav>


	)

}

