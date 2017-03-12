export function closeModal(){
  this.setState({
    modalIsOpen: false
  })
}

export function handleModalClick(currentModal, imageSrc=null, imageName=null){
  this.setState({
    modalIsOpen: true,
    currentModal: currentModal,
    imageSrc: imageSrc,
    imageName: imageName
  })
}
