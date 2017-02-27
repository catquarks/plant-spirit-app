import React from 'react'
import Modal from 'react-modal'
import AboutApp from './about_app'
import AboutCreators from './about_creators'

const customStyles = {
  overlay: {
    Zindex: 100,
    position: 'fixed',
    backgroundColor: 'rgba(0, 10, 5, 0.8)'
  },

  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

export default function(props){

	return(
    <Modal
	    isOpen={props.modalIsOpen}
	    onAfterOpen={props.afterOpenModal}
	    onRequestClose={props.closeModal}
	    style={customStyles}
	    contentLabel="Modal"
	    closeModal={props.closeModal}
  	>
			{props.currentModal === 'about-app' ? <AboutApp /> : null}
			{props.currentModal === 'about-creators' ? <AboutCreators /> : null}
			<div style={{textAlign: 'center'}} >
		    <button onClick={props.closeModal} className="btn">
		    	Back
		  	</button>
	  	</div>
  </Modal>
  )
}
