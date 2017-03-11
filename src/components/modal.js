import React from 'react'
import Modal from 'react-responsive-modal'
import AboutApp from './about_app'
import AboutCreators from './about_creators'
import Image from './image'


function ModalCloseButton(props){

  return(
    <div style={{textAlign: 'center'}} >
      <button onClick={props.closeModal} className="btn">
        Back
      </button>
    </div>
  )
}

export default function(props){


  function getCustomStyles(){

    if (props.currentModal === 'image'){
      return({
        maxWidth: '100%'
      })
    }
  }

	return(
    <Modal
	    open={props.modalIsOpen}
	    onRequestClose={props.closeModal}
	    modalStyle={ getCustomStyles() }
	    contentLabel="Modal"
	    onClose={props.closeModal}
  	>
			{props.currentModal === 'about-app' ? <AboutApp /> : null}
      {props.currentModal === 'about-creators' ? <AboutCreators /> : null}
			{props.currentModal === 'image' ? <Image alt={props.imageName} src={props.imageSrc} /> : null}
      <ModalCloseButton closeModal={props.closeModal} />
  </Modal>
  )
}
