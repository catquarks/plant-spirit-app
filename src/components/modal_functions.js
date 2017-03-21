export function closeModal(){
  this.setState({
    modalIsOpen: false
  })
}

export function handleModalClick(currentModal, modalData=null, imageName=null){
  this.setState({
    modalIsOpen: true,
    currentModal: currentModal,
    modalData: modalData,
    imageName: imageName
  })
}
