import React from 'react'
import Modal from 'react-responsive-modal'
import AboutApp from './about_app'
import AboutCreators from './about_creators'
import Image from './image'
import Button from './button'

export default function(props){
  function getCustomStyles(){
    if (props.currentModal === 'image'){
      return({
        maxWidth: '100%'
      })
    }
  }

  function HandleModalType(props){
    switch (props.currentModal) {
      case 'about-app':
        return <AboutApp />
      case 'about-creators':
        return <AboutCreators />
      case 'image':
        return <Image alt={props.imageName} src={props.modalData} />
      default:
        return null
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
      <HandleModalType
        currentModal={props.currentModal}
        modalData={props.modalData}
        imageName={props.imageName}
      />

      <Button
        cb={props.closeModal}
        style={{textAlign: 'center'}}
        label='Back'
      />
  </Modal>
  )
}
